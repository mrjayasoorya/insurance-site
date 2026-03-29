#!/usr/bin/env bash
set -u -o pipefail

DIST_DIR="${DIST_DIR:-dist}"
SUBDIR="${SUBDIR:-en}"
REPORT_FILE="${REPORT_FILE:-dist_interlinks_report.txt}"

usage() {
  cat <<EOF
Usage: $(basename "$0") [options]

Options:
  -d, --dist DIR       dist directory (default: dist)
  -s, --subdir NAME    locale subdir under dist (default: en)
  --report FILE        output report file (default: dist_interlinks_report.txt)
  -h, --help           help
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    -d|--dist) DIST_DIR="$2"; shift 2;;
    -s|--subdir) SUBDIR="$2"; shift 2;;
    --report) REPORT_FILE="$2"; shift 2;;
    -h|--help) usage; exit 0;;
    *) echo "Unknown arg: $1"; usage; exit 1;;
  esac
done

SCAN_ROOT="$DIST_DIR/$SUBDIR"
if [[ ! -d "$SCAN_ROOT" ]]; then
  echo "ERROR: scan dir not found: $SCAN_ROOT" >&2
  exit 1
fi

mapfile -t HTML_FILES < <(find "$SCAN_ROOT" -type f -name '*.html' | sort)

python3 - "$DIST_DIR" "$SUBDIR" "$REPORT_FILE" "${HTML_FILES[@]}" <<'PY'
import sys, os, re, posixpath
from html.parser import HTMLParser
from html import unescape
from typing import Optional

dist_dir = sys.argv[1]
subdir   = sys.argv[2]
report   = sys.argv[3]
files    = sys.argv[4:]

def to_source_url_path(file_path: str) -> str:
    rel = file_path.replace("\\", "/")
    base = dist_dir.replace("\\", "/") + "/"
    if rel.startswith(base):
        rel = rel[len(base):]
    url = "/" + rel
    if url.endswith("/index.html"):
        url = url[:-len("index.html")]
    elif url.endswith(".html"):
        url = url[:-len(".html")]
    return url

def sanitize_href(href: str) -> str:
    href = unescape(href or "")
    href = href.strip()
    href = "".join(ch for ch in href if ch >= " " and ch not in "\u007f\u00ad")
    href = re.sub(r"\s+", "", href)
    return href

def ignore_href(href: str) -> bool:
    if not href:
        return True
    low = href.lower()
    if low.startswith(("#","mailto:","tel:","javascript:","data:")):
        return True
    if low.startswith(("http://","https://")):
        return True
    return False

def normalize_to_path(href: str, source_url_path: str) -> Optional[str]:
    href0 = href
    href = href.split("#",1)[0].split("?",1)[0]
    if not href:
        return None

    if href.startswith("/"):
        return href

    base = source_url_path
    if not base.endswith("/"):
        base = base.rsplit("/",1)[0] + "/"

    joined = posixpath.normpath(posixpath.join(base, href))
    if not joined.startswith("/"):
        joined = "/" + joined

    if href0.endswith("/") and not joined.endswith("/"):
        joined += "/"

    return joined

def exists_in_dist(url_path: str) -> bool:
    p = re.sub(r"//+", "/", url_path)
    fs1 = os.path.join(dist_dir, p.lstrip("/"), "index.html")
    fs2 = os.path.join(dist_dir, p.lstrip("/") + ".html")
    fs3 = os.path.join(dist_dir, p.lstrip("/"))
    return os.path.isfile(fs1) or os.path.isfile(fs2) or os.path.isfile(fs3)

def nearest_ident(stack):
    for tag, attrs in reversed(stack):
        if attrs.get("id"):
            return f"{tag}#{attrs['id']}"
        if attrs.get("class"):
            return f"{tag}.{attrs['class']}"
    return ""

class LinkParser(HTMLParser):
    def __init__(self, source_file):
        super().__init__(convert_charrefs=True)
        self.source_file = source_file
        self.stack = []
        self.anchors = []
        self.capture = False
        self.href = ""
        self.text = []
        self.last_heading = ""

    def handle_starttag(self, tag, attrs):
        attrs = dict((k,v or "") for k,v in attrs)
        self.stack.append((tag, attrs))
        if tag == "a":
            self.capture = True
            self.href = sanitize_href(attrs.get("href",""))
            self.text = []

    def handle_endtag(self, tag):
        if tag == "a" and self.capture:
            self.anchors.append({
                "file": self.source_file,
                "url": to_source_url_path(self.source_file),
                "heading": self.last_heading,
                "ident": nearest_ident(self.stack),
                "href": self.href,
                "text": " ".join("".join(self.text).split())
            })
            self.capture = False
            self.href = ""
            self.text = []

        for i in range(len(self.stack)-1, -1, -1):
            if self.stack[i][0] == tag:
                self.stack = self.stack[:i]
                break

    def handle_data(self, data):
        if self.stack and self.stack[-1][0] in ("h1","h2","h3","h4","h5","h6"):
            h = " ".join(data.split())
            if h:
                self.last_heading = h
        if self.capture:
            self.text.append(data)

broken = 0
checked = 0

with open(report,"w",encoding="utf-8") as out:
    out.write(f"Scanning: {os.path.join(dist_dir, subdir)}\n")
    out.write("Mode: internal interlink validation (filesystem)\n\n")

    for f in files:
        try:
            html = open(f,"r",encoding="utf-8",errors="replace").read()
        except Exception as e:
            out.write(f"ERROR reading {f}: {e}\n")
            continue

        p = LinkParser(f)
        p.feed(html)

        for a in p.anchors:
            href = a["href"]
            if ignore_href(href):
                continue

            resolved = normalize_to_path(href, a["url"])
            if not resolved:
                continue

            if not (resolved == f"/{subdir}" or resolved.startswith(f"/{subdir}/")):
                continue

            checked += 1
            if not exists_in_dist(resolved):
                broken += 1
                out.write(
                    "BROKEN_FS\n"
                    f"  source_url : {a['url']}\n"
                    f"  source_file: {a['file']}\n"
                    f"  section    : {a['heading']}\n"
                    f"  ident      : {a['ident']}\n"
                    f"  anchor_text: {a['text']}\n"
                    f"  href_raw   : {href}\n"
                    f"  resolved   : {resolved}\n\n"
                )

    out.write("Summary\n")
    out.write(f"  links_checked : {checked}\n")
    out.write(f"  broken_links  : {broken}\n")

print(f"Report written to: {report}")
if broken:
    print(f"Broken links found: {broken}")
    sys.exit(2)
else:
    print("No broken internal links found.")
PY

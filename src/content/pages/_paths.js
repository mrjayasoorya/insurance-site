// export const EN = (p) => (p.startsWith("/en/") ? p : `/en${p.startsWith("/") ? "" : "/"}${p}`);
export const EN = (href = "") => {
  if (!href) return href;
  if (href.startsWith("http")) return href;
  if (href.startsWith("/en/")) return href;
  // keep root "/" as "/en/"
  if (href === "/") return "/en/";
  // Add trailing slash if missing
  const path = href.endsWith("/") ? href : `${href}/`;
  return `/en${path.startsWith("/") ? "" : "/"}${path}`;
};

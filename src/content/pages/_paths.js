export const EN = (p) => (p.startsWith("/en/") ? p : `/en${p.startsWith("/") ? "" : "/"}${p}`);

// After `astro build`: the template writes links like href="/articles". On GitHub Pages the
// site lives at /dodgerbytes/, so this adds the base path to every site-root link in the
// built HTML. If basePath is "/" (your own domain or Cloudflare Pages) it does nothing.
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const cfg = readFileSync("src/lib/config/index.ts", "utf8");
const base = (cfg.match(/basePath:\s*"([^"]*)"/)?.[1] ?? "/").replace(/\/$/, "");
if (!base) {
  console.log("[fix-base] basePath is /, nothing to do");
  process.exit(0);
}

const esc = base.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
// href="/x", src="/x", action="/x" (not //, not already under the base)
const attr = new RegExp(`\\b(href|src|action)=(["'])/(?!/)(?!${esc.slice(1)}(?:/|["']))`, "g");
// <meta http-equiv="refresh" content="0; url=/categories/x/1">
const refresh = new RegExp(`(url=)/(?!/)(?!${esc.slice(1)}/)`, "g");

let files = 0;
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { if (name !== "pagefind") walk(p); continue; }
    if (!/\.html$/.test(name)) continue;
    const before = readFileSync(p, "utf8");
    const after = before.replace(attr, `$1=$2${base}/`).replace(refresh, `$1${base}/`);
    if (after !== before) { writeFileSync(p, after); files++; }
  }
};
walk("dist");
console.log(`[fix-base] added ${base} to links in ${files} pages`);

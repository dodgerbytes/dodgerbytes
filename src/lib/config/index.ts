import type { Link } from "../types";

// ── Site settings ───────────────────────────────────────────────────────────
// Hosted free on GitHub Pages at https://dodgerbytes.github.io/dodgerbytes
// Moving to your own domain (or Cloudflare Pages) later? Change `url` to the new
// address and `basePath` to "/".
export const SITE = {
  title: "DodgerBytes",
  description:
    "Dodgers news, rumors, transactions and free agency, posted first. From the DodgerBytes TikTok and Discord.",
  author: "DodgerBytes",
  url: "https://dodgerbytes.github.io",
  github: "https://github.com/dodgerbytes/dodgerbytes",
  locale: "en-US",
  dir: "ltr",
  charset: "UTF-8",
  basePath: "/dodgerbytes",
  postsPerPage: 9,
};

export const NAVIGATION_LINKS: Link[] = [
  { href: "/categories/rumors", text: "Rumors" },
  { href: "/categories/free-agency", text: "Free Agency" },
  { href: "/categories/transactions", text: "Transactions" },
  { href: "/categories/game-recaps", text: "Game Recaps" },
  { href: "/categories/awards", text: "Awards" },
  { href: "/categories/on-this-day", text: "On This Day" },
  { href: "/categories/around-mlb", text: "Around MLB" },
];

export const OTHER_LINKS: Link[] = [
  { href: "/about", text: "About DodgerBytes" },
  { href: "/authors", text: "Authors" },
  { href: "/rss.xml", text: "RSS" },
  { href: "/sitemap-index.xml", text: "Sitemap" },
];

export const SOCIAL_LINKS: Link[] = [
  { href: "https://www.tiktok.com/@dodger.bytes", text: "TikTok", icon: "tiktok" },
  { href: "https://linktr.ee/dodgerbytes", text: "All DodgerBytes socials (Linktree)", icon: "link" },
  { href: "https://github.com/dodgerbytes/dodgerbytes", text: "GitHub", icon: "github" },
];

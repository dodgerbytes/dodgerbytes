# DodgerBytes

**Dodgers news, rumors and transactions, posted first.**

DodgerBytes is an independent, fan-run Dodgers news account on TikTok, Discord and the web.

- 🌐 Website: https://dodgerbytes.github.io/dodgerbytes
- 📱 TikTok: [@dodger.bytes](https://www.tiktok.com/@dodger.bytes)
- 🔗 All socials: [linktr.ee/dodgerbytes](https://linktr.ee/dodgerbytes)

---

## About this repo

This repo is the DodgerBytes website. It's built with [Astro](https://astro.build) on top of the open-source [Astro News](https://github.com/Mrahmani71/astro-news) theme (MIT license), and hosted free on GitHub Pages. Every change to `main` republishes the site automatically, usually within 2 minutes.

### Add a story

1. Make a folder in `src/content/articles/` named after the story, like `dodgers-sign-someone`.
2. Inside it, add `index.mdx`. Copy one of the existing stories and change the details at the top:
   - `title`: 60 characters max
   - `description`: 160 characters max
   - `category`: one of `rumors`, `free-agency`, `transactions`, `game-recaps`, `awards`, `on-this-day`, `around-mlb`
   - `publishedTime`: the date and time, like `2026-11-20T18:00:00.000Z` (posts dated in the future go live on that day)
   - `isMainHeadline: true`: the big story at the top of the homepage
3. Put the story's image in `src/assets/images/articles/<same-folder-name>/cover.jpg` (16:9 works best).

### Change colors, links or the menu

- Site name, address and menu: `src/lib/config/index.ts`
- Colors (Dodger blue `#005A9C`, Dodger red `#EF3E42`, navy `#002244`): `src/styles/global.css`

### Run it on your computer (optional)

```bash
npm install
npm run dev      # preview at http://localhost:4321/dodgerbytes
npm run build    # build the site into dist/
```

---

DodgerBytes is not affiliated with the Los Angeles Dodgers or Major League Baseball.

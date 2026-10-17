# Sahil Kumar · DreamOS Portfolio (Next.js)

An interactive alternative portfolio for **Sahil Kumar**, created by adapting the original DreamOS CodePen layout by **Mahri**. The distinctive **1050×800 desktop layout, midnight-iris dark aesthetic, four icon grid, side companion, project viewer, music player, glass panels, popup windows and animations are retained**. On narrow screens the entire desktop scales proportionally to preserve its arrangement.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production build run `npm run build` and then `npm start`.

## Desktop navigation

- **about.exe** → biography, core skills, education and professional links.
- **experience.exe** → Dizz2Bizz Solutions (Oct 2026–present), Agyle Studio (Jan 2025–Oct 2026), PROPEERS internship (May–Oct 2024), BCA completed May 2024.
- **skills.exe** → WordPress, WooCommerce, Shopify, React, frontend, automations and deployment tooling.
- **projects.exe** → 12 projects from the user's existing portfolio. Each has a live website link; personal projects also have GitHub links where available.
- **portfolio_viewer.exe** → 3 featured projects with previous/next controls.
- **project_archive.exe** → 12 horizontally scrollable project thumbnails with preview windows.
- **contact_status.exe** → direct email/LinkedIn actions. The top-bar mail button also opens an email prompt.
- **focus_radio.exe** → Same Place — JOY., Renegade — Aaryan Shah, and sdp interlude — Travis Scott, with Apple Music 30-second previews and full-song links. Playback is user-initiated.
- **Pixel companion** → original animated cloud companion retained as a playful detail.

## Data and fidelity

- Project names/descriptions/images/links originate from the live portfolio's GitHub source `SahilSingh-kk/sahil-kumar-portfolio`, alongside user-provided resume details.
- **Resume dates override older portfolio data:** Dizz2Bizz (October 2026–present), Agyle Studio (January 2025–October 2026), BCA (May 2024).
- **Divine Events & Tours, MyAstroTell and Chanteur Designs use original JPEG screenshots from the previous portfolio GitHub repository.** `npm run dev` or `npm run build` first downloads and caches those images in `public/projects/original/`; they are then served locally by Next.js. If you run without network access before the first download, the browser tries the same exact original screenshot on GitHub, then the existing SVG placeholder. Other project screenshots retain their existing hosted URLs.
- Original layout creator: **Mahri** — https://codepen.io/mahricodes/pen/azpyVgW. The original combined source is preserved in `reference/ORIGINAL_SOURCE.html`.
- Code uses a Next.js client-side wrapper around the original CodePen DOM and event handlers for visual/behavioral fidelity; it is **not** a wholesale rewrite into React components.

## Change portfolio details

- `content/dreamos-markup.ts`: visible content and external URLs for projects, skills, timeline, and contact.
- `app/dreamos.css`: all original layout styles plus a small clearly labeled override block.
- `public/dreamos/runtime.js`: gallery, carousel, audio and companion interactions.
- `public/projects/*.svg`: local screenshot fallbacks.
- `app/layout.tsx`: metadata.

## Deploy on Vercel

Push this folder to a **new GitHub repository** (don't overwrite your existing portfolio). Import it into Vercel, select Next.js and deploy. No environment variables are required.

## Midnight Iris customization (October 2026)

- Preserves exact DreamOS layout, window manager and visual structure; uses `theme-midnight` CSS overrides to create a darker charcoal/plum/teal aesthetic.
- Center viewer showcases **Divine Events & Tours**, **MyAstroTell**, and **Chanteur Designs** in that order. Other 12 project archive entries remain unchanged.
- Focus Radio playlist uses **30-second Apple Music previews** of **Same Place – JOY.**, **Renegade – Aaryan Shah**, and **sdp interlude – Travis Scott**. Use the link below the track title to hear the full song at Apple Music. **No full-length commercial recordings are bundled.** Preview availability is controlled by Apple and may vary by region or time.
- To replace previews with your own legally hosted files, edit `data-src` in `content/dreamos-markup.ts`.

## Original featured project image files

The three featured images are sourced **unchanged** from the original portfolio project at
`https://github.com/SahilSingh-kk/sahil-kumar-portfolio/tree/main/public/assets/projects`:

- `divine-events-tours-preview.jpg`
- `myastrotell.jpg`
- `chanteur-designs.jpg`

Images are fetched into `public/projects/original/` on the first `npm run dev` or `npm run build` using `npm run fetch:images`. They are not generated illustrations and are used in the **center featured project slides and corresponding gallery/projects windows**. To download images in advance, run `npm run fetch:images` with internet access. The original JPEG bytes are not embedded in this source ZIP because the source host wasn't directly accessible from the packaging environment; the project downloads them automatically.


## Theme update — Graphite / Amber

The active theme is `theme-graphite`. Main backgrounds are black and charcoal; secondary surfaces are neutral grey. Interactive highlights use `#FFC663`. Edit these colors near the end of `app/dreamos.css` (the `SAHIL / GRAPHITE + AMBER THEME` section). The original JPG project screenshots, sections, playlist and animations remain unchanged.

After updating the project, commit and push to GitHub main to trigger an automatic Vercel redeploy.

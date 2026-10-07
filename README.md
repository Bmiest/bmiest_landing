# bmiest_landing

bmiest.be: the front door of the bmiest World of Warcraft stream. A link hub and portfolio
laid out as WoW's Adventure Guide: the stream and each project (overlay, Race to Dutch First,
wishlist updater, design language) is an entry, its links are the loot.

Static HTML, CSS and JavaScript, no build step. GitHub Pages serves `main` on bmiest.be.

- `index.html`, `css/site.css`, `js/site.js`, `js/i18n.js` (NL + EN)
- `css/tokens.css`: byte copy of the overlay's tokens (Bmiest/bmiest_wow_streaming_theme)
- Live on load: DecAPI (LIVE), Raider.IO (Shiftheal, Mythic kills),
  racetodutchfirst.nl `data/race.json` (standing). Everything falls back to static content.
- `DESIGN.md`: this page's part of the bmiest design language v2; `PRODUCT.md`: who it's for.
- Image provenance: `img/*/PROVENANCE.md` and the `impeccable:prompt` chunks/sidecars.

Run locally: `python3 -m http.server 8790`, then open http://localhost:8790/.

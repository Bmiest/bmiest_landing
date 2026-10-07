# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML, CSS and JavaScript, no build step and no framework, like the rest of the bmiest family. `tokens.css` is a byte copy of the overlay's `css/tokens.css` (Bmiest/bmiest_wow_streaming_theme). Hosted on GitHub Pages from `main` on the apex `bmiest.be` (www redirects to the apex). Repository `Bmiest/bmiest_landing` (public).

## Users

bmiest.be serves three audiences equally (confirmed 2026-10-07); none leads:

- **Twitch viewers** arriving from a stream panel, chat or a bio link, looking for the channel and the other links.
- **The Dutch WoW community**, raiders and guilds who know the race site or the overlay and want to know who's behind them.
- **Project-curious peers**: developers and streamers looking at what was built and how.

## Product Purpose

bmiest's front door: a link hub plus a personal portfolio. It says who bmiest is, carries the links (Twitch, YouTube, Twitch clips, GitHub, Race to Dutch First) and shows the projects with short write-ups. Success: any of the three audiences finds what they came for, the channel, a project or the person behind them, without hunting.

## Positioning

Everything on it is built by a raiding streamer for their own raids and stream, from live raid data (Raider.IO, Warcraft Logs, StreamElements, DecAPI), and the projects are real and running. It's the hub of the family, not another generic link-in-bio page.

## Operating Context

- Linked from the Twitch channel `bmiest` (panels, bio, chat) and from the family's other sites.
- Raid nights are Wednesday and Sunday, 20:00–23:00 (Europe/Brussels).
- Shared links get previewed by Discord, Twitch and other unfurlers; Cloudflare's geo challenge on bmiest.be must exempt the apex and www (see the bmiest-geo-challenge note) or foreign visitors and previews get challenged.

## Capabilities and Constraints

- **Dutch and English everywhere**, like the family. Game names (guilds, raids, bosses, characters) are never translated.
- **Projects to show** (the live ones, each with its own site):
  - Stream overlay: `streamoverlay.bmiest.be`, repo Bmiest/bmiest_wow_streaming_theme (public).
  - Race to Dutch First: `racetodutchfirst.nl`; the repo is private. The race site itself stays brand-neutral.
  - WoWAudit wishlist updater: `wishlistupdater.bmiest.be`, repo Bmiest/bmiest_wowaudit_wishlist_updater (public). The dashboard is for the operator.
  - Design system: Bmiest/bmiest-design (public); `design.bmiest.be` is planned and not live.
- **Links:** Twitch (`twitch.tv/bmiest`), YouTube (`youtube.com/@bmiest`, added 2026-10-07), Twitch clips (`twitch.tv/bmiest/clips`), GitHub (`github.com/Bmiest`), Race to Dutch First. No Discord.
- **The tools lead (user, 2026-10-07):** the page is as much about the tools built as about the stream; it opens on a hub of all four tools.
- **Live on load:** the LIVE state from DecAPI, the race standing from racetodutchfirst.nl's `race.json`, Shiftheal from Raider.IO; every block falls back to static content when a fetch fails.

## Brand Commitments

- **bmiest** is the streamer brand and the whole identity here: no real name, no day job, and no link to reniersworx.be (confirmed 2026-10-07).
- The page belongs to the bmiest family, design language v2 (Bmiest/bmiest-design DESIGN.md), and carries bmiest branding like the overlay and the wishlist.
- The operator's characters: Shiftheal (Holy Priest) and Bhikhu; guild Kelderklasse.
- Standing preference from the family: the overlay's own language, more gamer-like, never a generic dark dashboard.

## Evidence on Hand

- The live sites themselves, and the overlay's demo pages and graphics (`graphics/panel-*.png`, `profile-banner.png`, boss cut-outs) in the overlay repo.
- Live data from Raider.IO and the race site's `race.json`.
- No follower counts beyond live counters, no testimonials, no press. Don't invent them.

## Product Principles

1. **Every link is one tap away.** The links are the job; the portfolio never buries them.
2. **Show the work running.** Projects are shown live or as they really look, not described in adjectives.
3. **bmiest only.** The person behind it stays out of it.
4. **One family.** It reads as the same world as the overlay and the wishlist.
5. **Bilingual by default.**

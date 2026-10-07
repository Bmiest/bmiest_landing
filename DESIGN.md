---
name: bmiest.be
description: bmiest's front door as WoW's Adventure Guide, in the bmiest family's design language v2 (the stream is the overview, each project an encounter, its links the loot).
colors:
  ink-900: "#0a0b0d"
  ink-850: "#0e1014"
  ink-800: "#131519"
  ink-750: "#171a1f"
  ink-700: "#1e2228"
  ink-600: "#2a2f37"
  ink-500: "#3a414b"
  ink-400: "#5b6470"
  ink-300: "#818b98"
  ink-200: "#a8b1bc"
  paper: "#eef1f5"
  paper-dim: "#c9d0d8"
  jade: "#3fd9a4"
  jade-ghost: "rgba(63,217,164,.13)"
  gold: "#d8b263"
  rose: "#d98b8b"
  live-red: "#c93339"
  void-glow: "rgba(150,90,255,.28)"
  jade-glow: "rgba(63,217,164,.2)"
typography:
  display:
    fontFamily: "'Outfit', 'Segoe UI', system-ui, -apple-system, sans-serif"
    fontSize: "clamp(64px, 7.4vw, 112px)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-.03em"
  headline:
    fontFamily: "'Outfit', 'Segoe UI', system-ui, -apple-system, sans-serif"
    fontSize: "clamp(30px, 3.2vw, 44px)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-.02em"
  lead:
    fontFamily: "'Outfit', 'Segoe UI', system-ui, -apple-system, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.5
  entry:
    fontFamily: "'Outfit', 'Segoe UI', system-ui, -apple-system, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  encounter:
    fontFamily: "'Outfit', 'Segoe UI', system-ui, -apple-system, sans-serif"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.15
  button:
    fontFamily: "'Outfit', 'Segoe UI', system-ui, -apple-system, sans-serif"
    fontSize: "15px"
    fontWeight: 800
    letterSpacing: ".1em"
  loot:
    fontFamily: "'Outfit', 'Segoe UI', system-ui, -apple-system, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    letterSpacing: ".08em"
  body:
    fontFamily: "'Outfit', 'Segoe UI', system-ui, -apple-system, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
  bug:
    fontFamily: "'Outfit', 'Segoe UI', system-ui, -apple-system, sans-serif"
    fontSize: "14px"
    fontWeight: 800
    letterSpacing: ".1em"
  ability-value:
    fontFamily: "'Outfit', 'Segoe UI', system-ui, -apple-system, sans-serif"
    fontSize: "13px"
    fontWeight: 600
  label:
    fontFamily: "'Outfit', 'Segoe UI', system-ui, -apple-system, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    letterSpacing: ".12em"
  label-micro:
    fontFamily: "'Outfit', 'Segoe UI', system-ui, -apple-system, sans-serif"
    fontSize: "10px"
    fontWeight: 800
    letterSpacing: ".16em"
  numeric:
    fontFamily: "'JetBrains Mono', 'Cascadia Mono', Consolas, monospace"
    fontSize: "12px"
    fontWeight: 400
    fontFeature: "tnum"
rounded:
  none: "0px"
  pill: "999px"
spacing:
  gutter: "24px"
  gutter-phone: "16px"
  gutter-narrow: "12px"
  wrap: "1360px"
  top: "92px"
  top-phone: "72px"
  ticker: "52px"
  guide-gap: "48px"
  list-gap: "8px"
  stack-gap: "64px"
components:
  bug-live:
    backgroundColor: "{colors.live-red}"
    textColor: "{colors.paper}"
    typography: "{typography.bug}"
    rounded: "{rounded.none}"
    padding: "0 18px"
    height: "40px"
  bug-mark:
    backgroundColor: "{colors.jade}"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.none}"
    width: "40px"
    height: "40px"
  bug-name:
    backgroundColor: "{colors.ink-900}"
    textColor: "{colors.paper}"
    typography: "{typography.bug}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "40px"
  bug-slot:
    backgroundColor: "{colors.ink-750}"
    textColor: "{colors.paper-dim}"
    rounded: "{rounded.none}"
    padding: "0 18px"
    height: "40px"
  bug-day:
    backgroundColor: "{colors.jade}"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.none}"
    padding: "0 18px"
    height: "40px"
  lang-block:
    backgroundColor: "{colors.ink-900}"
    textColor: "{colors.ink-300}"
    rounded: "{rounded.none}"
    padding: "0 14px"
    height: "40px"
  lang-block-active:
    backgroundColor: "{colors.jade}"
    textColor: "{colors.ink-900}"
  pill:
    backgroundColor: "{colors.ink-750}"
    textColor: "{colors.ink-200}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "6px 15px 6px 11px"
  pill-jade:
    backgroundColor: "{colors.ink-750}"
    textColor: "{colors.jade}"
  encounter:
    backgroundColor: "{colors.ink-800}"
    textColor: "{colors.paper}"
    typography: "{typography.encounter}"
    rounded: "{rounded.none}"
    height: "66px"
  encounter-outline:
    backgroundColor: "{colors.ink-600}"
  encounter-outline-hover:
    backgroundColor: "{colors.ink-400}"
  encounter-active:
    backgroundColor: "{colors.ink-750}"
  encounter-outline-active:
    backgroundColor: "{colors.jade}"
  encounter-head:
    backgroundColor: "{colors.ink-750}"
    textColor: "{colors.ink-300}"
    width: "60px"
  button-primary:
    backgroundColor: "{colors.jade}"
    textColor: "{colors.ink-900}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 32px 0 22px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.paper}"
  button-primary-live:
    backgroundColor: "{colors.live-red}"
    textColor: "{colors.paper}"
  button-primary-live-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.live-red}"
  loot-drop:
    backgroundColor: "{colors.ink-750}"
    textColor: "{colors.paper}"
    typography: "{typography.loot}"
    rounded: "{rounded.none}"
    padding: "0 28px 0 18px"
    height: "52px"
  loot-drop-hover:
    backgroundColor: "{colors.ink-600}"
    textColor: "{colors.jade}"
  ability-key:
    backgroundColor: "{colors.ink-750}"
    textColor: "{colors.ink-200}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 11px"
    height: "30px"
  ability-value:
    backgroundColor: "{colors.ink-800}"
    textColor: "{colors.paper}"
    typography: "{typography.ability-value}"
    rounded: "{rounded.none}"
    padding: "0 20px 0 11px"
    height: "30px"
  ribbon:
    backgroundColor: "{colors.ink-800}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    height: "46px"
  shot-frame:
    backgroundColor: "{colors.ink-850}"
    rounded: "{rounded.none}"
  ticker:
    backgroundColor: "{colors.ink-900}"
    textColor: "{colors.paper-dim}"
    height: "52px"
  ticker-label:
    backgroundColor: "{colors.jade}"
    textColor: "{colors.ink-900}"
    padding: "0 20px"
---

# Design System: bmiest.be

<!-- Recorded from the shipped build (index.html, css/site.css, css/tokens.css, js/site.js, js/i18n.js) on 2026-10-07.
     Finish review: reviewer disposition "fix" across two verdict rounds; every scored fix resolved except the
     mobile design-specimen plate, which was then fixed (plate inset onto the specimen panel, URL hidden on
     phones) without a further verdict round.
     Scope tags: [family] = must match Bmiest/bmiest-design DESIGN.md; [landing] = this page only.
     tokens.css is a byte copy of the overlay's (Bmiest/bmiest_wow_streaming_theme css/tokens.css); do not edit it here. -->

## Overview

**Creative North Star: "The Adventure Guide"**

bmiest's front door opens like WoW's Adventure Guide. A left column carries the name in poster caps, one lead line and the encounter list: the Overview (the hub), the stream, then the four tools (overlay, Race to Dutch First, wishlist updater, design language). The page opens on the hub: the four tools as plates on one board, each a real shot that opens its entry, over "Built for the raid, by the raider" and the channel loot (Watch on Twitch, YouTube, Clips, GitHub). The tools lead as much as the stream (user, 2026-10-07). The stage on the right shows one entry at a time: its art at full stage height, a title, two lines of copy, an abilities row of flush label/value chips, and the loot, where Watch on Twitch (or the project's own link) is the slanted jade primary and the rest are slanted ink loot rows. The broadcast bug crowns the page and a kills ticker closes the first viewport edge to edge. Choosing an encounter wipes the art in along the family slant; every entry has its own hash.

It is the family's v2 language unchanged: flat near-black ink, Outfit 800 caps, jade as brand and selection, gold only for something earned, live-red only while the channel is live, right-edge slants on every chip, ribbon and button, flush square blocks for the bug, the language switch and the ticker, mono for compared numbers. The art is the work running: Shiftheal's render before the boss Kelderklasse is on, in the jade and void glow, and the projects' real screenshots in a slanted model-viewer frame. The design entry draws its specimen from the tokens it documents.

Confirmed rejections (direction contract): the link-in-bio column, and the hero plus project-card-grid portfolio. Family standing preference: never a generic dark dashboard.

**Key Characteristics:**
- [family] Flat ink scale, Outfit + JetBrains Mono, jade + gold, from the overlay's tokens.css as a byte copy.
- [family] Right-edge slant on ribbons, pills, buttons, chips and tiles; square corners everywhere else; bug, switch and ticker flush and square.
- [family] Colour as meaning: jade = brand/live/selected, gold = earned, live-red = on air only, rose = late or failed.
- [landing] The Adventure Guide: encounter list left, one entry on the stage, loot as the actions; it opens on the hub board of the four tools.
- [landing] The work shown running: live LIVE state, live race standing, Shiftheal from Raider.IO, real screenshots.
- [landing] Carries bmiest branding (the jade cast mark in the bug and footer), unlike the brand-neutral race site.

## Colors

The family's near-black ink ramp with one cool jade voice, one warm gold voice, and broadcast red that only appears while the channel is live.

### Primary
- **Mistweaver Jade** (jade): [family] brand and selection. The bug's cast-mark block and day block ("Wed + Sun 20:00"), the active language block, the selected encounter's outline and subline, the primary button, the loot rows' icons and hover text, the ticker label and its 2px top edge, the journal heading's cap, the second half of an entry title, links, the footer mark, and focus rings (2px outline, 3px offset). Jade-ghost only for link underlines and selection.

### Secondary
- **Podium Gold** (gold): [family] earned and nothing else. Here: the race leader's name and "Cutting Edge" in the abilities row, the "first Dutch kill" tag in the ticker, the leader ribbon's outline in the specimen.

### Tertiary
- **Broadcast Red** (live-red): [family] on air only. The LIVE block in the bug, the Watch button while live and the 2px inset ring on the stream encounter's head while live; shown only when DecAPI reports the channel live. Red is a ground or a ring, never small text on ink: the build's 10px red "on air" tag before the live stream title reaches only 3.8:1 on ink-900 and is a defect, not a pattern.
- **Faded Rose** (rose): [family] late or failed; on this page only as its role tile in the design specimen.

### Neutral
- **Raid Night Black** (ink-900): page ground, bug name block, ticker band, inactive language block, the screenshot caption plate, ink text on jade and gold.
- **Table Ink** (ink-850): the screenshot well and the specimen panel.
- **Panel Ink** (ink-800): encounter bodies, ribbon bodies, ability values.
- **Raised Ink** (ink-750): pills, ability keys, loot rows, encounter heads, the bug's guild slot, the selected encounter's body.
- **Rule Ink** (ink-700): 1px frame lines on screenshot and specimen, the footer rule, the selected encounter's head.
- **Outline Ink** (ink-600): the encounter's and ribbon's 1px slanted outline, loot-row hover, scrollbar thumb.
- **Muted Ink** (ink-400): the encounter outline on hover.
- **Caption Grey** (ink-300): encounter sublines, inactive language, the journal heading, the footer signature.
- **Soft Grey** (ink-200): pill text, ability keys, the realm in the bug, the screenshot URL, ticker dates.
- **Paper** (paper): primary text and the primary button's hover; never pure white.
- **Faded Paper** (paper-dim): the lead, entry copy, the guild slot, ticker body, footer links.

### Hero atmosphere [landing]
- **Void Glow** (void-glow) and **Jade Glow** (jade-glow): only behind Shiftheal and the boss on the stream entry, as two closest-side radials. Web-only; the overlay's bitrate rule forbids gradients on stream.

### Named Rules
**The Gold Is Earned Rule.** [family] Gold marks something earned: here the race leader, Cutting Edge and a first Dutch kill. A tag, a hover, a "progress" state or a project label is never gold.

**The Red Means On Air Rule.** [family] Broadcast red appears only while the channel is really live, and every red mark disappears when it is not. A failure is rose.

**The Jade Selects Rule.** [landing] The selected encounter is drawn by a jade outline and a jade subline, nothing else; hover only lifts the outline to ink-400 and focus to paper.

## Typography

**Display Font:** Outfit (with Segoe UI, system-ui)
**Label/Mono Font:** JetBrains Mono (with Cascadia Mono, Consolas), tabular figures

**Character:** One geometric sans from the 112px name to 10px tags; mono only for figures a visitor compares (kills "x/8", ilvl, dates, the specimen's "6/8").

### Hierarchy
- **Display** (display): [landing] "BMIEST" once, uppercase, balanced; 60px under 400px.
- **Headline** (headline): [landing] each entry's title, uppercase, balanced, the second part in jade (paper while live on the stream entry).
- **Lead** (lead): the one line under the name, max 34ch, paper-dim; 17px on phones.
- **Entry** (entry): an entry's two lines, max 58ch, paper-dim.
- **Encounter** (encounter): encounter names in the list, ellipsis; 15px on phones, where the 12px ink-300 subline is hidden.
- **Button** (button): the primary, uppercase.
- **Loot** (loot): loot rows, uppercase.
- **Body** (body): page base and ticker items (15px; 14px on phones).
- **Bug** (bug): [family] the bug name block uppercase; LIVE, slot and day at 13px; 12-13px under 720px.
- **Ability value** (ability-value): ability values; numbers inside in mono 12px.
- **Label** (label): pills, ability keys (at 800), the journal heading (.14em, ink-300); uppercase.
- **Label micro** (label-micro): ticker tags (jade "Mythic", gold first Dutch kill); uppercase.
- **Numeric** (numeric): screenshot URLs, ticker dates (13px), kill counts in ability values.

### Named Rules
**The Poster Voice Rule.** [family] Display and headlines are Outfit 800 uppercase with tight tracking; nothing else is that heavy except the bug, the buttons, the language switch and ability keys.

**The Compared Number Rule.** [family] A number a visitor compares is JetBrains Mono with tabular figures.

## Layout

[landing] One container, 1360px max, 24px gutters (16px under 720px, 12px under 400px). The bug bar is 92px tall (72px under 720px), the ticker 52px. From 1100px the guide is a two-column grid: the index column (300-400px) and the stage (the rest), 48px apart, filling exactly the first viewport between bug and ticker (at least 700px tall). The index stacks name, lead and the encounter list, the list pushed to the column's bottom; encounters are 54px tall, 8px apart (six of them). On the stage an entry is the art (the remaining height) over a body row of text left and loot right (40px apart); project art is inset 4% from the stage's left edge. The hub's body is one column with its loot as a row, and its board is positioned inside the art box so it takes exactly the height the text leaves: a 2 x 2 grid, 12px gaps.

Below 1100px every entry is its own section, stacked 64px apart, and the list becomes a jump strip: 48px encounters in an auto-fill grid (160px minimum, 6px gaps; one column under 720px). The stream art is a 380-560px band (420px on phones) and comes after its loot; the hub likewise puts its heading and loot first, then the board as a 2 x 2 of 4:3 thumbnails (names only, 8px gaps under 720px); screenshots take 16:10; loot rows lay out in a wrapping row, then full-width stacked under 720px. Everything works at 350px (the bug's guild slot drops there).

## Elevation & Depth

Flat. No drop shadows. Depth comes from the ink ramp (ink-900 ground, ink-850 wells, ink-800 bodies, ink-750 raised chips), 1px ink-700 frame lines, and on the stream entry from the render standing in its glow with its feet faded by a mask. `box-shadow` appears only as a drawn line: the 2px paper ring around the LIVE dot and the 2px inset live-red ring on the stream encounter's head while live. Gradients on this page are limited to the two hero radials, the figure's foot mask and the ticker's 64px right-edge fade.

### Named Rules
**The Flat Ink Rule.** [family] Surfaces separate by tone and 1px lines, never by shadow or blur.

## Shapes

[family] Corners are square. The signature is the right-edge slant, `clip-path: polygon(0 0, 100% 0, calc(100% - N) 100%, 0 100%)`. On this page N is 22px on the screenshot frame and the specimen panel, 12px on the primary button and loot rows, 11px on encounter and ribbon outlines and specimen role tiles, 10px on their inner bodies, encounter heads, ribbon accent blocks and the caption plate, 8px on ability values, 6px on pills, 5px on the footer mark, 4px on the journal heading's cap. Outlines are a slanted outer clip one pixel larger than the inner one. The only round thing is the LIVE dot. Ability keys, the bug, the language switch and the ticker are flush and square. Marks are drawn SVG (Twitch, YouTube, clips, GitHub, out-arrow, check, cast) in one stroke family.

[landing] The stage wipe runs along the slant: the art enters from the right with a leading edge leaning 80px down and to the right (620ms, cubic-bezier(.16,1,.3,1)); the body rises 14px after 90ms.

### Named Rules
**The One Slant Rule.** [family] Slants go down and to the right, on the trailing edge only, and a slanted element never also gets rounded corners.

## Components

### Broadcast bug [family]
Flush square 40px blocks (34px under 720px), no gaps: LIVE (live-red, pulsing dot, hidden unless live), the jade cast mark, "bmiest" on ink-900 (jade on hover, links to Twitch), the guild slot on ink-750 ("Kelderklasse · EU-Draenor"; realm hidden under 720px, slot under 350px), and the raid days in jade (hidden under 720px).

### Language switch [family]
NL | EN as two flush blocks at the bug's height, 13px/800/.12em; the active one solid jade with ink text, the other ink-900 with ink-300 (paper on hover). [landing] The language is the stored choice, else the browser's (Dutch for nl-*), else English.

### Encounter [landing]
The overlay's character-select pick as the encounter list: a 1px slanted ink-600 outline (ink-400 on hover, paper on focus, jade when selected) around an ink-800 body (ink-750 selected), a 60px slanted head tile (ink-750; the project's mark or a head crop at `object-position: 50% 0`), the name in encounter type and an ink-300 subline (the site's host; jade when selected). The stream's head gets a 2px live-red inset ring while live. Above the list sits its nav heading: label type in ink-300 behind a 4px-slanted 11px jade cap.

### Primary button [family]
Solid jade, ink text, button type, a 12px trailing slant, 52px tall, a 20px drawn icon; hover turns it paper. One per entry: Watch on Twitch on the stream (live-red with paper text while live, "Live now · watch"; paper with red text on hover), the project's own link elsewhere with a 16px out-arrow after the label.

### Loot row [landing]
The secondary action: a slanted ink-750 chip at the button's height and slant, loot type in paper, an 18px jade drawn icon; hover lifts it to ink-600 with jade text. Loot stacks full width under the button on wide screens and phones, and wraps in a row between.

### Abilities [landing]
Flush 30px label/value chips: the key on ink-750 (label type at 800, ink-200), the value on ink-800 (ability-value type, paper) with an 8px trailing slant and ellipsis. Live values (next raid, the guild's current boss, the race leader, Shiftheal's spec and ilvl) replace static fallbacks; earned words in them go gold.

### Tool plate [landing]
The hub's link to a tool, the ribbon's construction at poster size: a 1px outline with a 16px trailing slant (ink-600; jade on hover and focus) around an ink-850 body (15px slant). The body is the tool's real shot (cover, from the top; it scales to 1.025 on hover, not under reduced motion) over a 56px ink-800 caption bar: a 56px head tile like the encounter's (head crop or the tool's mark at 26px), the name at 18px/700 (jade on hover) and an ink-200 one-liner at 13px. The design plate's shot is a capture of this page's own specimen panel. On wide screens a plate switches the tab; on phones it jumps to the section.

### Pills [family]
Slanted ink-750 chips in label type, uppercase; jade text for "Demo mode" and Cutting Edge. On the screenshot caption plate a pill loses its slant and sits on an ink-900 plate beside the mono URL; the plate carries the slant.

### Screenshot frame [landing]
The model viewer: the real site in an ink-850 well with a 1px ink-700 inner line and a 22px trailing slant, cropped from the top. Its caption plate sits at the bottom left; on the specimen it is inset 16px onto the panel, and on phones the specimen hides the URL.

### Design specimen [landing]
The design entry's art, drawn by the page from tokens.css: the ink ramp as ten flush steps (ink-900 to paper), four slanted role tiles (jade, gold, red with paper text, rose) with their one-line meaning, and a part row (a gold-outlined ribbon, a jade pill, "Aa" in poster caps and "6/8" in mono).

### Ribbon [family]
The overlay's ribbon, here only in the specimen: a 1px slanted outline (gold for a leader) around an ink-800 body, a square accent block carrying the rank in mono 20px/800 ink-900, the name at 18px/600.

### Kills ticker [family]
A 52px ink-900 band across the viewport with a 2px jade top edge only, a solid jade label ("Mythic kills") flush left, items "boss · date" with a jade "Mythic" or gold "first Dutch kill" tag. The list renders twice and slides one width (9s per kill, at least 28s); it pauses on hover and focus and becomes a static scrollable row under reduced motion. Hidden when there is no data. A 64px fade hides the right edge.

### Footer [landing]
A 1px ink-700 rule, the jade slanted cast mark with the signature in ink-300, and uppercase links (13px/700/.08em, paper-dim, jade on hover).

## Do's and Don'ts

### Do:
- **Do** take colours, fonts and motion from tokens.css variables; tokens.css stays a byte copy of the overlay's.
- **Do** keep gold for what is earned, jade for brand and selection, red for on air only.
- **Do** show every project as it really runs: a real screenshot, a live value, or a specimen drawn from the tokens.
- **Do** keep one primary per entry and put every other link in a loot row.
- **Do** slant the trailing edge of buttons, loot rows, pills, chips and tiles; keep the bug, the switch and the ticker flush and square.
- **Do** draw icons as inline SVG in one stroke family.
- **Do** give every entry its own hash and make every block fall back to static content when its fetch fails.
- **Do** ship every string in Dutch and English; game names are never translated.
- **Do** keep the CSP: script-src 'self', no inline styles; set custom properties with `style.setProperty()` only.

### Don't:
- **Don't** add drop shadows, rounded cards or blur.
- **Don't** show LIVE, a live dot or any red unless DecAPI says the channel is live.
- **Don't** use gold for tags, hover, progress or project labels.
- **Don't** use text glyphs or emoji as icons.
- **Don't** put a coloured side stripe on cards, rows or chips.
- **Don't** build it as a link-in-bio column or a hero over a project-card grid.
- **Don't** show the person behind bmiest: no real name, no day job, no reniersworx link.

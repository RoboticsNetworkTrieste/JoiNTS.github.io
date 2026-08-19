# TORC Design System
**TORC — Trieste Open Robotics Community**

A non-profit association of people in and around Trieste who build robotics for real: professionals, researchers, students and self-taught engineers who design, write code and make hardware move. TORC is explicitly **not** a company, not a service provider, not a school. It exists to be the *bridge* between people who can build and the concrete problems the territory has — and everything it produces is open source.

This design system is the association's visual and verbal toolkit: the delivered logo system, the palette derived from it, a three-family type system, tokens, 28 React components, and a full recreation of the association's public website.

---

## Sources given to us

| Source | What it is | Where it went |
|---|---|---|
| `uploads/torc-wordmark-dark.svg`, `torc-wordmark-light.svg` | Wordmark, light-ink and forest-ink versions | `assets/logo/` |
| `uploads/torc-icon-dark.svg`, `torc-icon-light.svg`, `torc-icon-on-accent.svg`, `torc-favicon.svg` | Ring mark: standalone, inverted, app tile, favicon | `assets/logo/` |
| `uploads/torc-element-torque.svg`, `-grid.svg`, `-network.svg`, `-network-trace.svg`, `-duotone.svg` | Five graphic elements / brand motifs | `assets/elements/` |
| `uploads/TORC Robotics Association Logo.pdf` | 13-page logo document | `assets/logo/` (see caveat) |
| Manifesto (pasted text, Italian) | The association's founding document — 7 principles | Verbatim in `ui_kits/website/content.js`, quoted throughout |

**Caveat on the PDF:** the 13 pages are raster-only (no extractable text) and every render attempt timed out in this environment, so it was copied in untouched but never read. Everything visual in this system is derived from the delivered SVGs. If the PDF contains clear-space rules, minimum sizes, font names or misuse examples that contradict what is written here, the PDF wins — please tell us and we will correct it.

No codebase, Figma file or existing website was provided. There was therefore no source component inventory: the component set below is an authored standard set, sized to what the association actually needs (a public site + docs-flavoured surfaces).

---

## Brand identity

The mark is a **ring** (the "O" of TORC) with a **torque arc** sweeping over it and a **terminal dot** at the arc's end — rotation, force applied, a measurable result. The wordmark repeats the device twice: an arc over the O, an arc under the C. These are delivered assets; **never redraw, re-trace, recolour or approximate them.**

- **Icon** — the ring + arc alone. Favicons, avatars, compact headers.
- **Wordmark / lockup** — "TORC" with both arcs. The default identity.
- **Tile** — ring in ink on an accent square, corner radius 22%. The only sanctioned inversion.
- **Stacked** — wordmark over "TRIESTE OPEN ROBOTICS COMMUNITY" in mono caps.

Clear space: at least the height of the O ring on all sides. Minimum sizes: 20px wordmark height, 16px icon. Never stretch, outline, shadow, gradient-fill, or place the light-ink version on a light ground.

---

## CONTENT FUNDAMENTALS

**Language.** Italian first — TORC is a Trieste association and writes to its city in its own language. English is acceptable for code, READMEs and international project docs. Never mix the two inside one sentence; loanwords already standard in the field (open source, commit, hackathon, lidar, meetup) stay in English and are not italicised.

**Voice: first-person plural, always.** "Facciamo robotica", "Costruiamo sistemi reali", "Scegliamo con cura". TORC speaks as a group of people who build, never as an institution ("l'associazione si propone di…" is wrong). The reader is addressed informally as **tu**, and only when it matters: "Se leggendo queste righe hai pensato…", "Raccontaci cosa sai fare".

**Register: concrete, technical, unhurried, slightly understated.** The proof is always a working thing. Prefer "codice che gira, hardware che si muove" over "soluzioni innovative". Name real places (Porto Vecchio, il Carso, Area Science Park), real hardware (Jetson Orin, ESP32, lidar 32ch), real states ("build rossa da 2 giorni").

**Deliberate anti-hype.** The manifesto's own line is the rule: *"Non promettiamo rivoluzioni: promettiamo di costruire, insieme."* Banned: rivoluzionario, all'avanguardia, sinergia, eccellenza, disruptive, AI-powered, "il futuro è già qui". No superlatives about ourselves. No invented metrics.

**Structure.** Short declarative sentences. Statements end with a full stop *even as headlines* — the seven principles are written that way ("Costruiamo sistemi reali."). Em dashes for asides. Lists are numbered when they are commitments, bulleted only for machine facts.

**Casing.** Sentence case everywhere in prose and UI. UPPERCASE only in mono contexts: kickers, labels, badges, tab strips, meta rows. Never title case in Italian. "TORC" is always four capitals.

**Numbers & units.** Italian conventions: `18:30`, `4h`, `24V`, `18 set`. Time ranges use `→` (`18:30 → 21:00`). Relative time is short and mono: `3g`, `1s`, `2m`, `ultimo commit 3g`.

**Emoji: never.** Not in UI, not in copy, not in headings, not in commit-flavoured microcopy. State is carried by an icon or a coloured dot. Unicode characters used as punctuation, not decoration: `·` separator, `→` direction, `—` aside.

**Button and CTA style.** Imperative, 2–4 words, action first: "Entra in TORC", "Leggi il manifesto", "Proponi una demo", "Vedi il repo", "Iniziamo a costruire". Never "Scopri di più", never "Clicca qui".

**Error and empty states are factual, never apologetic.** "URL non valido." "Nessun progetto con questi filtri." "Serve chi abbia esperienza di calibrazione camera–lidar." No "Ops!", no exclamation marks, no anthropomorphised robot jokes.

**Sample copy, in voice**

> **Kicker** `PROGETTI`
> **Headline** Poche cose, fatte fino in fondo.
> **Body** Scegliamo con cura i progetti su cui investire le nostre energie e li portiamo a termine. Ogni riga di codice è pubblica dal primo commit.
> **CTA** Tutti i progetti →

---

## VISUAL FOUNDATIONS

### Ground: two grounds, one register
TORC has **two grounds**, and the choice between them is editorial, not a preference toggle.

**Ink** — `--bg-page` `#08130F`, a green-tinted carbon taken from the favicon ground, not a neutral black. This is the operator ground: heroes, hardware photography, section breaks, title and closing slides, the dashboard. Machined, quiet, photography-led.

**Paper** — `[data-theme="light"]`, ground `--torc-paper-100` `#EFEDE6`. A warm neutral, deliberately not white and not green-tinted, so it sits beside ink without turning cold. This is the reading ground: documentation, site body copy, content and numbers slides, anything past a screenful of text.

The rule of thumb: **ink for what you look at, paper for what you read.** A deck alternates — ink title, paper content, paper numbers, ink closing — so the ink lands as punctuation instead of droning for twenty slides. Within either ground there are exactly **two levels per artefact**: the ground and one step of surface. Never a third background colour.

Every ground layer, field and scrim exists on both sides: on ink the field art is drawn in light strokes and the veil darkens toward the edges; on paper the art is forest ink and the veil lightens. Same attribute vocabulary, both directions.

### Colour
One accent. `--torc-green-400` `#4FD1A0` on ink; `--torc-green-500` `#2FB98A` on paper (contrast). The green is used **sparingly and meaningfully**: the arc in the mark, kickers, links, the single primary button, live state, and the lit end of a rule. Large accent fills appear once per page at most (the closing CTA card).

Signals read like **instrument LEDs** and sit deliberately far from the accent hue, so status never reads as brand: blue `#3FA9F5` (info), amber `#FFB020` (warning), red `#FF5247` (danger), each with a `-600` step for light grounds and a `-900` tint for backgrounds. They are **status-only**: never decoration, never a chart palette for its own sake. Neutrals are the ink ramp (950→500) and the sage/mist ramp; the greenish tint runs through both, so nothing in the palette is truly grey.

**Clay is the one secondary** — `--secondary`, `clay-300` `#DDAE86` on ink and `clay-500` `#BC7B4C` on paper. It exists because a single accent at a single pitch flattens over a long scroll: clay gives the system a second temperature for section heads, archival labels, tinted surfaces and rules that must not read as an action. It is **never a status and never a primary action**, and it never appears in the mark.

Status colours have a **quiet form** as well as a loud one (`--status-*-quiet` fill, `--status-*-quiet-fg` text). Loud is for a live alarm; quiet is for a column of forty rows, where a label must not out-punch a real button.

Everything is aliased: design against `--text-body`, `--surface-1`, `--border-subtle`, `--accent` — never the raw ramp.

### Type
**The logo is set in Red Hat** (confirmed by the association), so the whole system stays in that family — one skeleton, three cuts:
- **Red Hat Display** (500/600/700) — the logo typeface. Headings, hero titles, project titles, big figures, slide headlines. Track it in `-0.025em` at 38px and above, `-0.015em` below.
- **Red Hat Text** (400/500/600) — body and UI. Same forms, tuned for 13–20px. Paragraphs at 17px/1.62, max 66ch.
- **Red Hat Mono** (400/500/600) — the *telemetry voice*: kickers, labels, badges, tab strips, meta rows, timestamps, code. Uppercase + `0.14em` tracking for kickers, sentence case + `0.02em` for metadata.

All three are self-hosted in `assets/fonts/` (latin + latin-ext woff2). Note the delivered wordmark is outlines, not live text — set "TORC" as type only when the SVG cannot be used, and never re-letter the logo.

The signature type move is a three-part block: mono kicker (often with a 24px accent dash) → Poppins display statement → Plex Sans paragraph.

### Space & layout
4px base scale. The blueprint grid pitch is **48px**; page gutters 32px (64px on large surfaces). Content column max 1280px, 1600px for full-width bands. Vertical section rhythm **128px** (80px compact) — the layout breathes far more than a normal web page. Control heights 32/40/48, 44px minimum touch target.

Every section opens on a **full-width hairline with a section index**: `01 / 06 · CHI SIAMO` in 10px mono at 0.22em, the label in accent, an optional right-aligned annotation. Layout is left-aligned and edge-anchored; centring is only for full-bleed CTA bands. Asymmetric two-column splits (1.1fr / 0.9fr statements, 1.35fr / 0.65fr plate + specs) are the house pattern. Headers are sticky and blurred; nothing else is fixed.

### Annotation — the HUD layer
This is what makes the system read as engineering rather than marketing:
- **`.torc-hud`** — machined corner brackets (top-left, bottom-right) around a plate or figure.
- **`.torc-ticks`** — a measurement tick strip at 8px pitch, major tick every fifth. Used as a section separator and along the bottom edge of hero bands.
- **`.torc-hud-label`** — 10px mono, 0.22em, uppercase, tabular figures. Figure indices (`FIG. 02`), coordinates (`45.6495 N`), timestamps, section counters.
- **`SpecTable`** — datasheet rows: mono uppercase key, mono tabular value. Numbers, not adjectives.
All mono type is set with `font-variant-numeric: tabular-nums` so columns of figures align.

### Photography is the hero
In this register the loudest element on any page is a **photograph of real hardware**, full-bleed, cool and slightly desaturated (`saturate(.78) contrast(1.04)`), always annotated with a figure index and a factual caption (subject · place · date). `ImagePlate` is the only sanctioned frame for it; with no `src` it renders an explicitly labelled empty plate rather than faking an image. **We have no photography yet — every plate in the kits is a placeholder waiting for real shots of TORC hardware.**

### Backgrounds & texture
Behind and between the photographs, backgrounds are **structural, not pictorial**. Nothing in this system is a flat fill.

**Grounds** (`.torc-field`) — every full-width surface (slide, hero, band) gets one layered ground: **scrim → wash → drawn field → grain**, over `--bg-page`. The class carries the layer stack; the variants are data attributes — `data-field` (art), `data-field-glow`, `data-field-depth`, `data-field-edge`:
- `data-field="survey"` — quoted blueprint plate, tiles at 240px. The default for content-bearing surfaces.
- `data-field="contour"` — Karst isolines. Title and quote surfaces.
- `data-field="schematic"` — 45°-only PCB traces and vias. Code and technical surfaces; also the empty state of every `ImagePlate`.
- `data-field="scan"` — lidar range rings, spokes and point returns from an off-canvas origin. Section dividers, closings, CTA.
- `data-field="strata"` — stacked telemetry bands with a measured base rule. Number bands.
- Wash: `data-field-glow="lit"` (accent, from lower-left) or `"wash"` (cool light, from upper-right). One per surface, never a halo around an element.
- Depth: `data-field-depth="open"` (light scrim, for surfaces carrying dense type), `"deep"` (near-opaque edges) or `"hero"` (scrim bottom-up, for titles set low). `data-field-edge="horizon"` adds a hairline of light where a band begins.

Art always sits *under* the scrim, so type never fights it. Source SVGs live in `assets/backgrounds/`; alphas are baked at mist 4–15%, so a field reads as machined structure at 1:1 and disappears at thumbnail size.
- **Instrument density** (`data-instrument="full|quiet|off"`) — how loud the HUD chrome runs. `full` for the dashboard and technical diagrams (grid, ticks and brackets all present); `quiet` for the site and decks, where structure should be sensed rather than seen; `off` for long-form reading, which also drops the drawn field entirely. Set it on any container; it re-scales `--border-grid`, `--border-tick` and `--border-hud` for everything inside.
- **Tick strips** (`.torc-ticks`) — the precision motif; separates major bands.
- **Blueprint grid** (`.torc-grid`) / **45° duotone stripes** (`.torc-stripes`) — the flat single-layer predecessors. Still fine for a small panel or a fill behind a mark; use `.torc-field` for anything full-width.
- **The five delivered elements** — torque arcs, grid + square, node network, horizontal trace, duotone ring. These are **small decorative marks, not illustrations**: use them at **48–96px** as a corner mark, a card glyph, or (the trace) a full-width 20–44px rule. One per screen. Never scale one up to fill a hero, a column or a slide half.
- **Lit rule** (`.torc-rule`) — a hairline fading ink → accent, under section kickers.

No decorative gradients. The only gradients in the system are the field scrims and washes, and they exist to build depth and protect legibility — no mesh, no glow around elements, no bluish-purple anything. If imagery is added later it should be cool-toned, low-saturation documentary photography of real hardware and real places — workshop light, not studio gloss.

### Borders, radii, cards
**Nothing is soft.** Radii exist only to take the raw edge off a 1px corner: `2px` controls, **`3px` canonical** for panels and plates, 4–6px for large blocks, 0–1px for the smallest chips. The single exception is the delivered app tile at 22%, which belongs to the logo system. Pill radius survives only on status pills — never on a button.

Hairlines do the work: `1px` at 8% mist (`--border-subtle`) for almost everything, `1.5px` where the brand elements use it (active tab underline, active card edge, accent rules).

A card is: `--surface-1` fill, 1px hairline, 3px radius, 24px padding, **no shadow**. An interactive card does not lift — it brightens its border and draws a 1.5px accent bar across its top edge.

### Elevation
Dark UI separates with hairlines, not drop shadows. Shadows are reserved for things that genuinely float — menus, dialogs, popovers (`--shadow-md/lg/xl`, cool and near-black). Glow is **functional only**: `--glow-dot` on the pulsing live indicator. No glow on buttons, no glow on cards, no glow as decoration.

### Transparency & blur
Used in three places only: the sticky header scrim (`--surface-header`, 88% ink + 14px blur), glass card fills (4–7% mist, 12px blur), and scrims over imagery (60% ink). Alphas are tokens (`--torc-alpha-*`) — never write a raw `rgba()` in a design.

### Motion — servo, not spring
Short, firm, mechanical. `--ease-servo` `cubic-bezier(.33,0,.15,1)` is the signature: quick departure, decisive stop, **no overshoot, no bounce, no elastic**. Durations: 140ms hover/press, 220ms enter/exit, 380ms section reveal, 1100ms for a full rotation (spinners, the torque arc). Reveals are opacity + a 8–12px rise, never scale-in. `prefers-reduced-motion` kills everything.

### States
- **Hover** — surfaces lighten one step (`--surface-glass`), borders go from default to strong or accent; the primary button lightens to `green-300`. Interactive cards draw a 1.5px accent bar across the top edge. Text links change colour only, plus an underline at 3px offset.
- **Press** — `filter: brightness(.92)`. No nudge, no scale, no bounce: the control simply darkens under the finger.
- **Focus** — always visible: a 2px accent outline at 2px offset (inputs use an accent border plus a 3px `--accent-quiet` halo). Never remove it.
- **Disabled** — `opacity: .42`, `cursor: not-allowed`, no shadow, no transform.
- **Live/active** — the accent dot with `--glow-dot`, pulsing 1 → .45 opacity over 2s.

---

## ICONOGRAPHY

**No icon set was delivered with the brand.** The system standardises on **Lucide** (v0.544.0) — 24×24 box, 2px round-cap stroke, geometric and technical, matching the 2–2.5px strokes in the delivered graphic elements almost exactly. *This is a flagged substitution:* if the association already uses another set, tell us and we will swap it.

- **82 glyphs are vendored** as raw SVG files in `assets/icons/` (no CDN dependency), and inlined into `components/icon/Icon.jsx` so `<Icon name="…" />` works offline and inherits `currentColor`.
- The set is chosen for this brand: robotics and hardware (`bot`, `cpu`, `microchip`, `circuit-board`, `joystick`, `satellite-dish`, `cable`, `battery-charging`, `gauge`, `move-3d`), code and collaboration (`terminal`, `git-branch`, `git-pull-request`, `folder-git-2`, `github`, `code-xml`), community and place (`users`, `calendar-days`, `map-pin`, `clock`), plus the standard UI/navigation/status glyphs.
- **Sizes:** 13px in mono meta rows, 16–18px in UI and cards, 20px inside buttons, 24–32px as a feature glyph. Only at 12–13px may stroke width go to 2.25.
- **Colour:** icons inherit `currentColor`. Colour the parent. Accent glyphs live in a 36px `--accent-quiet` tile with `--radius-md` (the project-card pattern).
- **Never:** hand-drawn SVG icons, emoji as icons, a second icon library, filled/duotone glyph styles, or icons at non-integer sizes. If a glyph is missing, add the Lucide SVG to `assets/icons/` and regenerate `Icon.jsx`.
- **Unicode as typography, not iconography:** `·` `→` `—` are allowed inline; nothing else.

---

## Substitutions to confirm

1. **Fonts — resolved.** The association confirmed the logo is set in **Red Hat**; the type system is now Red Hat Display / Text / Mono, self-hosted from the Google Fonts release. If you hold a licensed or variable cut of Red Hat, drop the files in `assets/fonts/` and update `tokens/fonts.css` — nothing else changes.
2. **Icons** — Lucide, as described above.
3. **Imagery** — none supplied; the system deliberately uses structural backgrounds instead of stock photography.

## Intentional additions
- `Icon` — a wrapper for the vendored Lucide set (a glyph set needs an accessor).
- `SpecTable`, `ImagePlate` — the datasheet and photography frames the high-end-robotics register requires; without them every consumer would improvise their own.
- `Kicker`, `SectionHeading`, `PrincipleItem`, `Quote`, `StatBlock`, `CodeBlock`, `ProjectCard`, `EventCard` — patterns implied directly by the manifesto and by what an open-robotics association publishes (principles, projects, meetups, commands). Each exists because the website needs it, not because a design system "usually" has it.

---

## Index

**Root**
- `styles.css` — the single entry point consumers link. `@import` list only.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skill front matter for use in Claude Code.
- `thumbnail.html` — the design system's homepage tile.

**`tokens/`** — `fonts.css` (@font-face), `colors.css`, `typography.css`, `spacing.css`, `shape.css`, `elevation.css`, `motion.css`, `semantic.css` (aliases + light theme), `base.css` (resets, element defaults, `.torc-kicker` / `.torc-grid` / `.torc-stripes` / `.torc-rule` utilities).

**`components/`** — `components.css` (the class layer every component uses) plus:

| Group | Components |
|---|---|
| `brand/` | `Logo`, `Kicker` |
| `core/` | `Button`, `IconButton`, `Badge`, `Tag`, `Card`, `Divider` |
| `icon/` | `Icon` (+ `ICONS`, `ICON_NAMES`) |
| `forms/` | `Field`, `Input`, `Textarea`, `Select`, `Checkbox` (also radio), `Switch` |
| `feedback/` | `Alert`, `StatusDot`, `Spinner` |
| `navigation/` | `SiteHeader`, `SiteFooter`, `Tabs` |
| `content/` | `SectionHeading`, `ProjectCard`, `EventCard`, `StatBlock`, `PrincipleItem`, `CodeBlock`, `Quote`, `SpecTable`, `ImagePlate` |

Each directory has `<Name>.jsx` + `<Name>.d.ts` (props + adherence contract) + `<Name>.prompt.md` (when to use, example, variants) and one `*.card.html` gallery card.

**`guidelines/`** — 24 specimen cards: ink ramp, sage & mist, torque green, signals, text tokens, surfaces & borders, light theme, display/body/mono/pairing/families type, space scale, blueprint grid, radii, control heights, elevation & glow, motion, logo variants, graphic elements, backgrounds.

**`ui_kits/website/`** — the association's public site: `index.html` (interactive, in-page routing) + `HomeScreen`, `ManifestoScreen`, `ProjectsScreen`, `ProjectDetailScreen`, `EventsScreen`, `JoinScreen`, `content.js`, and its own `README.md`.

**`ui_kits/docs/`** — `docs.torc.community`: sidebar tree + sticky TOC + breadcrumbs + prev/next, three real pages (Introduzione, Installazione with verified command blocks, `harbor_slam` reference with Topic/Parametri/Servizi tabs), and the prose primitives used inside articles.

**`ui_kits/dashboard/`** — *Officina TORC*, the internal console: icon rail + top bar shell, rig fleet with battery/CPU/temperature meters and telemetry tabs, CI build table with filters. Two rail views are intentionally left as "not designed yet" states.

**`slides/`** — eight 1280×720 slide archetypes (title, section divider, content, comparison, stats, code, quote, closing) as standalone HTML, plus the deck rules in `slides/README.md`.

**`templates/site-page/`** — `SitePage.dc.html`, the starting template consuming projects get: a full ink-ground TORC page (sticky header, blueprint-grid hero, project grid, principles, accent CTA, footer) built from this system's components, plus `ds-base.js` which loads `styles.css` + the compiled bundle.

**`assets/`** — `logo/` (all delivered marks + the source PDF), `elements/` (five brand motifs), `icons/` (82 Lucide SVGs), `fonts/` (18 woff2 subsets), `logo.svg` (default mark).

**`uploads/`** — the original delivered files, untouched.

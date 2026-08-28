# Working on joint.ts.it

The site is deliberately small and deliberately constrained. The constraint is the
design system, and it is in this repository so that nobody has to guess.

## The one rule

**Do not invent visual values.** No hex colours, no `px` sizes, no font names typed by
hand. Everything you need already exists as a token or a component in
[`design-system/`](design-system/). If what you need is not there, that is a design-system
change (see *Changing the design system* below) — not a local override.

```jsx
{/* no */}
<p style="color:#8aa;font-size:15px;font-family:Inter,sans-serif">…</p>

{/* yes */}
<p style="color:var(--text-secondary);font-size:var(--text-sm);font-family:var(--font-sans)">…</p>
```

## Where to look things up

| You want | Read |
|---|---|
| The whole brand: voice, grounds, colour, type, space, motion, iconography | [`design-system/readme.md`](design-system/readme.md) — start here, it is the actual brief |
| Every token name, and what kind of thing it is | `x-omelette.tokens` / `tokenKinds` in [`design-system/_adherence.oxlintrc.json`](design-system/_adherence.oxlintrc.json) |
| A component's exact props and allowed values | the `no-restricted-syntax` rules in the same file — one entry per component, in plain English |
| A component's source | `design-system/components/<group>/<Name>.jsx`, with `.d.ts` and `.prompt.md` alongside |
| The values themselves | [`design-system/tokens/`](design-system/tokens/) — ten small CSS files, all commented |
| Icons (82 Lucide glyphs) | [`design-system/assets/icons/`](design-system/assets/icons/) |
| Logo, wordmark, favicon, brand elements | [`design-system/assets/logo/`](design-system/assets/logo/), [`assets/elements/`](design-system/assets/elements/) |

`design-system/styles.css` is the single entry point. The `Base` layout imports it once,
Vite inlines the ten `@import`s into one stylesheet, and the fonts and background SVGs
are fingerprinted into `dist/_astro/`.

## Using components

Import from the design system and use the component — do not hand-roll markup that a
component already covers:

```jsx
---
import { Button } from '../../design-system/components/core/Button.jsx';
import { SpecTable } from '../../design-system/components/content/SpecTable.jsx';
import { ROWS_MEETUP } from '../content.js';
---
<Button variant="primary" size="lg" mono iconEnd="arrow-right" href="/entra/">Entra in JoiNTS</Button>
<SpecTable rows={ROWS_MEETUP} />
```

These render at build time. A component only needs `client:load` if it has state a
visitor changes — on this site that is the two forms, and `/officina/`, which is
`client:only` because it has nothing to render until the member's token comes back from
`localStorage`. **Adding `client:load` to something that does not need it ships React to
every visitor for no reason.**

## Things the design system will not forgive

These come straight from `readme.md`; they are the ones easiest to break by accident.

- **Two grounds, never three.** Ink (`--bg-page`, the default) or paper
  (`data-theme="light"`). Within either, exactly one step of surface. Ink for what you
  look at, paper for what you read.
- **One accent.** `--accent`, used sparingly — kickers, links, one primary button, live
  state. A large accent fill appears at most once per page.
- **Clay (`--secondary`) is never a status and never a primary action.** Status is only
  blue / amber / red, and status colours are never decoration.
- **Nothing is soft.** `--radius-md` (3px) is canonical for panels. Cards have a hairline
  and **no shadow**. Shadows are for things that genuinely float — menus, dialogs.
- **No decorative gradients, no glow.** The only gradients are the field scrims; the only
  glow is `--glow-dot` on the live indicator.
- **No emoji. Ever.** Not in UI, not in copy, not in headings. State is an icon or a dot.
- **No second icon library, no hand-drawn icons.** If a glyph is missing, add the Lucide
  SVG upstream and re-sync.
- **Never redraw the logo.** Use the `Logo` component or the SVGs in `assets/logo/`.
- **Motion is servo, not spring** — `--ease-servo`, no overshoot, no bounce, no scale-in.

## Changing the design system

`design-system/` is a **vendored copy**, not a place to patch. It mirrors the Claude
Design project:

> **JOINTS Design System** — `49bcd965-cdbe-405f-b699-45183069cb45`
> https://claude.ai/design/p/49bcd965-cdbe-405f-b699-45183069cb45

Edit there, then re-sync here, so the design project and the site never drift apart. A
token changed only in this repo is a token that will be silently reverted by the next
sync — and worse, it will be wrong in every other JoiNTS surface (the docs site, the
dashboard, the slide decks) that reads from the same project.

### What is vendored, and what is not

Present and complete:

- `styles.css`, `tokens/` (10 files), `components/components.css`
- component sources for every group — `brand/`, `content/`, `core/`, `forms/`,
  `feedback/`, `icon/` and `navigation/` — each with its `.d.ts` contract and
  `.prompt.md` notes, plus the `*.card.html` gallery cards (they only render inside
  claude.ai/design, but they keep the mirror complete)
- `_ds_manifest.json`, `_adherence.oxlintrc.json`, `readme.md`, `SKILL.md`
- `assets/` — 18 woff2 subsets, 12 background fields, 5 brand elements, 82 icons,
  `logo.svg` plus the full 9-cut logo set (dark / light / knockout / mono / small
  wordmarks, ligature icons, accent tile, favicon)
- `_ds_bundle.js` — all 30 components, precompiled. The site no longer loads it (it
  imports the sources directly), but it is kept so the mirror stays complete.

Note the site still builds its own header and footer in `src/components/` rather than
using the vendored `navigation/` sources.

One deliberate local deviation: the runtime namespace in `_ds_bundle.js`,
`_ds_manifest.json` and the `*.card.html` cards is renamed here to
`JoiNTSDesignSystem_49bcd9`, while upstream still carries the pre-rebrand identifier
(it is fixed at project creation). After re-syncing any of those files, re-apply the
rename so no pre-rebrand naming comes back into this repo.

Not vendored, and available upstream if you need them:

- `guidelines/` — 24 rendered specimen cards (colour ramps, type scale, spacing, motion)
- `ui_kits/`, `slides/`, `templates/`, `explorations/`
- `uploads/` — the delivered originals: the JoiNTS v2.0 logotype SVGs and rebrand spec,
  and the withdrawn v1.0 logo document (a 13-page raster-only PDF, still under its
  pre-rebrand filename upstream — it exceeds the sync tool's 256 KiB read limit;
  download it from the design project directly)

## Checking your change

```sh
npm run dev
```

Walk all five pages and check the console is clean. Check them at a narrow width too.
Then `npm run build` before you push — the deploy runs the same build, and it fails if a
page or the CNAME goes missing.

# Working on torc.it

The site is deliberately small and deliberately constrained. The constraint is the
design system, and it is in this repository so that nobody has to guess.

## The one rule

**Do not invent visual values.** No hex colours, no `px` sizes, no font names typed by
hand. Everything you need already exists as a token or a component in
[`design-system/`](design-system/). If what you need is not there, that is a design-system
change (see *Changing the design system* below) — not a local override.

```html
<!-- no -->
<p style="color:#8aa;font-size:15px;font-family:Inter,sans-serif">…</p>

<!-- yes -->
<p style="color:var(--text-secondary);font-size:var(--text-sm);font-family:var(--font-sans)">…</p>
```

## Where to look things up

| You want | Read |
|---|---|
| The whole brand: voice, grounds, colour, type, space, motion, iconography | [`design-system/readme.md`](design-system/readme.md) — start here, it is the actual brief |
| Every token name, and what kind of thing it is | `x-omelette.tokens` / `tokenKinds` in [`design-system/_adherence.oxlintrc.json`](design-system/_adherence.oxlintrc.json) |
| A component's exact props and allowed values | the `no-restricted-syntax` rules in the same file — one entry per component, in plain English |
| The values themselves | [`design-system/tokens/`](design-system/tokens/) — ten small CSS files, all commented |
| Component CSS classes usable from hand-written HTML | [`design-system/components/components.css`](design-system/components/components.css) |
| Icons (82 Lucide glyphs) | [`design-system/assets/icons/`](design-system/assets/icons/) |
| Logo, wordmark, favicon, brand elements | [`design-system/assets/logo/`](design-system/assets/logo/), [`assets/elements/`](design-system/assets/elements/) |

`design-system/styles.css` is the single entry point. `index.html` links it and nothing else.

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
  SVG to `assets/icons/` upstream and re-sync.
- **Never redraw the logo.** Use `<x-import … .Logo>` or the SVGs in `assets/logo/`.
- **Motion is servo, not spring** — `--ease-servo`, no overshoot, no bounce, no scale-in.

## Adding to the page

Content goes in `screens/<Name>.dc.html` — one file per page. `index.html` holds only
the header, the footer, the router, and the shared values every screen reads
(`renderVals()` at the bottom).

Use a design-system component before writing markup by hand:

```html
<x-import component-from-global-scope="TORCDesignSystem_49bcd9.Button"
          variant="primary" size="md">Entra in TORC</x-import>
```

The namespace `TORCDesignSystem_49bcd9` is fixed by the bundle — copy it exactly.
Available components (30) are listed in `design-system/_ds_manifest.json`; each one's
props and allowed values are in `_adherence.oxlintrc.json`.

camelCase props are written `sc-camel-` + kebab-case, because HTML attribute names are
case-insensitive: `iconEnd` → `sc-camel-icon-end`, `onClick` → `sc-camel-on-click`. The
runtime also accepts the camelCase form and rewrites it, but the existing markup uses the
explicit prefix — match it.

`hint-size="76px,24px"` on an `<x-import>` is not a component prop — it is the
width,height the runtime gives the placeholder before the component resolves. Keep it
roughly right so the layout does not jump; omit it and you get the `100%,60px` default.

## Changing the design system

`design-system/` is a **vendored copy**, not a place to patch. It mirrors the Claude
Design project:

> **TORC Design System** — `49bcd965-cdbe-405f-b699-45183069cb45`
> https://claude.ai/design/p/49bcd965-cdbe-405f-b699-45183069cb45

Edit there, then re-sync here, so the design project and the site never drift apart. A
token changed only in this repo is a token that will be silently reverted by the next
sync — and worse, it will be wrong in every other TORC surface (the docs site, the
dashboard, the slide decks) that reads from the same project.

### What is vendored, and what is not

Present and complete:

- `styles.css`, `tokens/` (10 files), `components/components.css`
- `_ds_bundle.js` — all 30 components, compiled; this is what the page actually runs
- `_ds_manifest.json`, `_adherence.oxlintrc.json`, `readme.md`, `SKILL.md`
- `assets/` — 18 woff2 subsets, 12 background fields, 5 brand elements, 82 icons, 6 logo marks
- component sources for the brand, content and core groups: 17 `.jsx` (including `Icon`,
  `IconButton` and `StatusDot`, which the others import), plus 14 `.d.ts` prop contracts
  and 14 `.prompt.md` usage notes

Not vendored, and available upstream if you need them:

- sources for the `forms/` and `navigation/` groups, and the `.d.ts` / `.prompt.md` for
  `Icon`, `IconButton`, `StatusDot`. Their compiled versions are in `_ds_bundle.js` and
  their prop contracts are in `_adherence.oxlintrc.json`, so nothing is unusable — the
  files are just not on disk.
- `*.card.html` — the per-group gallery cards, which only render inside claude.ai/design.
- `guidelines/` — 24 rendered specimen cards (colour ramps, type scale, spacing, motion).
- `ui_kits/`, `slides/`, `templates/` — the docs site, dashboard, slide archetypes.
- `assets/logo/TORC Robotics Association Logo.pdf` — the 13-page delivered logo document.
  It exceeds the sync tool's 256 KiB read limit; download it from the design project
  directly if you need it. Note that it is raster-only and has never been read, so if it
  contradicts `readme.md`, the PDF wins — say so and the system gets corrected.

## Checking your change

There is no test suite. There is a browser:

```sh
python3 -m http.server 8000
```

Walk all five screens — home, manifesto, progetti, incontri, entra — and check the
console is clean. Check the page at a narrow width too: `site/site.css` carries the
responsive overrides and is easy to leave behind.

A screen that renders as an empty grey box means the runtime could not fetch it: check
the filename in `screens/` against its `window.__resources` entry in `index.html`. The
runtime logs the failed URL to the console.

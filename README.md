# torc.it

The public site of **TORC — Trieste Open Robotics Community**, served by GitHub Pages
at [torc.it](https://torc.it).

It is a static site: no build step, no package manager, no CI. Clone it, open a file,
push. What makes it hold together is the design system vendored in
[`design-system/`](design-system/) — read [CONTRIBUTING.md](CONTRIBUTING.md) before
changing anything visual.

---

## Layout

```
index.html              the whole site — five screens, in-page routing
site/site.css           page-level responsive overrides. Nothing else belongs here.
design-system/          TORC Design System, vendored. The source of truth for
                        every colour, size, font, icon and component.
vendor/                 React 18 + the dc runtime that renders index.html.
                        Third-party, self-hosted, do not edit.
.nojekyll               keeps GitHub Pages from dropping the _ds_* files
CNAME                   torc.it
```

## Running it locally

Any static file server. The page fetches its own assets, so `file://` will not do:

```sh
python3 -m http.server 8000
# → http://localhost:8000
```

## How the page works

`index.html` is a **Design Component document**: ordinary HTML plus three extra tags,
rendered client-side by `vendor/dc-runtime.js`.

| Tag | What it does |
|---|---|
| `<x-import component-from-global-scope="TORCDesignSystem_49bcd9.Button" …>` | Renders a design-system component. Props are attributes. |
| `<sc-if value="{{ isHome }}">` | Conditional block. |
| `{{ expression }}` | Interpolates a value from the page logic. |

The page logic is the `<script type="text/x-dc">` block at the bottom of `index.html`:
a small class holding `state.page` (`home` / `manifesto` / `progetti` / `incontri` /
`entra`), the nav handlers, the two Formspree form submissions, and the static row data
for the spec tables. Everything it returns from `renderVals()` is what `{{ … }}` can see.

Routing is in-page — there is one URL. Adding real per-page URLs means splitting the
`<sc-if>` blocks into separate HTML files.

### Editing content

Copy lives inline in `index.html`, in Italian. The design system has firm rules about
that Italian — first-person plural, sentence case, no hype, no emoji. They are written
out in [`design-system/readme.md`](design-system/readme.md) under *CONTENT FUNDAMENTALS*,
and they are not stylistic suggestions: they are what makes the site sound like TORC.

## Deploying

Push to `main`. GitHub Pages serves the repository root as-is.

`.nojekyll` must stay: without it Jekyll silently drops every path beginning with an
underscore, which would take `design-system/_ds_bundle.js` with it and leave the page
blank.

## Licence

Text CC BY-SA 4.0 · code Apache-2.0. `vendor/` is React (MIT) and the dc runtime.

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
index.html              the shell: <head>, sticky header, footer, router, page logic
screens/                one file per page — this is where the content lives
  HomeScreen.dc.html      hero, chi siamo, principi, progetti, CTA
  ManifestoScreen.dc.html the seven principles
  ProjectsScreen.dc.html  repositories, how to propose a project
  EventsScreen.dc.html    meetup format, mail signup
  JoinScreen.dc.html      application form, contacts
site/site.css           page-level responsive overrides. Nothing else belongs here.
design-system/          TORC Design System, vendored. The source of truth for
                        every colour, size, font, icon and component.
vendor/                 React 18 + the dc runtime that renders the page.
                        Third-party, self-hosted, do not edit.
.nojekyll               keeps GitHub Pages from dropping the _ds_* files
CNAME                   torc.it
```

**To change what a page says, open the file in `screens/`.** You only need
`index.html` for the header, the footer, or the shared data behind all five pages.

## Running it locally

Any static file server. The page fetches its own assets, so `file://` will not do:

```sh
python3 -m http.server 8000
# → http://localhost:8000
```

## How the page works

`index.html` and every file in `screens/` is a **Design Component document**: ordinary
HTML plus four extra tags, rendered client-side by `vendor/dc-runtime.js`.

| Tag | What it does |
|---|---|
| `<x-import component-from-global-scope="TORCDesignSystem_49bcd9.Button" …>` | Renders a design-system component. Props are attributes. |
| `<dc-import name="HomeScreen" dc-props="{{ page }}">` | Renders another `.dc.html` document. `dc-props` spreads an object into it as props. |
| `<sc-if value="{{ isHome }}">` | Conditional block. |
| `{{ expression }}` | Interpolates a value from the page logic. |

The page logic is the `<script type="text/x-dc">` block at the bottom of `index.html`:
a small class holding `state.page` (`home` / `manifesto` / `progetti` / `incontri` /
`entra`), the nav handlers, the two Formspree form submissions, and the static row data
for the spec tables. Everything it returns from `renderVals()` is what `{{ … }}` can see.

That whole bag is also exposed as `page` and handed to each screen through `dc-props`,
so a screen reads exactly the same names it would if its markup were still inline. Add a
value to `renderVals()` and all five screens can use it with no further wiring.

The runtime resolves `<dc-import name="X">` to `./X.dc.html`; the `window.__resources`
map in `<head>` redirects that to `screens/X.dc.html`. If you add a screen, add both the
file and its entry in that map, or the import silently renders an empty placeholder.

Routing is in-page — there is one URL, and screens are fetched on first navigation
(prefetched from `<head>`, so it costs nothing in practice). Giving each page a real URL
would mean turning each screen into its own full HTML document.

### Editing content

Copy lives inline in the `screens/` files, in Italian. The design system has firm rules about
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

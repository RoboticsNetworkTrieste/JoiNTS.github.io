# joint.ts.it

The public site of **JoiNTS — Robotics Network Trieste**, at [joint.ts.it](https://joint.ts.it).

Built with [Astro](https://astro.build). Five pages, real URLs, and almost no JavaScript:
three of the five ship **zero** bytes of it, and the other two ship only the form they
need. Everything visual comes from the design system vendored in
[`design-system/`](design-system/) — read [CONTRIBUTING.md](CONTRIBUTING.md) before
changing anything you can see.

---

## Layout

```
src/pages/          one file per URL — this is where the content lives
  index.astro         /
  manifesto.astro     /manifesto/
  progetti.astro      /progetti/
  incontri.astro      /incontri/
  entra.astro         /entra/
  officina.astro      /officina/ — the members' console, noindex
src/content.js      ALL the copy and data. Most edits belong here, not in a page.
src/layouts/        the page shell: <head>, header, footer
src/components/     pieces shared across pages, plus the two form islands
src/officina/       the console: GitHub API layer, board, views. Client-side
                    only — it runs on the member's own token.
design-system/      the JoiNTS Design System, vendored. The source of truth for
                    every colour, size, font, icon and component.
public/             copied to the site root as-is: CNAME, favicon, social image
.github/workflows/  build and deploy on push
```

## Working on it

```sh
npm install
npm run dev       # http://localhost:4321, live reload
npm run build     # writes dist/
npm run preview   # serve the built site exactly as it deploys
```

Node 22. Nothing else to install.

### Editing content

Almost everything is in [`src/content.js`](src/content.js) — the manifesto principles,
the six technical strands, the channel list, the spec-table rows, the links. Change it
there and every page that uses it follows.

The copy is Italian and the design system has firm rules about it: first person plural,
sentence case, statements end with a full stop, no hype, **no emoji**. They are written
out in [`design-system/readme.md`](design-system/readme.md) under *CONTENT FUNDAMENTALS*.
They are not stylistic preferences — they are what makes the site sound like JoiNTS.

Everything in `content.js` is real. If a number or a date is not something the
association can stand behind, it does not go in: an honest empty state ("Nessun
repository pubblico, per ora.") beats an invented project.

### Adding a page

Drop a `.astro` file in `src/pages/`. The filename is the URL — `src/pages/soci.astro`
becomes `/soci/`. Wrap it in the `Base` layout, give it a title and a description, and
add it to `NAV` in `content.js` if it belongs in the header.

## How it renders

Astro runs the design system's React components **at build time** and writes plain HTML.
No React reaches the browser unless a component is explicitly marked `client:load` —
which is true for exactly two things, the mail signup on `/incontri/` and the membership
form on `/entra/`. Those are the only parts of the site that need JavaScript to work.

Everything else — including every button, badge and spec table — is static markup by the
time it is served.

## The members' console (`/officina/`)

Officina JoiNTS reads the organisation's repositories, activity and Projects boards, and
writes card moves back to GitHub. It runs entirely in the browser on a token the member
supplies.

**It is a member console, not a secret area, and the difference matters.** The page is
public HTML that anyone can load. What is gated is the *data*: GitHub returns nothing
about the org unless the token belongs to an active member, which the console checks
against `/user/memberships/orgs/{org}` before showing anything.

Why a pasted token and not a "Log in with GitHub" button: this site is static, so there
is no server to hold an OAuth client secret, and a secret shipped to a browser is not a
secret. GitHub's device flow needs no secret but its token endpoint sends no CORS
headers, so a browser cannot complete it either. The token lives in `localStorage`, goes
to `api.github.com` and nowhere else, and "Esci" clears it.

To make this a real login wall, add a backend — a small Cloudflare Worker doing the OAuth
code exchange is enough — and replace `token` and the gate in
[`src/officina/Officina.jsx`](src/officina/Officina.jsx). Everything else in
[`src/officina/gh.js`](src/officina/gh.js) stays as it is.

Members need a fine-grained token owned by the org, with Metadata / Contents / Issues /
Pull requests read, Members read, and **Projects read-and-write** — without the last one
the board loads but cards cannot be moved, and the console says so rather than failing
silently.

## Deploying

Push to `main`. The workflow in `.github/workflows/deploy.yml` runs `npm ci && npm run
build` and publishes `dist/`. Nothing is committed back; there is no `gh-pages` branch
and `dist/` is not in git.

> **One-time setup, and it must happen before the first push:**
> **Settings → Pages → Source → "GitHub Actions"**.
> While the source is still "Deploy from a branch", GitHub serves the repository root —
> which no longer contains an `index.html` — and the site would 404.

The custom domain is served from `public/CNAME`, which the build copies to `dist/CNAME`.
The workflow fails the build if it goes missing.

## Licence

Text CC BY-SA 4.0 · code Apache-2.0.

// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// joint.ts.it is a custom domain on GitHub Pages, so the site lives at the root.
// If it ever moves to <org>.github.io/<repo>/, set `base` here and route every
// internal link through import.meta.env.BASE_URL.
export default defineConfig({
  site: 'https://joint.ts.it',
  integrations: [react()],

  // Directory output: /manifesto/ is emitted as manifesto/index.html.
  //
  // The alternative (build.format 'file' -> manifesto.html) gives prettier
  // extensionless URLs, but it only works on a server that guesses the .html
  // extension. GitHub Pages does; a plain static server does not, so the build
  // could not be verified locally the way it is served. Directory output works
  // identically everywhere, which is worth one trailing slash.
  build: { format: 'directory' },
  trailingSlash: 'always',
});

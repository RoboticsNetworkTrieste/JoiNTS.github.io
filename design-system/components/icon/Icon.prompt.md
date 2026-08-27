Renders one Lucide glyph at 24×24 viewBox with a 2px stroke, inheriting `currentColor`. 82 glyphs ship in `assets/icons/`; `ICON_NAMES` lists them.

```jsx
<Icon name="circuit-board" size={18} />
<Icon name="git-branch" size={13} />            {/* meta rows */}
<Icon name="satellite-dish" size={24} title="Telemetria" />
```

Never hand-draw an SVG icon, never use emoji as an icon, never mix in a second icon library. If a glyph is missing, add the Lucide SVG to `assets/icons/` and regenerate.

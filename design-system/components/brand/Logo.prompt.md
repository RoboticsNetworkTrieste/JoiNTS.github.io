Renders the TORC brand mark — use it anywhere the identity appears (headers, footers, slide corners, app tiles, favicons).

```jsx
<Logo variant="lockup" height={26} />
<Logo variant="icon" height={32} />
<Logo variant="tile" height={48} />
<Logo variant="wordmark" tone="dark" height={40} />  {/* on light grounds */}
```

- Default `tone="light"` = mist letterforms + `--torc-green-400` arc, for ink grounds. `tone="dark"` = forest letterforms + `--torc-green-500` arc, for light grounds.
- Clear space: at least the height of the "O" ring on all sides.
- Never recolour the arc to a non-brand hue, never stretch, never add a stroke or shadow, never place the light tone on a light ground.
- `variant="tile"` puts the ring in ink on an accent square (radius 22%) — the only sanctioned inverted lockup.

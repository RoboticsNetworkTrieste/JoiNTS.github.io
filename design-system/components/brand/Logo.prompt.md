Renders the JoiNTS mark — the Red Hat Display ExtraBold logotype whose signature is the **I+N ligature**: the light I *is* the N's first stem, articulated by two pin joints.

```jsx
<Logo variant="lockup" height={28} />
<Logo variant="icon" height={32} />                 {/* the joint: link between two pins, no letters */}
<Logo variant="tile" height={48} />                 {/* ink joint on an accent square */}
<Logo variant="wordmark" tone="dark" height={40} /> {/* on light grounds */}
<Logo variant="stacked" height={40} />              {/* + ROBOTICS NETWORK TRIESTE */}
```

- Default `tone="light"` = mist letterforms + `--joints-green-400`, for ink grounds. `tone="dark"` = `--joints-forest-900` + `--joints-green-700` (AA on paper and off-white), for light grounds.
- The pins are always open rings (no fill), at every size.
- Clear space: one pin outer diameter (190/1000 em) on all sides. Align on cap-height and baseline, never the bounding box — the pins overhang.
- Never separate the I from the N into two stems, never tint the I in accent, never stretch/stroke/shadow, never place the light tone on a light ground.
- Static cuts in `assets/logo/`: `joints-wordmark-dark/light/knockout` (photography) `/mono` (single ink, detached I) `/small` (solid pins), `joints-icon-dark/light`, `joints-icon-on-accent` (tile), `joints-favicon`.

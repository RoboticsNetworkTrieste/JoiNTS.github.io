The main content unit of the site — the projects index is a grid of these.

```jsx
<ProjectCard
  title="Harbor SLAM"
  summary="Localizzazione robusta per droni di superficie nel Porto Vecchio, dove il GNSS non basta."
  state="live" stateLabel="sviluppo attivo"
  tags={['slam','percezione']} stack="ROS 2 Jazzy · Jetson Orin"
  contributors={6} updated="ultimo commit 3g" href="/progetti/harbor-slam"
/>
```

Grid them with `display:grid; gap:var(--space-6); grid-template-columns:repeat(auto-fill,minmax(320px,1fr))`.

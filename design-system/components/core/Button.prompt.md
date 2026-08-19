Standard action button — accent fill for the single most important action on a view, hairline secondary for everything else.

```jsx
<Button variant="primary" iconEnd="arrow-right">Entra in TORC</Button>
<Button variant="secondary" icon="github">Vedi il codice</Button>
<Button variant="ghost" size="sm">Annulla</Button>
<Button variant="secondary" mono size="sm" icon="terminal">git clone</Button>
```

- Labels are imperative and short: "Entra in TORC", "Proponi un progetto". Never "Click here".
- One `primary` per screen region. `danger` only for irreversible actions.
- Press state is a 1px downward nudge — mechanical, no bounce.

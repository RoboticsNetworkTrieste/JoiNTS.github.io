// Small console primitives, taken from the Officina kit in the design system
// (ui_kits/dashboard/DashShell.jsx). They live here rather than in
// design-system/ because that directory is a vendored mirror — see
// CONTRIBUTING.md. Every value below is a token; nothing is invented.
import React from 'react';
import { Icon } from '../../design-system/components/icon/Icon.jsx';

export const panel = {
  background: 'var(--surface-1)',
  border: '1px solid var(--border-subtle)',
  borderRadius: 'var(--radius-lg)',
};

export const mono = {
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--text-4xs)',
  letterSpacing: 'var(--ls-hud)',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  fontVariantNumeric: 'tabular-nums',
};

// A KPI tile. `value` is a real number from the API or an em dash — the design
// system forbids invented metrics, so there is no placeholder state here.
export function Tile({ label, value, note, icon, tone }) {
  return (
    <div style={{ ...panel, padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={mono}>{label}</span>
        {icon && <Icon name={icon} size={15} style={{ color: tone === 'accent' ? 'var(--text-accent)' : 'var(--text-muted)' }} />}
      </div>
      <span style={{
        fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', fontWeight: 'var(--fw-semibold)',
        lineHeight: '.92', letterSpacing: 'var(--ls-display)', color: 'var(--text-strong)', fontVariantNumeric: 'tabular-nums',
      }}>{value == null ? '—' : value}</span>
      {note && <span style={{ ...mono, letterSpacing: 'var(--ls-mono)', textTransform: 'none' }}>{note}</span>}
    </div>
  );
}

// Section head inside the console: hairline, index, label, optional action.
export function Rule({ index, label, note, action }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-4)',
      borderTop: '1px solid var(--border-subtle)', paddingTop: 'var(--space-3)', marginBottom: 'var(--space-5)',
    }}>
      {index && <span style={{ ...mono }}>{index}</span>}
      <span style={{ ...mono, color: 'var(--text-accent)' }}>{label}</span>
      {note && <span style={mono}>{note}</span>}
      {action && <span style={{ marginLeft: 'auto' }}>{action}</span>}
    </div>
  );
}

// Honest empty state: says what is absent and why, never fakes content.
export function Empty({ title, body, action }) {
  return (
    <div className="joints-field joints-hud" data-field="schematic" data-field-depth="open" style={{
      border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-12) var(--space-8)', display: 'flex', flexDirection: 'column',
      alignItems: 'center', gap: 'var(--space-3)', textAlign: 'center',
    }}>
      <span style={mono}>Stato</span>
      <h3 style={{
        fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 'var(--fw-semibold)',
        letterSpacing: 'var(--ls-heading)', color: 'var(--text-strong)', margin: 0,
      }}>{title}</h3>
      {body && <p style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-secondary)', margin: 0, maxWidth: '46ch' }}>{body}</p>}
      {action && <div style={{ marginTop: 'var(--space-2)' }}>{action}</div>}
    </div>
  );
}

// Language dot. GitHub's own colours are not in our palette, and inventing a
// per-language hue would be a second colour system — so it stays a neutral
// mark and the language is carried by the label.
export function Lang({ name }) {
  if (!name) return null;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', whiteSpace: 'nowrap' }}>
      <span style={{ width: 6, height: 6, borderRadius: 'var(--radius-circle)', background: 'var(--text-muted)', flex: 'none' }} />
      {name}
    </span>
  );
}

export function Meta({ icon, children }) {
  return (
    <span className="joints-project__meta-item">
      {icon && <Icon name={icon} size={13} />}
      {children}
    </span>
  );
}

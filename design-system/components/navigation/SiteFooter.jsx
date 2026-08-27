import React from 'react';
import { Logo } from '../brand/Logo.jsx';

export function SiteFooter({ columns = [], tagline = 'Robotics Network Trieste', note, meta = [], style, className, ...rest }) {
  return (
    <footer className={'joints-footer ' + (className || '')} style={style} {...rest}>
      <div className="joints-footer__inner">
        <div className="joints-footer__col">
          <Logo variant="lockup" height={22} />
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--ls-mono)', textTransform: 'uppercase', color: 'var(--text-muted)', margin: 0 }}>{tagline}</p>
          {note && <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', maxWidth: '34ch', margin: 'var(--space-2) 0 0' }}>{note}</p>}
        </div>
        {columns.map(col => (
          <div className="joints-footer__col" key={col.title}>
            <span className="joints-kicker joints-kicker--muted">{col.title}</span>
            {col.links.map(l => <a className="joints-footer__link" key={l.label} href={l.href}>{l.label}</a>)}
          </div>
        ))}
      </div>
      <div className="joints-footer__bottom">
        {meta.map(m => <span key={m}>{m}</span>)}
      </div>
    </footer>
  );
}

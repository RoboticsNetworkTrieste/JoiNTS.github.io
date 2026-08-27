import React from 'react';
import { Logo } from '../brand/Logo.jsx';
import { Button } from '../core/Button.jsx';
import { IconButton } from '../core/IconButton.jsx';

export function SiteHeader({ links = [], active, cta, github, onNavigate, style, className, ...rest }) {
  return (
    <header className={'joints-header ' + (className || '')} style={style} {...rest}>
      <div className="joints-header__inner">
        <a href="/" onClick={e => { if (onNavigate) { e.preventDefault(); onNavigate('/'); } }} style={{ display: 'flex', alignItems: 'center' }} aria-label="JoiNTS — home">
          <Logo variant="lockup" height={24} />
        </a>
        <nav className="joints-header__nav">
          {links.map(l => (
            <a key={l.href}
               className={'joints-navlink' + ((active === l.href || l.active) ? ' joints-navlink--active' : '')}
               href={l.href}
               onClick={e => { if (onNavigate) { e.preventDefault(); onNavigate(l.href); } }}>
              {l.label}
            </a>
          ))}
          {github && <IconButton icon="github" label="GitHub" href={github} />}
          {cta && <Button size="sm" variant="primary" mono href={cta.href} onClick={cta.onClick} style={{ marginLeft: 'var(--space-3)' }}>{cta.label}</Button>}
        </nav>
      </div>
    </header>
  );
}

import React from 'react';
import { Kicker } from '../brand/Kicker.jsx';

export function SectionHeading({ kicker, title, sub, align = 'left', as = 'h2', action, style, className, ...rest }) {
  const Tag = as;
  return (
    <div className={['joints-section-head', align === 'center' && 'joints-section-head--center', className].filter(Boolean).join(' ')} style={style} {...rest}>
      {kicker && <Kicker dash={align !== 'center'}>{kicker}</Kicker>}
      <Tag className="joints-section-head__title">{title}</Tag>
      {sub && <p className="joints-section-head__sub">{sub}</p>}
      {action && <div style={{ marginTop: 'var(--space-2)' }}>{action}</div>}
    </div>
  );
}

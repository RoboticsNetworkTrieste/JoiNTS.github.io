import React from 'react';

export function Kicker({ children, dash = false, tone = 'accent', as = 'div', style, className, ...rest }) {
  const Tag = as;
  const label = (
    <span className={'torc-kicker' + (tone === 'muted' ? ' torc-kicker--muted' : '')}>{children}</span>
  );
  if (!dash) return <Tag className={className} style={style} {...rest}>{label}</Tag>;
  return (
    <Tag className={'torc-kicker-row ' + (className || '')} style={style} {...rest}>
      <span className="torc-kicker-row__dash" />
      {label}
    </Tag>
  );
}

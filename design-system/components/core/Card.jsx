import React from 'react';

export function Card({ children, variant = 'default', pad = 'md', interactive = false, floating = false, href, as = 'div', style, className, ...rest }) {
  const cls = ['torc-card', variant !== 'default' && 'torc-card--' + variant, pad !== 'md' && 'torc-card--pad-' + pad, (interactive || href) && 'torc-card--interactive', floating && 'torc-card--floating', className].filter(Boolean).join(' ');
  const Tag = href ? 'a' : as;
  return <Tag className={cls} href={href} style={style} {...rest}>{children}</Tag>;
}

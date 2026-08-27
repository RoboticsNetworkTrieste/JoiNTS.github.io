import React from 'react';

export function Card({ children, variant = 'default', pad = 'md', interactive = false, floating = false, href, as = 'div', style, className, ...rest }) {
  const cls = ['joints-card', variant !== 'default' && 'joints-card--' + variant, pad !== 'md' && 'joints-card--pad-' + pad, (interactive || href) && 'joints-card--interactive', floating && 'joints-card--floating', className].filter(Boolean).join(' ');
  const Tag = href ? 'a' : as;
  return <Tag className={cls} href={href} style={style} {...rest}>{children}</Tag>;
}

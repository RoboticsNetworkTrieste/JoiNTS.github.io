import React from 'react';
import { Icon } from '../icon/Icon.jsx';

export function IconButton({ icon = 'circle-dot', label, variant = 'plain', size = 'md', disabled = false, href, onClick, style, className, ...rest }) {
  const cls = ['joints-iconbtn', variant !== 'plain' && 'joints-iconbtn--' + variant, size !== 'md' && 'joints-iconbtn--' + size, className].filter(Boolean).join(' ');
  const gl = size === 'sm' ? 15 : size === 'lg' ? 22 : 18;
  const glyph = <Icon name={icon} size={gl} />;
  if (href) return <a className={cls} href={href} aria-label={label} title={label} style={style} onClick={onClick} {...rest}>{glyph}</a>;
  return <button className={cls} type="button" aria-label={label} title={label} disabled={disabled} onClick={onClick} style={style} {...rest}>{glyph}</button>;
}

import React from 'react';
import { Icon } from '../icon/Icon.jsx';

export function Button({ children, variant = 'primary', size = 'md', icon, iconEnd, mono = false, block = false, disabled = false, href, type = 'button', onClick, style, className, ...rest }) {
  const cls = ['torc-btn', 'torc-btn--' + variant, size !== 'md' && 'torc-btn--' + size, mono && 'torc-btn--mono', block && 'torc-btn--block', className].filter(Boolean).join(' ');
  const gl = size === 'sm' ? 15 : size === 'lg' ? 20 : 17;
  const body = (
    <>
      {icon && <Icon name={icon} size={gl} />}
      {children}
      {iconEnd && <Icon name={iconEnd} size={gl} />}
    </>
  );
  if (href && !disabled) return <a className={cls} href={href} style={style} onClick={onClick} {...rest}>{body}</a>;
  return <button className={cls} type={type} disabled={disabled} onClick={onClick} style={style} {...rest}>{body}</button>;
}

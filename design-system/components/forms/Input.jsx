import React from 'react';
import { Icon } from '../icon/Icon.jsx';

export function Input({ icon, mono = false, invalid = false, style, className, ...rest }) {
  const cls = ['joints-input', mono && 'joints-input--mono', invalid && 'joints-input--invalid', className].filter(Boolean).join(' ');
  const input = <input className={cls} aria-invalid={invalid || undefined} style={style} {...rest} />;
  if (!icon) return input;
  return (
    <span className="joints-input-wrap">
      <span className="joints-input-wrap__icon"><Icon name={icon} size={16} /></span>
      {input}
    </span>
  );
}

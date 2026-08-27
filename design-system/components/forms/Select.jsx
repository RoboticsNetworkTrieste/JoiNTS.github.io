import React from 'react';
import { Icon } from '../icon/Icon.jsx';

export function Select({ options = [], placeholder, invalid = false, children, style, className, ...rest }) {
  const cls = ['joints-input', 'joints-select', invalid && 'joints-input--invalid', className].filter(Boolean).join(' ');
  return (
    <span className="joints-select-wrap">
      <select className={cls} aria-invalid={invalid || undefined} style={style} {...rest}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map(o => typeof o === 'string'
          ? <option key={o} value={o}>{o}</option>
          : <option key={o.value} value={o.value}>{o.label}</option>)}
        {children}
      </select>
      <span className="joints-select-wrap__chev"><Icon name="chevron-down" size={16} /></span>
    </span>
  );
}

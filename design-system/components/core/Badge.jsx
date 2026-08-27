import React from 'react';
import { Icon } from '../icon/Icon.jsx';

export function Badge({ children, tone = 'neutral', icon, style, className, ...rest }) {
  const cls = ['joints-badge', tone !== 'neutral' && 'joints-badge--' + tone, className].filter(Boolean).join(' ');
  return (
    <span className={cls} style={style} {...rest}>
      {icon && <Icon name={icon} size={12} strokeWidth={2.25} />}
      {children}
    </span>
  );
}

import React from 'react';

export function StatusDot({ state = 'idle', children, style, className, ...rest }) {
  const mod = { live: 'live', warn: 'warn', danger: 'danger', info: 'info' }[state];
  return (
    <span className={'joints-status ' + (className || '')} style={style} {...rest}>
      <span className={'joints-status__dot' + (mod ? ' joints-status__dot--' + mod : '')} />
      {children}
    </span>
  );
}

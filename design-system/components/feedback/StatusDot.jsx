import React from 'react';

export function StatusDot({ state = 'idle', children, style, className, ...rest }) {
  const mod = { live: 'live', warn: 'warn', danger: 'danger', info: 'info' }[state];
  return (
    <span className={'torc-status ' + (className || '')} style={style} {...rest}>
      <span className={'torc-status__dot' + (mod ? ' torc-status__dot--' + mod : '')} />
      {children}
    </span>
  );
}

import React from 'react';

export function Divider({ variant = 'default', orientation = 'horizontal', style, className, ...rest }) {
  const cls = ['joints-divider', variant !== 'default' && 'joints-divider--' + variant, orientation === 'vertical' && 'joints-divider--vertical', className].filter(Boolean).join(' ');
  return <hr className={cls} style={style} {...rest} />;
}

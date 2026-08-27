import React from 'react';
import { Icon } from '../icon/Icon.jsx';

export function Spinner({ size = 20, label = 'Caricamento', style, className, ...rest }) {
  return (
    <span role="status" aria-label={label} className={className} style={{ display: 'inline-flex', ...style }} {...rest}>
      <Icon name="loader-circle" size={size} className="joints-spinner" />
    </span>
  );
}

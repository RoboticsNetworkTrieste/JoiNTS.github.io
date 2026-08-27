import React from 'react';
import { Icon } from '../icon/Icon.jsx';

export function Field({ label, htmlFor, required = false, hint, error, children, style, className, ...rest }) {
  return (
    <div className={'joints-field ' + (className || '')} style={style} {...rest}>
      {label && (
        <label className="joints-field__label" htmlFor={htmlFor}>
          {label}{required && <span className="joints-field__req"> *</span>}
        </label>
      )}
      {children}
      {error
        ? <span className="joints-field__error"><Icon name="triangle-alert" size={13} />{error}</span>
        : hint && <span className="joints-field__hint">{hint}</span>}
    </div>
  );
}

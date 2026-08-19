import React from 'react';
import { Icon } from '../icon/Icon.jsx';

export function Field({ label, htmlFor, required = false, hint, error, children, style, className, ...rest }) {
  return (
    <div className={'torc-field ' + (className || '')} style={style} {...rest}>
      {label && (
        <label className="torc-field__label" htmlFor={htmlFor}>
          {label}{required && <span className="torc-field__req"> *</span>}
        </label>
      )}
      {children}
      {error
        ? <span className="torc-field__error"><Icon name="triangle-alert" size={13} />{error}</span>
        : hint && <span className="torc-field__hint">{hint}</span>}
    </div>
  );
}

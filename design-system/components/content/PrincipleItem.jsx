import React from 'react';

export function PrincipleItem({ number, title, children, style, className, ...rest }) {
  return (
    <div className={'joints-principle ' + (className || '')} style={style} {...rest}>
      <span className="joints-principle__num">{String(number).padStart(2, '0')}</span>
      <div>
        <h3 className="joints-principle__title">{title}</h3>
        <p className="joints-principle__body">{children}</p>
      </div>
    </div>
  );
}

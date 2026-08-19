import React from 'react';

export function PrincipleItem({ number, title, children, style, className, ...rest }) {
  return (
    <div className={'torc-principle ' + (className || '')} style={style} {...rest}>
      <span className="torc-principle__num">{String(number).padStart(2, '0')}</span>
      <div>
        <h3 className="torc-principle__title">{title}</h3>
        <p className="torc-principle__body">{children}</p>
      </div>
    </div>
  );
}

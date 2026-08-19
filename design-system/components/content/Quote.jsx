import React from 'react';

export function Quote({ children, by, role, style, className, ...rest }) {
  return (
    <figure className={'torc-quote ' + (className || '')} style={{ margin: 0, ...style }} {...rest}>
      <blockquote className="torc-quote__text" style={{ margin: 0 }}>{children}</blockquote>
      {(by || role) && <figcaption className="torc-quote__by">{by}{role && ' · ' + role}</figcaption>}
    </figure>
  );
}

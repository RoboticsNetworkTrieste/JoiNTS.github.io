import React from 'react';

export function Quote({ children, by, role, style, className, ...rest }) {
  return (
    <figure className={'joints-quote ' + (className || '')} style={{ margin: 0, ...style }} {...rest}>
      <blockquote className="joints-quote__text" style={{ margin: 0 }}>{children}</blockquote>
      {(by || role) && <figcaption className="joints-quote__by">{by}{role && ' · ' + role}</figcaption>}
    </figure>
  );
}

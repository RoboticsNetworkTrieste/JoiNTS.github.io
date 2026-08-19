import React from 'react';

export function StatBlock({ value, label, accentPart, style, className, ...rest }) {
  return (
    <div className={'torc-stat ' + (className || '')} style={style} {...rest}>
      <span className="torc-stat__value">{value}{accentPart && <em>{accentPart}</em>}</span>
      <span className="torc-stat__label">{label}</span>
    </div>
  );
}

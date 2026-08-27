import React from 'react';

export function StatBlock({ value, label, accentPart, style, className, ...rest }) {
  return (
    <div className={'joints-stat ' + (className || '')} style={style} {...rest}>
      <span className="joints-stat__value">{value}{accentPart && <em>{accentPart}</em>}</span>
      <span className="joints-stat__label">{label}</span>
    </div>
  );
}

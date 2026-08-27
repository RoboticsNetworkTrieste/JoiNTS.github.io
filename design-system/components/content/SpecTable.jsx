import React from 'react';

export function SpecTable({ rows = [], tight = false, style, className, ...rest }) {
  return (
    <div className={['joints-spec', tight && 'joints-spec--tight', className].filter(Boolean).join(' ')} style={style} {...rest}>
      {rows.map(r => {
        const [key, value, note] = Array.isArray(r) ? r : [r.key, r.value, r.note];
        return (
          <div className="joints-spec__row" key={key}>
            <span className="joints-spec__key">{key}</span>
            <span className="joints-spec__val">{value}{note && <em> · {note}</em>}</span>
          </div>
        );
      })}
    </div>
  );
}

import React from 'react';

export function SpecTable({ rows = [], tight = false, style, className, ...rest }) {
  return (
    <div className={['torc-spec', tight && 'torc-spec--tight', className].filter(Boolean).join(' ')} style={style} {...rest}>
      {rows.map(r => {
        const [key, value, note] = Array.isArray(r) ? r : [r.key, r.value, r.note];
        return (
          <div className="torc-spec__row" key={key}>
            <span className="torc-spec__key">{key}</span>
            <span className="torc-spec__val">{value}{note && <em> · {note}</em>}</span>
          </div>
        );
      })}
    </div>
  );
}

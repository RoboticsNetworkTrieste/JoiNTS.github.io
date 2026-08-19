import React from 'react';

export function Textarea({ invalid = false, mono = false, rows = 4, style, className, ...rest }) {
  const cls = ['torc-input', 'torc-input--textarea', mono && 'torc-input--mono', invalid && 'torc-input--invalid', className].filter(Boolean).join(' ');
  return <textarea className={cls} rows={rows} aria-invalid={invalid || undefined} style={style} {...rest} />;
}

import React from 'react';

export function Textarea({ invalid = false, mono = false, rows = 4, style, className, ...rest }) {
  const cls = ['joints-input', 'joints-input--textarea', mono && 'joints-input--mono', invalid && 'joints-input--invalid', className].filter(Boolean).join(' ');
  return <textarea className={cls} rows={rows} aria-invalid={invalid || undefined} style={style} {...rest} />;
}

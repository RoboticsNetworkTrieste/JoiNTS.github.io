import React from 'react';

export function Tag({ children, selected = false, onClick, count, style, className, ...rest }) {
  const cls = ['joints-tag', onClick && 'joints-tag--interactive', selected && 'joints-tag--selected', className].filter(Boolean).join(' ');
  const Tag_ = onClick ? 'button' : 'span';
  return (
    <Tag_ className={cls} onClick={onClick} type={onClick ? 'button' : undefined} style={style} {...rest}>
      {children}
      {count != null && <span style={{ color: 'var(--text-muted)' }}>{count}</span>}
    </Tag_>
  );
}

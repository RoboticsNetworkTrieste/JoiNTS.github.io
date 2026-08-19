import React from 'react';
import { Icon } from '../icon/Icon.jsx';

const GLYPH = { neutral: 'info', ok: 'circle-check', info: 'info', warn: 'triangle-alert', danger: 'triangle-alert' };

export function Alert({ tone = 'neutral', title, children, icon, style, className, ...rest }) {
  const cls = ['torc-alert', tone !== 'neutral' && 'torc-alert--' + tone, className].filter(Boolean).join(' ');
  return (
    <div className={cls} role={tone === 'danger' ? 'alert' : 'status'} style={style} {...rest}>
      <span className="torc-alert__icon"><Icon name={icon || GLYPH[tone]} size={18} /></span>
      <div>
        {title && <p className="torc-alert__title">{title}</p>}
        {children && <div>{children}</div>}
      </div>
    </div>
  );
}

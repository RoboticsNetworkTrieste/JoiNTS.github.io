import React from 'react';

export function Tabs({ tabs = [], value, onChange, style, className, ...rest }) {
  const [internal, setInternal] = React.useState(tabs[0] && (tabs[0].value || tabs[0]));
  const current = value != null ? value : internal;
  return (
    <div className={'joints-tabs ' + (className || '')} role="tablist" style={style} {...rest}>
      {tabs.map(t => {
        const v = t.value || t;
        const label = t.label || t;
        return (
          <button key={v} role="tab" aria-selected={current === v} type="button"
            className={'joints-tab' + (current === v ? ' joints-tab--active' : '')}
            onClick={() => { if (value == null) setInternal(v); onChange && onChange(v); }}>
            {label}
          </button>
        );
      })}
    </div>
  );
}

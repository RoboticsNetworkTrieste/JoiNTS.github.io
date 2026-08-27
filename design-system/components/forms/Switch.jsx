import React from 'react';

export function Switch({ label, checked, defaultChecked, onChange, disabled = false, style, className, ...rest }) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = checked != null ? checked : internal;
  return (
    <label className={['joints-switch', disabled && 'joints-switch--disabled', className].filter(Boolean).join(' ')} style={style}>
      <input
        type="checkbox" role="switch" checked={on} disabled={disabled}
        onChange={e => { if (checked == null) setInternal(e.target.checked); onChange && onChange(e); }}
        style={{ position: 'absolute', opacity: 0, width: 1, height: 1 }}
        {...rest}
      />
      <span className={'joints-switch__track' + (on ? ' joints-switch__track--on' : '')}><span className="joints-switch__knob" /></span>
      {label && <span>{label}</span>}
    </label>
  );
}

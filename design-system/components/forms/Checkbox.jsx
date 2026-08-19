import React from 'react';
import { Icon } from '../icon/Icon.jsx';

export function Checkbox({ label, checked, defaultChecked, onChange, disabled = false, type = 'checkbox', name, value, style, className, ...rest }) {
  const radio = type === 'radio';
  const isOn = checked != null ? checked : undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isOn != null ? isOn : internal;
  return (
    <label className={['torc-check', disabled && 'torc-check--disabled', className].filter(Boolean).join(' ')} style={style}>
      <input
        type={type} name={name} value={value} checked={on} disabled={disabled}
        onChange={e => { if (isOn == null) setInternal(e.target.checked); onChange && onChange(e); }}
        style={{ position: 'absolute', opacity: 0, width: 1, height: 1 }}
        {...rest}
      />
      <span className={['torc-check__box', radio && 'torc-check__box--radio', on && 'torc-check__box--on'].filter(Boolean).join(' ')}>
        {on && (radio ? <span className="torc-check__dot" /> : <Icon name="check" size={13} strokeWidth={3} />)}
      </span>
      <span>{label}</span>
    </label>
  );
}

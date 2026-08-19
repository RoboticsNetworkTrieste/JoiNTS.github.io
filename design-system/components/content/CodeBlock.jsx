import React from 'react';
import { IconButton } from '../core/IconButton.jsx';
import { Icon } from '../icon/Icon.jsx';

export function CodeBlock({ children, filename, language = 'bash', copyable = true, style, className, ...rest }) {
  return (
    <div className={'torc-code ' + (className || '')} style={style} {...rest}>
      <div className="torc-code__bar">
        <Icon name={filename ? 'file-text' : 'terminal'} size={13} />
        <span>{filename || language}</span>
        {copyable && <span style={{ marginLeft: 'auto' }}><IconButton icon="copy" label="Copia" size="sm" /></span>}
      </div>
      <pre className="torc-code__pre"><code>{children}</code></pre>
    </div>
  );
}

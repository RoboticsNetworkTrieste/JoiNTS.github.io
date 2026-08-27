import React from 'react';
import { Card } from '../core/Card.jsx';
import { Badge } from '../core/Badge.jsx';
import { Icon } from '../icon/Icon.jsx';
import { StatusDot } from '../feedback/StatusDot.jsx';

export function ProjectCard({ title, summary, state = 'live', stateLabel, tags = [], stack, contributors, updated, href, icon = 'circuit-board', style, className, ...rest }) {
  return (
    <Card href={href} interactive={!!href} className={className} style={{ minHeight: 0, ...style }} {...rest}>
      <div className="joints-project__head">
        <span style={{ display: 'grid', placeItems: 'center', width: 36, height: 36, borderRadius: 'var(--radius-md)', background: 'var(--accent-quiet)', color: 'var(--text-accent)', flex: 'none' }}>
          <Icon name={icon} size={18} />
        </span>
        {stateLabel && <StatusDot state={state}>{stateLabel}</StatusDot>}
      </div>
      <h3 className="joints-project__title" style={{ marginTop: 'var(--space-4)' }}>{title}</h3>
      <p className="joints-project__body">{summary}</p>
      {tags.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
          {tags.map(t => <Badge key={t}>{t}</Badge>)}
        </div>
      )}
      <div className="joints-project__meta">
        {stack && <span className="joints-project__meta-item"><Icon name="cpu" size={13} />{stack}</span>}
        {contributors != null && <span className="joints-project__meta-item"><Icon name="users" size={13} />{contributors}</span>}
        {updated && <span className="joints-project__meta-item"><Icon name="git-branch" size={13} />{updated}</span>}
      </div>
    </Card>
  );
}

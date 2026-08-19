import React from 'react';
import { Card } from '../core/Card.jsx';
import { Button } from '../core/Button.jsx';
import { Icon } from '../icon/Icon.jsx';

export function EventCard({ day, month, title, where, when, kind, href, ctaLabel = 'Partecipa', style, className, ...rest }) {
  return (
    <Card pad="sm" className={className} style={style} {...rest}>
      <div className="torc-event">
        <div className="torc-event__date">
          <span className="torc-event__day">{day}</span>
          <span className="torc-event__month">{month}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', minWidth: 0 }}>
          {kind && <span className="torc-kicker">{kind}</span>}
          <h4 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)' }}>{title}</h4>
          <span style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--ls-mono)', color: 'var(--text-muted)' }}>
            {where && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', whiteSpace: 'nowrap' }}><Icon name="map-pin" size={13} />{where}</span>}
            {when && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', whiteSpace: 'nowrap' }}><Icon name="clock" size={13} />{when}</span>}
          </span>
        </div>
        {href && <Button variant="secondary" size="sm" href={href}>{ctaLabel}</Button>}
      </div>
    </Card>
  );
}

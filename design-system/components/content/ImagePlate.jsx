import React from 'react';

export function ImagePlate({ src, alt = '', ratio = '16 / 9', caption, index, bleed = false, hud = true, height, style, className, ...rest }) {
  return (
    <figure
      className={['torc-plate', bleed && 'torc-plate--bleed', hud && 'torc-hud', className].filter(Boolean).join(' ')}
      style={{ position: 'relative', isolation: 'isolate', margin: 0, aspectRatio: height ? undefined : ratio, height, ...style }}
      {...rest}>
      {src
        ? <img className="torc-plate__media" src={src} alt={alt} />
        : <span className="torc-plate__empty"><span className="torc-hud-label">inserire fotografia{height ? '' : ' · ' + ratio.replace(/\s/g, '')}</span></span>}
      {index && <span className="torc-plate__index">{index}</span>}
      {caption && <figcaption className="torc-plate__caption">{caption}</figcaption>}
    </figure>
  );
}

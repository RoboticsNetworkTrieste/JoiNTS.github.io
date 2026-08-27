import React from 'react';

export function ImagePlate({ src, alt = '', ratio = '16 / 9', caption, index, bleed = false, hud = true, height, style, className, ...rest }) {
  return (
    <figure
      className={['joints-plate', bleed && 'joints-plate--bleed', hud && 'joints-hud', className].filter(Boolean).join(' ')}
      style={{ position: 'relative', isolation: 'isolate', margin: 0, aspectRatio: height ? undefined : ratio, height, ...style }}
      {...rest}>
      {src
        ? <img className="joints-plate__media" src={src} alt={alt} />
        : <span className="joints-plate__empty"><span className="joints-hud-label">inserire fotografia{height ? '' : ' · ' + ratio.replace(/\s/g, '')}</span></span>}
      {index && <span className="joints-plate__index">{index}</span>}
      {caption && <figcaption className="joints-plate__caption">{caption}</figcaption>}
    </figure>
  );
}

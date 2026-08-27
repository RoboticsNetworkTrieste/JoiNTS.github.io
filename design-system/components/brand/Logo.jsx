import React from 'react';

/* Geometry extracted verbatim from the delivered JoiNTS logotype
   (Red Hat Display ExtraBold outlines, em=1000, cap=700, baseline y=0).
   The I+N ligature is the signature: the light I IS the N's first stem.
   Never separate the I from the N, never tint the I in accent, never redraw.
   Pins knock out to the ground via mask and are ALWAYS open rings — never filled. */
const D_JO = "M300.0 10Q195.0 10 122.0 -43.0Q49.0 -96 17.0 -195L151.0 -246Q173.0 -183 210.0 -152.5Q247.0 -122 301.0 -122Q365.0 -122 404.5 -164.0Q444.0 -206 444.0 -276V-700H589.0V-272Q589.0 -187 553.0 -123.5Q517.0 -60 452.0 -25.0Q387.0 10 300.0 10Z M1073.0 11Q995.0 11 928.0 -16.5Q861.0 -44 810.0 -93.5Q759.0 -143 731.0 -208.5Q703.0 -274 703.0 -350Q703.0 -426 731.0 -491.5Q759.0 -557 810.0 -606.5Q861.0 -656 928.0 -683.5Q995.0 -711 1073.0 -711Q1151.0 -711 1218.5 -683.5Q1286.0 -656 1336.5 -606.5Q1387.0 -557 1415.0 -491.5Q1443.0 -426 1443.0 -350Q1443.0 -274 1415.0 -208.5Q1387.0 -143 1336.5 -93.5Q1286.0 -44 1218.5 -16.5Q1151.0 11 1073.0 11ZM1073.0 -122Q1121.0 -122 1161.0 -139.5Q1201.0 -157 1231.0 -187.5Q1261.0 -218 1277.5 -260.0Q1294.0 -302 1294.0 -350Q1294.0 -399 1277.5 -440.5Q1261.0 -482 1231.0 -512.5Q1201.0 -543 1161.0 -560.5Q1121.0 -578 1074.0 -578Q1026.0 -578 986.0 -560.5Q946.0 -543 916.0 -512.5Q886.0 -482 869.0 -440.5Q852.0 -399 852.0 -350Q852.0 -302 869.0 -260.0Q886.0 -218 916.0 -187.5Q946.0 -157 986.0 -139.5Q1026.0 -122 1073.0 -122Z";
const D_TS = "M2642.0 0V-571H2407.0V-700H3023.0V-571H2788.0V0Z M3379.0 10Q3294.0 10 3213.0 -21.5Q3132.0 -53 3069.0 -111L3152.0 -215Q3214.0 -162 3270.0 -137.5Q3326.0 -113 3389.0 -113Q3433.0 -113 3465.0 -123.5Q3497.0 -134 3514.5 -154.0Q3532.0 -174 3532.0 -201Q3532.0 -237 3506.0 -256.5Q3480.0 -276 3417.0 -287L3278.0 -310Q3189.0 -326 3142.5 -374.0Q3096.0 -422 3096.0 -498Q3096.0 -563 3129.5 -611.0Q3163.0 -659 3224.5 -684.5Q3286.0 -710 3371.0 -710Q3448.0 -710 3525.0 -684.0Q3602.0 -658 3660.0 -612L3582.0 -504Q3472.0 -588 3362.0 -588Q3322.0 -588 3293.0 -578.0Q3264.0 -568 3248.5 -550.5Q3233.0 -533 3233.0 -509Q3233.0 -477 3256.5 -459.5Q3280.0 -442 3333.0 -433L3465.0 -411Q3570.0 -394 3622.5 -344.5Q3675.0 -295 3675.0 -214Q3675.0 -146 3638.5 -95.5Q3602.0 -45 3535.5 -17.5Q3469.0 10 3379.0 10Z";
const D_I = "M1638.0 0V-700H1784.0V0Z";
const D_DIAG = "M1711 -700 L2187 0";
const D_STEM = "M2187 0 L2187 -700";
const WORD_VB = '0 -800 3692 900';   /* cap-height/baseline aligned; pins overhang top+bottom */
const WORD_AR = 3692 / 900;
/* Icon = the joint alone: the link between two pins, no letterforms. Square, 100u. */
function Joint({ ink, accent, uid }) {
  const m = 'jjm' + uid;
  return <>
    <mask id={m} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
      <rect width="100" height="100" fill="#fff" />
      <circle cx="30" cy="72" r="15" /><circle cx="70" cy="28" r="15" />
    </mask>
    <line x1="30" y1="72" x2="70" y2="28" stroke={accent} strokeWidth="13" mask={'url(#' + m + ')'} />
    <circle cx="30" cy="72" r="11" fill="none" stroke={ink} strokeWidth="8" />
    <circle cx="70" cy="28" r="11" fill="none" stroke={accent} strokeWidth="8" />
  </>;
}

function Pins({ top, bot }) {
  return <>
    <circle cx="1711" cy="-700" r="78" fill="none" stroke={top} strokeWidth="34" />
    <circle cx="2187" cy="0" r="78" fill="none" stroke={bot} strokeWidth="34" />
  </>;
}
const MaskBox = { maskUnits: 'userSpaceOnUse', x: -400, y: -1200, width: 4600, height: 1700 };
function PinMask({ id }) {
  return <mask id={id} {...MaskBox}>
    <rect x="-400" y="-1200" width="4600" height="1700" fill="#fff" />
    <circle cx="1711" cy="-700" r="95" /><circle cx="2187" cy="0" r="95" />
  </mask>;
}

export function Logo({ variant = 'lockup', height, tone = 'light', accent, ink, title = 'JoiNTS — Robotics Network Trieste', style, className, ...rest }) {
  const uid = React.useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const inkColor = ink || (tone === 'dark' ? 'var(--joints-forest-900)' : 'var(--joints-mist-100)');
  const accentColor = accent || (tone === 'dark' ? 'var(--joints-green-700)' : 'var(--joints-green-400)');
  const h = height || (variant === 'icon' ? 32 : variant === 'tile' ? 40 : 28);
  const pm = 'jpm' + uid;

  if (variant === 'tile') {
    return (
      <svg viewBox="0 0 100 100" width={h} height={h} role="img" aria-label={title} className={className}
        style={{ display: 'block', flex: 'none', ...style }} {...rest}>
        <rect width="100" height="100" rx="22" fill={accent || 'var(--joints-green-400)'} />
        <Joint ink="var(--joints-ink-900)" accent="var(--joints-ink-900)" uid={uid} />
      </svg>
    );
  }
  if (variant === 'icon') {
    return (
      <svg viewBox="0 0 100 100" width={h} height={h} role="img" aria-label={title} className={className}
        style={{ display: 'block', flex: 'none', ...style }} {...rest}>
        <Joint ink={inkColor} accent={accentColor} uid={uid} />
      </svg>
    );
  }
  const word = (extra) => (
    <svg viewBox={WORD_VB} height={h} width={Math.round(h * WORD_AR)} role="img" aria-label={title}
      style={{ display: 'block', flex: 'none', ...(extra ? {} : style) }}
      {...(extra ? {} : { className, ...rest })}>
      <PinMask id={pm} />
      <g mask={'url(#' + pm + ')'}>
        <path d={D_DIAG} fill="none" stroke={accentColor} strokeWidth="146" />
        <path d={D_STEM} fill="none" stroke={accentColor} strokeWidth="146" />
        <path d={D_TS} fill={accentColor} />
        <path d={D_JO} fill={inkColor} />
        <path d={D_I} fill={inkColor} />
      </g>
      <Pins top={inkColor} bot={accentColor} />
    </svg>
  );
  if (variant !== 'stacked') return word(false);
  /* stacked: the bottom pin overhangs the baseline, so the descriptor gets a full extra line of air */
  return (
    <span className={className} style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', ...style }} {...rest}>
      {word(true)}
      <span style={{ marginTop: Math.round(h * 0.38), fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--ls-kicker)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
        Robotics Network Trieste
      </span>
    </span>
  );
}

import React from 'react';

/* Path data copied verbatim from the delivered brand SVGs
   (assets/logo/torc-icon-dark.svg, assets/logo/torc-wordmark-dark.svg).
   Never redraw these — the ring, the torque arc and the terminal dot are the mark. */
const ICON_INNER = "<path d=\"M50 79.602L50 79.602Q43.604 79.602 38.110 77.347Q32.616 75.092 28.434 71.033Q24.252 66.974 21.956 61.603Q19.660 56.232 19.660 50L19.660 50Q19.660 43.768 21.956 38.397Q24.252 33.026 28.434 28.967Q32.616 24.908 38.110 22.653Q43.604 20.398 50 20.398L50 20.398Q56.396 20.398 61.931 22.653Q67.466 24.908 71.607 28.967Q75.748 33.026 78.044 38.397Q80.340 43.768 80.340 50L80.340 50Q80.340 56.232 78.044 61.603Q75.748 66.974 71.607 71.033Q67.466 75.092 61.931 77.347Q56.396 79.602 50 79.602ZM50 68.696L50 68.696Q53.936 68.696 57.216 67.261Q60.496 65.826 62.956 63.325Q65.416 60.824 66.769 57.380Q68.122 53.936 68.122 50L68.122 50Q68.122 45.982 66.769 42.579Q65.416 39.176 62.956 36.675Q60.496 34.174 57.216 32.739Q53.936 31.304 50.082 31.304L50.082 31.304Q46.146 31.304 42.866 32.739Q39.586 34.174 37.126 36.675Q34.666 39.176 33.272 42.579Q31.878 45.982 31.878 50L31.878 50Q31.878 53.936 33.272 57.380Q34.666 60.824 37.126 63.325Q39.586 65.826 42.866 67.261Q46.146 68.696 50 68.696Z\" fill=\"var(--logo-ink)\"></path><path d=\"M 50 18.8 A 31.2 31.2 0 0 1 80.7 44.6\" fill=\"none\" stroke=\"var(--logo-accent)\" stroke-width=\"6.5\" stroke-linecap=\"round\"></path><circle cx=\"80.7\" cy=\"44.6\" r=\"4.5\" fill=\"var(--logo-accent)\"></circle>";
const WORD_INNER = "<path d=\"M39.900 90L25.300 90L25.300 32.900L1.800 32.900L1.800 20L63.400 20L63.400 32.900L39.900 32.900L39.900 90Z\" fill=\"var(--logo-ink)\"></path><path d=\"M103.800 91.100L103.800 91.100Q96 91.100 89.300 88.350Q82.600 85.600 77.500 80.650Q72.400 75.700 69.600 69.150Q66.800 62.600 66.800 55L66.800 55Q66.800 47.400 69.600 40.850Q72.400 34.300 77.500 29.350Q82.600 24.400 89.300 21.650Q96 18.900 103.800 18.900L103.800 18.900Q111.600 18.900 118.350 21.650Q125.100 24.400 130.150 29.350Q135.200 34.300 138 40.850Q140.800 47.400 140.800 55L140.800 55Q140.800 62.600 138 69.150Q135.200 75.700 130.150 80.650Q125.100 85.600 118.350 88.350Q111.600 91.100 103.800 91.100ZM103.800 77.800L103.800 77.800Q108.600 77.800 112.600 76.050Q116.600 74.300 119.600 71.250Q122.600 68.200 124.250 64Q125.900 59.800 125.900 55L125.900 55Q125.900 50.100 124.250 45.950Q122.600 41.800 119.600 38.750Q116.600 35.700 112.600 33.950Q108.600 32.200 103.900 32.200L103.900 32.200Q99.100 32.200 95.100 33.950Q91.100 35.700 88.100 38.750Q85.100 41.800 83.400 45.950Q81.700 50.100 81.700 55L81.700 55Q81.700 59.800 83.400 64Q85.100 68.200 88.100 71.250Q91.100 74.300 95.100 76.050Q99.100 77.800 103.800 77.800Z\" fill=\"var(--logo-ink)\"></path><path d=\"M163.400 90L148.800 90L148.800 20L183 20Q190.100 20 195.550 22.750Q201 25.500 204.100 30.400Q207.200 35.300 207.200 41.700L207.200 41.700Q207.200 48.400 203.450 53.500Q199.700 58.600 193.600 61.100L193.600 61.100L209 90L192.800 90L179.100 63.200L163.400 63.200L163.400 90ZM163.400 32.500L163.400 51.300L181.700 51.300Q186.600 51.300 189.550 48.700Q192.500 46.100 192.500 41.900L192.500 41.900Q192.500 37.700 189.550 35.100Q186.600 32.500 181.700 32.500L181.700 32.500L163.400 32.500Z\" fill=\"var(--logo-ink)\"></path><path d=\"M249.200 91L249.200 91Q241.400 91 234.600 88.250Q227.800 85.500 222.750 80.600Q217.700 75.700 214.850 69.150Q212 62.600 212 55L212 55Q212 47.300 214.850 40.750Q217.700 34.200 222.800 29.300Q227.900 24.400 234.650 21.650Q241.400 18.900 249.200 18.900L249.200 18.900Q255 18.900 260.400 20.500Q265.800 22.100 270.450 25Q275.100 27.900 278.400 32L278.400 32L268.600 41.700Q264.800 37 259.850 34.600Q254.900 32.200 249.200 32.200L249.200 32.200Q244.500 32.200 240.400 33.950Q236.300 35.700 233.300 38.750Q230.300 41.800 228.600 45.950Q226.900 50.100 226.900 55L226.900 55Q226.900 59.800 228.650 63.900Q230.400 68 233.450 71.100Q236.500 74.200 240.700 75.900Q244.900 77.600 249.700 77.600L249.700 77.600Q255.200 77.600 260 75.300Q264.800 73 268.400 68.700L268.400 68.700L278 78.100Q274.700 82.100 270.100 85Q265.500 87.900 260.150 89.450Q254.800 91 249.200 91Z\" fill=\"var(--logo-ink)\"></path><path d=\"M 103.7 17 A 39.5 38 0 0 1 142.6 48.4\" fill=\"none\" stroke=\"var(--logo-accent)\" stroke-width=\"7\" stroke-linecap=\"round\"></path><circle cx=\"142.6\" cy=\"48.4\" r=\"5\" fill=\"var(--logo-accent)\"></circle><path d=\"M 247.4 93 A 38 38 0 0 1 210.7 64.8\" fill=\"none\" stroke=\"var(--logo-accent)\" stroke-width=\"7\" stroke-linecap=\"round\"></path><circle cx=\"210.7\" cy=\"64.8\" r=\"5\" fill=\"var(--logo-accent)\"></circle>";

export function Logo({ variant = 'lockup', height, tone = 'light', accent, ink, title = 'TORC — Trieste Open Robotics Community', style, className, ...rest }) {
  const inkColor = ink || (tone === 'dark' ? 'var(--torc-forest-900)' : 'var(--torc-mist-100)');
  const accentColor = accent || (tone === 'dark' ? 'var(--torc-green-500)' : 'var(--torc-green-400)');
  const vars = { '--logo-ink': inkColor, '--logo-accent': accentColor };
  const h = height || (variant === 'icon' ? 32 : variant === 'tile' ? 40 : 28);

  if (variant === 'icon' || variant === 'tile') {
    const tile = variant === 'tile';
    return (
      <svg viewBox="0 0 100 100" width={h} height={h} role="img" aria-label={title}
        className={className}
        style={{ display: 'block', flex: 'none', ...vars, ...style }} {...rest}>
        {tile && <rect width="100" height="100" rx="22" fill={accentColor} />}
        <g dangerouslySetInnerHTML={{ __html: ICON_INNER }}
           style={tile ? { '--logo-ink': 'var(--torc-ink-900)', '--logo-accent': 'var(--torc-ink-900)' } : undefined}
           transform={tile ? 'translate(19 19) scale(0.62)' : undefined} />
      </svg>
    );
  }
  if (variant === 'wordmark' || variant === 'lockup') {
    return (
      <svg viewBox="-4 8 292 92" height={h} width={h * (292 / 92)} role="img" aria-label={title}
        className={className}
        style={{ display: 'block', flex: 'none', ...vars, ...style }}
        dangerouslySetInnerHTML={{ __html: WORD_INNER }} {...rest} />
    );
  }
  // 'stacked' — wordmark over the expanded name
  return (
    <span className={className} style={{ display: 'inline-flex', flexDirection: 'column', gap: 'var(--space-3)', ...style }} {...rest}>
      <svg viewBox="-4 8 292 92" height={h} width={h * (292 / 92)} role="img" aria-label={title}
        style={{ display: 'block', ...vars }} dangerouslySetInnerHTML={{ __html: WORD_INNER }} />
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--ls-kicker)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
        Trieste Open Robotics Community
      </span>
    </span>
  );
}

/* @ds-bundle: {"format":4,"namespace":"TORCDesignSystem_49bcd9","components":[{"name":"Kicker","sourcePath":"components/brand/Kicker.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"CodeBlock","sourcePath":"components/content/CodeBlock.jsx"},{"name":"EventCard","sourcePath":"components/content/EventCard.jsx"},{"name":"ImagePlate","sourcePath":"components/content/ImagePlate.jsx"},{"name":"PrincipleItem","sourcePath":"components/content/PrincipleItem.jsx"},{"name":"ProjectCard","sourcePath":"components/content/ProjectCard.jsx"},{"name":"Quote","sourcePath":"components/content/Quote.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"SpecTable","sourcePath":"components/content/SpecTable.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"StatusDot","sourcePath":"components/feedback/StatusDot.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"ICONS","sourcePath":"components/icon/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/icon/Icon.jsx"},{"name":"Icon","sourcePath":"components/icon/Icon.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Kicker.jsx":"dee8b11375a1","components/brand/Logo.jsx":"ad2010ab73f6","components/content/CodeBlock.jsx":"cf07059b5c15","components/content/EventCard.jsx":"bed5d89ce422","components/content/ImagePlate.jsx":"627e30855041","components/content/PrincipleItem.jsx":"db46cabd47b3","components/content/ProjectCard.jsx":"4d6206d0b306","components/content/Quote.jsx":"f94e57d8dee3","components/content/SectionHeading.jsx":"20c3849169c9","components/content/SpecTable.jsx":"01098a55b671","components/content/StatBlock.jsx":"348777d245ac","components/core/Badge.jsx":"11c5f1b7ddd1","components/core/Button.jsx":"b246d3ee31e7","components/core/Card.jsx":"997f892f8867","components/core/Divider.jsx":"384b332d74a9","components/core/IconButton.jsx":"a987e2b1bf5e","components/core/Tag.jsx":"3a5067cc2c4a","components/feedback/Alert.jsx":"60ad0576fba9","components/feedback/Spinner.jsx":"bb91dd6853d9","components/feedback/StatusDot.jsx":"6afd1cdac230","components/forms/Checkbox.jsx":"1af50733d713","components/forms/Field.jsx":"4465a39af611","components/forms/Input.jsx":"c95bcf2d4404","components/forms/Select.jsx":"8e519572c336","components/forms/Switch.jsx":"7694269f0b0c","components/forms/Textarea.jsx":"be4e3091f1b3","components/icon/Icon.jsx":"2830b5c7b45c","components/navigation/SiteFooter.jsx":"41c8b09d3106","components/navigation/SiteHeader.jsx":"72aa94b68dc9","components/navigation/Tabs.jsx":"eded3d1cd9d6","ui_kits/dashboard/BuildsScreen.jsx":"47baabba1229","ui_kits/dashboard/DashShell.jsx":"c89e9870e719","ui_kits/dashboard/OverviewScreen.jsx":"467c8db9d009","ui_kits/dashboard/RigsScreen.jsx":"1d55941c065e","ui_kits/dashboard/dash-content.js":"b10886f07602","ui_kits/docs/DocsArticle.jsx":"b518bdb56cba","ui_kits/docs/DocsPages.jsx":"2fb1913ec385","ui_kits/docs/DocsSidebar.jsx":"fe2d71db948b","ui_kits/docs/docs-content.js":"58cba4982f1b","ui_kits/website/EventsScreen.jsx":"665a3bb27239","ui_kits/website/HomeScreen.jsx":"69773d235baa","ui_kits/website/JoinScreen.jsx":"d55481a8e650","ui_kits/website/ManifestoScreen.jsx":"b7a231ce6f8d","ui_kits/website/ProjectDetailScreen.jsx":"859f5d480dd9","ui_kits/website/ProjectsScreen.jsx":"df2f04d61db5","ui_kits/website/content.js":"f6caf5752d34"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TORCDesignSystem_49bcd9 = window.TORCDesignSystem_49bcd9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Kicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Kicker({
  children,
  dash = false,
  tone = 'accent',
  as = 'div',
  style,
  className,
  ...rest
}) {
  const Tag = as;
  const label = /*#__PURE__*/React.createElement("span", {
    className: 'torc-kicker' + (tone === 'muted' ? ' torc-kicker--muted' : '')
  }, children);
  if (!dash) return /*#__PURE__*/React.createElement(Tag, _extends({
    className: className,
    style: style
  }, rest), label);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: 'torc-kicker-row ' + (className || ''),
    style: style
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "torc-kicker-row__dash"
  }), label);
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Path data copied verbatim from the delivered brand SVGs
   (assets/logo/torc-icon-dark.svg, assets/logo/torc-wordmark-dark.svg).
   Never redraw these — the ring, the torque arc and the terminal dot are the mark. */
const ICON_INNER = "<path d=\"M50 79.602L50 79.602Q43.604 79.602 38.110 77.347Q32.616 75.092 28.434 71.033Q24.252 66.974 21.956 61.603Q19.660 56.232 19.660 50L19.660 50Q19.660 43.768 21.956 38.397Q24.252 33.026 28.434 28.967Q32.616 24.908 38.110 22.653Q43.604 20.398 50 20.398L50 20.398Q56.396 20.398 61.931 22.653Q67.466 24.908 71.607 28.967Q75.748 33.026 78.044 38.397Q80.340 43.768 80.340 50L80.340 50Q80.340 56.232 78.044 61.603Q75.748 66.974 71.607 71.033Q67.466 75.092 61.931 77.347Q56.396 79.602 50 79.602ZM50 68.696L50 68.696Q53.936 68.696 57.216 67.261Q60.496 65.826 62.956 63.325Q65.416 60.824 66.769 57.380Q68.122 53.936 68.122 50L68.122 50Q68.122 45.982 66.769 42.579Q65.416 39.176 62.956 36.675Q60.496 34.174 57.216 32.739Q53.936 31.304 50.082 31.304L50.082 31.304Q46.146 31.304 42.866 32.739Q39.586 34.174 37.126 36.675Q34.666 39.176 33.272 42.579Q31.878 45.982 31.878 50L31.878 50Q31.878 53.936 33.272 57.380Q34.666 60.824 37.126 63.325Q39.586 65.826 42.866 67.261Q46.146 68.696 50 68.696Z\" fill=\"var(--logo-ink)\"></path><path d=\"M 50 18.8 A 31.2 31.2 0 0 1 80.7 44.6\" fill=\"none\" stroke=\"var(--logo-accent)\" stroke-width=\"6.5\" stroke-linecap=\"round\"></path><circle cx=\"80.7\" cy=\"44.6\" r=\"4.5\" fill=\"var(--logo-accent)\"></circle>";
const WORD_INNER = "<path d=\"M39.900 90L25.300 90L25.300 32.900L1.800 32.900L1.800 20L63.400 20L63.400 32.900L39.900 32.900L39.900 90Z\" fill=\"var(--logo-ink)\"></path><path d=\"M103.800 91.100L103.800 91.100Q96 91.100 89.300 88.350Q82.600 85.600 77.500 80.650Q72.400 75.700 69.600 69.150Q66.800 62.600 66.800 55L66.800 55Q66.800 47.400 69.600 40.850Q72.400 34.300 77.500 29.350Q82.600 24.400 89.300 21.650Q96 18.900 103.800 18.900L103.800 18.900Q111.600 18.900 118.350 21.650Q125.100 24.400 130.150 29.350Q135.200 34.300 138 40.850Q140.800 47.400 140.800 55L140.800 55Q140.800 62.600 138 69.150Q135.200 75.700 130.150 80.650Q125.100 85.600 118.350 88.350Q111.600 91.100 103.800 91.100ZM103.800 77.800L103.800 77.800Q108.600 77.800 112.600 76.050Q116.600 74.300 119.600 71.250Q122.600 68.200 124.250 64Q125.900 59.800 125.900 55L125.900 55Q125.900 50.100 124.250 45.950Q122.600 41.800 119.600 38.750Q116.600 35.700 112.600 33.950Q108.600 32.200 103.900 32.200L103.900 32.200Q99.100 32.200 95.100 33.950Q91.100 35.700 88.100 38.750Q85.100 41.800 83.400 45.950Q81.700 50.100 81.700 55L81.700 55Q81.700 59.800 83.400 64Q85.100 68.200 88.100 71.250Q91.100 74.300 95.100 76.050Q99.100 77.800 103.800 77.800Z\" fill=\"var(--logo-ink)\"></path><path d=\"M163.400 90L148.800 90L148.800 20L183 20Q190.100 20 195.550 22.750Q201 25.500 204.100 30.400Q207.200 35.300 207.200 41.700L207.200 41.700Q207.200 48.400 203.450 53.500Q199.700 58.600 193.600 61.100L193.600 61.100L209 90L192.800 90L179.100 63.200L163.400 63.200L163.400 90ZM163.400 32.500L163.400 51.300L181.700 51.300Q186.600 51.300 189.550 48.700Q192.500 46.100 192.500 41.900L192.500 41.900Q192.500 37.700 189.550 35.100Q186.600 32.500 181.700 32.500L181.700 32.500L163.400 32.500Z\" fill=\"var(--logo-ink)\"></path><path d=\"M249.200 91L249.200 91Q241.400 91 234.600 88.250Q227.800 85.500 222.750 80.600Q217.700 75.700 214.850 69.150Q212 62.600 212 55L212 55Q212 47.300 214.850 40.750Q217.700 34.200 222.800 29.300Q227.900 24.400 234.650 21.650Q241.400 18.900 249.200 18.900L249.200 18.900Q255 18.900 260.400 20.500Q265.800 22.100 270.450 25Q275.100 27.900 278.400 32L278.400 32L268.600 41.700Q264.800 37 259.850 34.600Q254.900 32.200 249.200 32.200L249.200 32.200Q244.500 32.200 240.400 33.950Q236.300 35.700 233.300 38.750Q230.300 41.800 228.600 45.950Q226.900 50.100 226.900 55L226.900 55Q226.900 59.800 228.650 63.900Q230.400 68 233.450 71.100Q236.500 74.200 240.700 75.900Q244.900 77.600 249.700 77.600L249.700 77.600Q255.200 77.600 260 75.300Q264.800 73 268.400 68.700L268.400 68.700L278 78.100Q274.700 82.100 270.100 85Q265.500 87.900 260.150 89.450Q254.800 91 249.200 91Z\" fill=\"var(--logo-ink)\"></path><path d=\"M 103.7 17 A 39.5 38 0 0 1 142.6 48.4\" fill=\"none\" stroke=\"var(--logo-accent)\" stroke-width=\"7\" stroke-linecap=\"round\"></path><circle cx=\"142.6\" cy=\"48.4\" r=\"5\" fill=\"var(--logo-accent)\"></circle><path d=\"M 247.4 93 A 38 38 0 0 1 210.7 64.8\" fill=\"none\" stroke=\"var(--logo-accent)\" stroke-width=\"7\" stroke-linecap=\"round\"></path><circle cx=\"210.7\" cy=\"64.8\" r=\"5\" fill=\"var(--logo-accent)\"></circle>";
function Logo({
  variant = 'lockup',
  height,
  tone = 'light',
  accent,
  ink,
  title = 'TORC — Trieste Open Robotics Community',
  style,
  className,
  ...rest
}) {
  const inkColor = ink || (tone === 'dark' ? 'var(--torc-forest-900)' : 'var(--torc-mist-100)');
  const accentColor = accent || (tone === 'dark' ? 'var(--torc-green-500)' : 'var(--torc-green-400)');
  const vars = {
    '--logo-ink': inkColor,
    '--logo-accent': accentColor
  };
  const h = height || (variant === 'icon' ? 32 : variant === 'tile' ? 40 : 28);
  if (variant === 'icon' || variant === 'tile') {
    const tile = variant === 'tile';
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 100 100",
      width: h,
      height: h,
      role: "img",
      "aria-label": title,
      className: className,
      style: {
        display: 'block',
        flex: 'none',
        ...vars,
        ...style
      }
    }, rest), tile && /*#__PURE__*/React.createElement("rect", {
      width: "100",
      height: "100",
      rx: "22",
      fill: accentColor
    }), /*#__PURE__*/React.createElement("g", {
      dangerouslySetInnerHTML: {
        __html: ICON_INNER
      },
      style: tile ? {
        '--logo-ink': 'var(--torc-ink-900)',
        '--logo-accent': 'var(--torc-ink-900)'
      } : undefined,
      transform: tile ? 'translate(19 19) scale(0.62)' : undefined
    }));
  }
  if (variant === 'wordmark' || variant === 'lockup') {
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "-4 8 292 92",
      height: h,
      width: h * (292 / 92),
      role: "img",
      "aria-label": title,
      className: className,
      style: {
        display: 'block',
        flex: 'none',
        ...vars,
        ...style
      },
      dangerouslySetInnerHTML: {
        __html: WORD_INNER
      }
    }, rest));
  }
  // 'stacked' — wordmark over the expanded name
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    viewBox: "-4 8 292 92",
    height: h,
    width: h * (292 / 92),
    role: "img",
    "aria-label": title,
    style: {
      display: 'block',
      ...vars
    },
    dangerouslySetInnerHTML: {
      __html: WORD_INNER
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--ls-kicker)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Trieste Open Robotics Community"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/content/ImagePlate.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ImagePlate({
  src,
  alt = '',
  ratio = '16 / 9',
  caption,
  index,
  bleed = false,
  hud = true,
  height,
  style,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: ['torc-plate', bleed && 'torc-plate--bleed', hud && 'torc-hud', className].filter(Boolean).join(' '),
    style: {
      position: 'relative',
      isolation: 'isolate',
      margin: 0,
      aspectRatio: height ? undefined : ratio,
      height,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    className: "torc-plate__media",
    src: src,
    alt: alt
  }) : /*#__PURE__*/React.createElement("span", {
    className: "torc-plate__empty"
  }, /*#__PURE__*/React.createElement("span", {
    className: "torc-hud-label"
  }, "inserire fotografia", height ? '' : ' · ' + ratio.replace(/\s/g, ''))), index && /*#__PURE__*/React.createElement("span", {
    className: "torc-plate__index"
  }, index), caption && /*#__PURE__*/React.createElement("figcaption", {
    className: "torc-plate__caption"
  }, caption));
}
Object.assign(__ds_scope, { ImagePlate });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ImagePlate.jsx", error: String((e && e.message) || e) }); }

// components/content/PrincipleItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PrincipleItem({
  number,
  title,
  children,
  style,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: 'torc-principle ' + (className || ''),
    style: style
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "torc-principle__num"
  }, String(number).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "torc-principle__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "torc-principle__body"
  }, children)));
}
Object.assign(__ds_scope, { PrincipleItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PrincipleItem.jsx", error: String((e && e.message) || e) }); }

// components/content/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Quote({
  children,
  by,
  role,
  style,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: 'torc-quote ' + (className || ''),
    style: {
      margin: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    className: "torc-quote__text",
    style: {
      margin: 0
    }
  }, children), (by || role) && /*#__PURE__*/React.createElement("figcaption", {
    className: "torc-quote__by"
  }, by, role && ' · ' + role));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Quote.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  kicker,
  title,
  sub,
  align = 'left',
  as = 'h2',
  action,
  style,
  className,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['torc-section-head', align === 'center' && 'torc-section-head--center', className].filter(Boolean).join(' '),
    style: style
  }, rest), kicker && /*#__PURE__*/React.createElement(__ds_scope.Kicker, {
    dash: align !== 'center'
  }, kicker), /*#__PURE__*/React.createElement(Tag, {
    className: "torc-section-head__title"
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    className: "torc-section-head__sub"
  }, sub), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)'
    }
  }, action));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/SpecTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SpecTable({
  rows = [],
  tight = false,
  style,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['torc-spec', tight && 'torc-spec--tight', className].filter(Boolean).join(' '),
    style: style
  }, rest), rows.map(r => {
    const [key, value, note] = Array.isArray(r) ? r : [r.key, r.value, r.note];
    return /*#__PURE__*/React.createElement("div", {
      className: "torc-spec__row",
      key: key
    }, /*#__PURE__*/React.createElement("span", {
      className: "torc-spec__key"
    }, key), /*#__PURE__*/React.createElement("span", {
      className: "torc-spec__val"
    }, value, note && /*#__PURE__*/React.createElement("em", null, " \xB7 ", note)));
  }));
}
Object.assign(__ds_scope, { SpecTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SpecTable.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatBlock({
  value,
  label,
  accentPart,
  style,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: 'torc-stat ' + (className || ''),
    style: style
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "torc-stat__value"
  }, value, accentPart && /*#__PURE__*/React.createElement("em", null, accentPart)), /*#__PURE__*/React.createElement("span", {
    className: "torc-stat__label"
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  variant = 'default',
  pad = 'md',
  interactive = false,
  floating = false,
  href,
  as = 'div',
  style,
  className,
  ...rest
}) {
  const cls = ['torc-card', variant !== 'default' && 'torc-card--' + variant, pad !== 'md' && 'torc-card--pad-' + pad, (interactive || href) && 'torc-card--interactive', floating && 'torc-card--floating', className].filter(Boolean).join(' ');
  const Tag = href ? 'a' : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    href: href,
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Divider({
  variant = 'default',
  orientation = 'horizontal',
  style,
  className,
  ...rest
}) {
  const cls = ['torc-divider', variant !== 'default' && 'torc-divider--' + variant, orientation === 'vertical' && 'torc-divider--vertical', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("hr", _extends({
    className: cls,
    style: style
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  selected = false,
  onClick,
  count,
  style,
  className,
  ...rest
}) {
  const cls = ['torc-tag', onClick && 'torc-tag--interactive', selected && 'torc-tag--selected', className].filter(Boolean).join(' ');
  const Tag_ = onClick ? 'button' : 'span';
  return /*#__PURE__*/React.createElement(Tag_, _extends({
    className: cls,
    onClick: onClick,
    type: onClick ? 'button' : undefined,
    style: style
  }, rest), children, count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, count));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatusDot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatusDot({
  state = 'idle',
  children,
  style,
  className,
  ...rest
}) {
  const mod = {
    live: 'live',
    warn: 'warn',
    danger: 'danger',
    info: 'info'
  }[state];
  return /*#__PURE__*/React.createElement("span", _extends({
    className: 'torc-status ' + (className || ''),
    style: style
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: 'torc-status__dot' + (mod ? ' torc-status__dot--' + mod : '')
  }), children);
}
Object.assign(__ds_scope, { StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatusDot.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style,
  className,
  ...rest
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = checked != null ? checked : internal;
  return /*#__PURE__*/React.createElement("label", {
    className: ['torc-switch', disabled && 'torc-switch--disabled', className].filter(Boolean).join(' '),
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (checked == null) setInternal(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: 'torc-switch__track' + (on ? ' torc-switch__track--on' : '')
  }, /*#__PURE__*/React.createElement("span", {
    className: "torc-switch__knob"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  invalid = false,
  mono = false,
  rows = 4,
  style,
  className,
  ...rest
}) {
  const cls = ['torc-input', 'torc-input--textarea', mono && 'torc-input--mono', invalid && 'torc-input--invalid', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: cls,
    rows: rows,
    "aria-invalid": invalid || undefined,
    style: style
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/icon/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Lucide icons (v0.544.0), 24x24 / 2px stroke — inlined so <Icon> works offline and inherits currentColor.
const ICONS = {
  "cpu": "<path d=\"M12 20v2\" />  <path d=\"M12 2v2\" />  <path d=\"M17 20v2\" />  <path d=\"M17 2v2\" />  <path d=\"M2 12h2\" />  <path d=\"M2 17h2\" />  <path d=\"M2 7h2\" />  <path d=\"M20 12h2\" />  <path d=\"M20 17h2\" />  <path d=\"M20 7h2\" />  <path d=\"M7 20v2\" />  <path d=\"M7 2v2\" />  <rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" />  <rect x=\"8\" y=\"8\" width=\"8\" height=\"8\" rx=\"1\" />",
  "bot": "<path d=\"M12 8V4H8\" />  <rect width=\"16\" height=\"12\" x=\"4\" y=\"8\" rx=\"2\" />  <path d=\"M2 14h2\" />  <path d=\"M20 14h2\" />  <path d=\"M15 13v2\" />  <path d=\"M9 13v2\" />",
  "circuit-board": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" />  <path d=\"M11 9h4a2 2 0 0 0 2-2V3\" />  <circle cx=\"9\" cy=\"9\" r=\"2\" />  <path d=\"M7 21v-4a2 2 0 0 1 2-2h4\" />  <circle cx=\"15\" cy=\"15\" r=\"2\" />",
  "code": "<path d=\"m16 18 6-6-6-6\" />  <path d=\"m8 6-6 6 6 6\" />",
  "code-xml": "<path d=\"m18 16 4-4-4-4\" />  <path d=\"m6 8-4 4 4 4\" />  <path d=\"m14.5 4-5 16\" />",
  "terminal": "<path d=\"M12 19h8\" />  <path d=\"m4 17 6-6-6-6\" />",
  "git-branch": "<line x1=\"6\" x2=\"6\" y1=\"3\" y2=\"15\" />  <circle cx=\"18\" cy=\"6\" r=\"3\" />  <circle cx=\"6\" cy=\"18\" r=\"3\" />  <path d=\"M18 9a9 9 0 0 1-9 9\" />",
  "github": "<path d=\"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4\" />  <path d=\"M9 18c-4.51 2-5-2-7-2\" />",
  "git-pull-request": "<circle cx=\"18\" cy=\"18\" r=\"3\" />  <circle cx=\"6\" cy=\"6\" r=\"3\" />  <path d=\"M13 6h3a2 2 0 0 1 2 2v7\" />  <line x1=\"6\" x2=\"6\" y1=\"9\" y2=\"21\" />",
  "wrench": "<path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z\" />",
  "cog": "<path d=\"M11 10.27 7 3.34\" />  <path d=\"m11 13.73-4 6.93\" />  <path d=\"M12 22v-2\" />  <path d=\"M12 2v2\" />  <path d=\"M14 12h8\" />  <path d=\"m17 20.66-1-1.73\" />  <path d=\"m17 3.34-1 1.73\" />  <path d=\"M2 12h2\" />  <path d=\"m20.66 17-1.73-1\" />  <path d=\"m20.66 7-1.73 1\" />  <path d=\"m3.34 17 1.73-1\" />  <path d=\"m3.34 7 1.73 1\" />  <circle cx=\"12\" cy=\"12\" r=\"2\" />  <circle cx=\"12\" cy=\"12\" r=\"8\" />",
  "radio": "<path d=\"M16.247 7.761a6 6 0 0 1 0 8.478\" />  <path d=\"M19.075 4.933a10 10 0 0 1 0 14.134\" />  <path d=\"M4.925 19.067a10 10 0 0 1 0-14.134\" />  <path d=\"M7.753 16.239a6 6 0 0 1 0-8.478\" />  <circle cx=\"12\" cy=\"12\" r=\"2\" />",
  "wifi": "<path d=\"M12 20h.01\" />  <path d=\"M2 8.82a15 15 0 0 1 20 0\" />  <path d=\"M5 12.859a10 10 0 0 1 14 0\" />  <path d=\"M8.5 16.429a5 5 0 0 1 7 0\" />",
  "waypoints": "<circle cx=\"12\" cy=\"4.5\" r=\"2.5\" />  <path d=\"m10.2 6.3-3.9 3.9\" />  <circle cx=\"4.5\" cy=\"12\" r=\"2.5\" />  <path d=\"M7 12h10\" />  <circle cx=\"19.5\" cy=\"12\" r=\"2.5\" />  <path d=\"m13.8 17.7 3.9-3.9\" />  <circle cx=\"12\" cy=\"19.5\" r=\"2.5\" />",
  "network": "<rect x=\"16\" y=\"16\" width=\"6\" height=\"6\" rx=\"1\" />  <rect x=\"2\" y=\"16\" width=\"6\" height=\"6\" rx=\"1\" />  <rect x=\"9\" y=\"2\" width=\"6\" height=\"6\" rx=\"1\" />  <path d=\"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3\" />  <path d=\"M12 12V8\" />",
  "share-2": "<circle cx=\"18\" cy=\"5\" r=\"3\" />  <circle cx=\"6\" cy=\"12\" r=\"3\" />  <circle cx=\"18\" cy=\"19\" r=\"3\" />  <line x1=\"8.59\" x2=\"15.42\" y1=\"13.51\" y2=\"17.49\" />  <line x1=\"15.41\" x2=\"8.59\" y1=\"6.51\" y2=\"10.49\" />",
  "users": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\" />  <path d=\"M16 3.128a4 4 0 0 1 0 7.744\" />  <path d=\"M22 21v-2a4 4 0 0 0-3-3.87\" />  <circle cx=\"9\" cy=\"7\" r=\"4\" />",
  "user": "<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\" />  <circle cx=\"12\" cy=\"7\" r=\"4\" />",
  "calendar-days": "<path d=\"M8 2v4\" />  <path d=\"M16 2v4\" />  <rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\" />  <path d=\"M3 10h18\" />  <path d=\"M8 14h.01\" />  <path d=\"M12 14h.01\" />  <path d=\"M16 14h.01\" />  <path d=\"M8 18h.01\" />  <path d=\"M12 18h.01\" />  <path d=\"M16 18h.01\" />",
  "map-pin": "<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\" />  <circle cx=\"12\" cy=\"10\" r=\"3\" />",
  "clock": "<path d=\"M12 6v6l4 2\" />  <circle cx=\"12\" cy=\"12\" r=\"10\" />",
  "arrow-right": "<path d=\"M5 12h14\" />  <path d=\"m12 5 7 7-7 7\" />",
  "arrow-up-right": "<path d=\"M7 7h10v10\" />  <path d=\"M7 17 17 7\" />",
  "arrow-left": "<path d=\"m12 19-7-7 7-7\" />  <path d=\"M19 12H5\" />",
  "chevron-right": "<path d=\"m9 18 6-6-6-6\" />",
  "chevron-down": "<path d=\"m6 9 6 6 6-6\" />",
  "chevron-left": "<path d=\"m15 18-6-6 6-6\" />",
  "chevron-up": "<path d=\"m18 15-6-6-6 6\" />",
  "external-link": "<path d=\"M15 3h6v6\" />  <path d=\"M10 14 21 3\" />  <path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\" />",
  "download": "<path d=\"M12 15V3\" />  <path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\" />  <path d=\"m7 10 5 5 5-5\" />",
  "upload": "<path d=\"M12 3v12\" />  <path d=\"m17 8-5-5-5 5\" />  <path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\" />",
  "search": "<path d=\"m21 21-4.34-4.34\" />  <circle cx=\"11\" cy=\"11\" r=\"8\" />",
  "menu": "<path d=\"M4 5h16\" />  <path d=\"M4 12h16\" />  <path d=\"M4 19h16\" />",
  "x": "<path d=\"M18 6 6 18\" />  <path d=\"m6 6 12 12\" />",
  "check": "<path d=\"M20 6 9 17l-5-5\" />",
  "circle-check": "<circle cx=\"12\" cy=\"12\" r=\"10\" />  <path d=\"m9 12 2 2 4-4\" />",
  "triangle-alert": "<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\" />  <path d=\"M12 9v4\" />  <path d=\"M12 17h.01\" />",
  "info": "<circle cx=\"12\" cy=\"12\" r=\"10\" />  <path d=\"M12 16v-4\" />  <path d=\"M12 8h.01\" />",
  "star": "<path d=\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z\" />",
  "heart": "<path d=\"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5\" />",
  "play": "<path d=\"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z\" />",
  "pause": "<rect x=\"14\" y=\"3\" width=\"5\" height=\"18\" rx=\"1\" />  <rect x=\"5\" y=\"3\" width=\"5\" height=\"18\" rx=\"1\" />",
  "plus": "<path d=\"M5 12h14\" />  <path d=\"M12 5v14\" />",
  "minus": "<path d=\"M5 12h14\" />",
  "copy": "<rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\" />  <path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\" />",
  "link": "<path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\" />  <path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\" />",
  "mail": "<path d=\"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7\" />  <rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\" />",
  "book-open": "<path d=\"M12 7v14\" />  <path d=\"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z\" />",
  "file-text": "<path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\" />  <path d=\"M14 2v4a2 2 0 0 0 2 2h4\" />  <path d=\"M10 9H8\" />  <path d=\"M16 13H8\" />  <path d=\"M16 17H8\" />",
  "layers": "<path d=\"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z\" />  <path d=\"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12\" />  <path d=\"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17\" />",
  "box": "<path d=\"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z\" />  <path d=\"m3.3 7 8.7 5 8.7-5\" />  <path d=\"M12 22V12\" />",
  "zap": "<path d=\"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z\" />",
  "activity": "<path d=\"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2\" />",
  "gauge": "<path d=\"m12 14 4-4\" />  <path d=\"M3.34 19a10 10 0 1 1 17.32 0\" />",
  "rotate-cw": "<path d=\"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8\" />  <path d=\"M21 3v5h-5\" />",
  "sliders-horizontal": "<path d=\"M10 5H3\" />  <path d=\"M12 19H3\" />  <path d=\"M14 3v4\" />  <path d=\"M16 17v4\" />  <path d=\"M21 12h-9\" />  <path d=\"M21 19h-5\" />  <path d=\"M21 5h-7\" />  <path d=\"M8 10v4\" />  <path d=\"M8 12H3\" />",
  "settings-2": "<path d=\"M14 17H5\" />  <path d=\"M19 7h-9\" />  <circle cx=\"17\" cy=\"17\" r=\"3\" />  <circle cx=\"7\" cy=\"7\" r=\"3\" />",
  "lightbulb": "<path d=\"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5\" />  <path d=\"M9 18h6\" />  <path d=\"M10 22h4\" />",
  "hammer": "<path d=\"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9\" />  <path d=\"m18 15 4-4\" />  <path d=\"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5\" />",
  "flask-conical": "<path d=\"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2\" />  <path d=\"M6.453 15h11.094\" />  <path d=\"M8.5 2h7\" />",
  "scan": "<path d=\"M3 7V5a2 2 0 0 1 2-2h2\" />  <path d=\"M17 3h2a2 2 0 0 1 2 2v2\" />  <path d=\"M21 17v2a2 2 0 0 1-2 2h-2\" />  <path d=\"M7 21H5a2 2 0 0 1-2-2v-2\" />",
  "target": "<circle cx=\"12\" cy=\"12\" r=\"10\" />  <circle cx=\"12\" cy=\"12\" r=\"6\" />  <circle cx=\"12\" cy=\"12\" r=\"2\" />",
  "eye": "<path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\" />  <circle cx=\"12\" cy=\"12\" r=\"3\" />",
  "lock": "<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\" />  <path d=\"M7 11V7a5 5 0 0 1 10 0v4\" />",
  "send": "<path d=\"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z\" />  <path d=\"m21.854 2.147-10.94 10.939\" />",
  "message-square": "<path d=\"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z\" />",
  "hash": "<line x1=\"4\" x2=\"20\" y1=\"9\" y2=\"9\" />  <line x1=\"4\" x2=\"20\" y1=\"15\" y2=\"15\" />  <line x1=\"10\" x2=\"8\" y1=\"3\" y2=\"21\" />  <line x1=\"16\" x2=\"14\" y1=\"3\" y2=\"21\" />",
  "folder-git-2": "<path d=\"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5\" />  <circle cx=\"13\" cy=\"12\" r=\"2\" />  <path d=\"M18 19c-2.8 0-5-2.2-5-5v8\" />  <circle cx=\"20\" cy=\"19\" r=\"2\" />",
  "package": "<path d=\"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z\" />  <path d=\"M12 22V12\" />  <polyline points=\"3.29 7 12 12 20.71 7\" />  <path d=\"m7.5 4.27 9 5.15\" />",
  "satellite-dish": "<path d=\"M4 10a7.31 7.31 0 0 0 10 10Z\" />  <path d=\"m9 15 3-3\" />  <path d=\"M17 13a6 6 0 0 0-6-6\" />  <path d=\"M21 13A10 10 0 0 0 11 3\" />",
  "cable": "<path d=\"M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z\" />  <path d=\"M17 21v-2\" />  <path d=\"M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10\" />  <path d=\"M21 21v-2\" />  <path d=\"M3 5V3\" />  <path d=\"M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z\" />  <path d=\"M7 5V3\" />",
  "plug": "<path d=\"M12 22v-5\" />  <path d=\"M9 8V2\" />  <path d=\"M15 8V2\" />  <path d=\"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z\" />",
  "battery-charging": "<path d=\"m11 7-3 5h4l-3 5\" />  <path d=\"M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935\" />  <path d=\"M22 14v-4\" />  <path d=\"M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936\" />",
  "joystick": "<path d=\"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z\" />  <path d=\"M6 15v-2\" />  <path d=\"M12 15V9\" />  <circle cx=\"12\" cy=\"6\" r=\"3\" />",
  "camera": "<path d=\"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z\" />  <circle cx=\"12\" cy=\"13\" r=\"3\" />",
  "sun": "<circle cx=\"12\" cy=\"12\" r=\"4\" />  <path d=\"M12 2v2\" />  <path d=\"M12 20v2\" />  <path d=\"m4.93 4.93 1.41 1.41\" />  <path d=\"m17.66 17.66 1.41 1.41\" />  <path d=\"M2 12h2\" />  <path d=\"M20 12h2\" />  <path d=\"m6.34 17.66-1.41 1.41\" />  <path d=\"m19.07 4.93-1.41 1.41\" />",
  "moon": "<path d=\"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401\" />",
  "loader-circle": "<path d=\"M21 12a9 9 0 1 1-6.219-8.56\" />",
  "circle-dot": "<circle cx=\"12\" cy=\"12\" r=\"10\" />  <circle cx=\"12\" cy=\"12\" r=\"1\" />",
  "move-3d": "<path d=\"M5 3v16h16\" />  <path d=\"m5 19 6-6\" />  <path d=\"m2 6 3-3 3 3\" />  <path d=\"m18 16 3 3-3 3\" />",
  "ruler": "<path d=\"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z\" />  <path d=\"m14.5 12.5 2-2\" />  <path d=\"m11.5 9.5 2-2\" />  <path d=\"m8.5 6.5 2-2\" />  <path d=\"m17.5 15.5 2-2\" />",
  "microchip": "<path d=\"M18 12h2\" />  <path d=\"M18 16h2\" />  <path d=\"M18 20h2\" />  <path d=\"M18 4h2\" />  <path d=\"M18 8h2\" />  <path d=\"M4 12h2\" />  <path d=\"M4 16h2\" />  <path d=\"M4 20h2\" />  <path d=\"M4 4h2\" />  <path d=\"M4 8h2\" />  <path d=\"M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z\" />"
};
const ICON_NAMES = Object.keys(ICONS);
function Icon({
  name = 'circle-dot',
  size = 20,
  strokeWidth = 2,
  color = 'currentColor',
  title,
  style,
  className,
  ...rest
}) {
  const d = ICONS[name];
  if (!d) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: title ? 'img' : 'presentation',
    "aria-hidden": title ? undefined : true,
    "aria-label": title,
    className: className,
    style: {
      display: 'block',
      flex: 'none',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: (title ? '<title>' + title + '</title>' : '') + d
    }
  }, rest));
}
Object.assign(__ds_scope, { ICONS, ICON_NAMES, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icon/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  children,
  tone = 'neutral',
  icon,
  style,
  className,
  ...rest
}) {
  const cls = ['torc-badge', tone !== 'neutral' && 'torc-badge--' + tone, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: style
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12,
    strokeWidth: 2.25
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProjectCard({
  title,
  summary,
  state = 'live',
  stateLabel,
  tags = [],
  stack,
  contributors,
  updated,
  href,
  icon = 'circuit-board',
  style,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    href: href,
    interactive: !!href,
    className: className,
    style: {
      minHeight: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "torc-project__head"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-md)',
      background: 'var(--accent-quiet)',
      color: 'var(--text-accent)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  })), stateLabel && /*#__PURE__*/React.createElement(__ds_scope.StatusDot, {
    state: state
  }, stateLabel)), /*#__PURE__*/React.createElement("h3", {
    className: "torc-project__title",
    style: {
      marginTop: 'var(--space-4)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "torc-project__body"
  }, summary), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: t
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "torc-project__meta"
  }, stack && /*#__PURE__*/React.createElement("span", {
    className: "torc-project__meta-item"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "cpu",
    size: 13
  }), stack), contributors != null && /*#__PURE__*/React.createElement("span", {
    className: "torc-project__meta-item"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "users",
    size: 13
  }), contributors), updated && /*#__PURE__*/React.createElement("span", {
    className: "torc-project__meta-item"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "git-branch",
    size: 13
  }), updated)));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconEnd,
  mono = false,
  block = false,
  disabled = false,
  href,
  type = 'button',
  onClick,
  style,
  className,
  ...rest
}) {
  const cls = ['torc-btn', 'torc-btn--' + variant, size !== 'md' && 'torc-btn--' + size, mono && 'torc-btn--mono', block && 'torc-btn--block', className].filter(Boolean).join(' ');
  const gl = size === 'sm' ? 15 : size === 'lg' ? 20 : 17;
  const body = /*#__PURE__*/React.createElement(React.Fragment, null, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: gl
  }), children, iconEnd && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconEnd,
    size: gl
  }));
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href,
    style: style,
    onClick: onClick
  }, rest), body);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: style
  }, rest), body);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/EventCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EventCard({
  day,
  month,
  title,
  where,
  when,
  kind,
  href,
  ctaLabel = 'Partecipa',
  style,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    pad: "sm",
    className: className,
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "torc-event"
  }, /*#__PURE__*/React.createElement("div", {
    className: "torc-event__date"
  }, /*#__PURE__*/React.createElement("span", {
    className: "torc-event__day"
  }, day), /*#__PURE__*/React.createElement("span", {
    className: "torc-event__month"
  }, month)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      minWidth: 0
    }
  }, kind && /*#__PURE__*/React.createElement("span", {
    className: "torc-kicker"
  }, kind), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-md)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-4)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--ls-mono)',
      color: 'var(--text-muted)'
    }
  }, where && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 13
  }), where), when && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clock",
    size: 13
  }), when))), href && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    href: href
  }, ctaLabel)));
}
Object.assign(__ds_scope, { EventCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/EventCard.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon = 'circle-dot',
  label,
  variant = 'plain',
  size = 'md',
  disabled = false,
  href,
  onClick,
  style,
  className,
  ...rest
}) {
  const cls = ['torc-iconbtn', variant !== 'plain' && 'torc-iconbtn--' + variant, size !== 'md' && 'torc-iconbtn--' + size, className].filter(Boolean).join(' ');
  const gl = size === 'sm' ? 15 : size === 'lg' ? 22 : 18;
  const glyph = /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: gl
  });
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href,
    "aria-label": label,
    title: label,
    style: style,
    onClick: onClick
  }, rest), glyph);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    style: style
  }, rest), glyph);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/content/CodeBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CodeBlock({
  children,
  filename,
  language = 'bash',
  copyable = true,
  style,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: 'torc-code ' + (className || ''),
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "torc-code__bar"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: filename ? 'file-text' : 'terminal',
    size: 13
  }), /*#__PURE__*/React.createElement("span", null, filename || language), copyable && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "copy",
    label: "Copia",
    size: "sm"
  }))), /*#__PURE__*/React.createElement("pre", {
    className: "torc-code__pre"
  }, /*#__PURE__*/React.createElement("code", null, children)));
}
Object.assign(__ds_scope, { CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const GLYPH = {
  neutral: 'info',
  ok: 'circle-check',
  info: 'info',
  warn: 'triangle-alert',
  danger: 'triangle-alert'
};
function Alert({
  tone = 'neutral',
  title,
  children,
  icon,
  style,
  className,
  ...rest
}) {
  const cls = ['torc-alert', tone !== 'neutral' && 'torc-alert--' + tone, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: tone === 'danger' ? 'alert' : 'status',
    style: style
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "torc-alert__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || GLYPH[tone],
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("p", {
    className: "torc-alert__title"
  }, title), children && /*#__PURE__*/React.createElement("div", null, children)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Spinner({
  size = 20,
  label = 'Caricamento',
  style,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "status",
    "aria-label": label,
    className: className,
    style: {
      display: 'inline-flex',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "loader-circle",
    size: size,
    className: "torc-spinner"
  }));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  type = 'checkbox',
  name,
  value,
  style,
  className,
  ...rest
}) {
  const radio = type === 'radio';
  const isOn = checked != null ? checked : undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isOn != null ? isOn : internal;
  return /*#__PURE__*/React.createElement("label", {
    className: ['torc-check', disabled && 'torc-check--disabled', className].filter(Boolean).join(' '),
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    name: name,
    value: value,
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (isOn == null) setInternal(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: ['torc-check__box', radio && 'torc-check__box--radio', on && 'torc-check__box--on'].filter(Boolean).join(' ')
  }, on && (radio ? /*#__PURE__*/React.createElement("span", {
    className: "torc-check__dot"
  }) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13,
    strokeWidth: 3
  }))), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  htmlFor,
  required = false,
  hint,
  error,
  children,
  style,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: 'torc-field ' + (className || ''),
    style: style
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    className: "torc-field__label",
    htmlFor: htmlFor
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "torc-field__req"
  }, " *")), children, error ? /*#__PURE__*/React.createElement("span", {
    className: "torc-field__error"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "triangle-alert",
    size: 13
  }), error) : hint && /*#__PURE__*/React.createElement("span", {
    className: "torc-field__hint"
  }, hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  icon,
  mono = false,
  invalid = false,
  style,
  className,
  ...rest
}) {
  const cls = ['torc-input', mono && 'torc-input--mono', invalid && 'torc-input--invalid', className].filter(Boolean).join(' ');
  const input = /*#__PURE__*/React.createElement("input", _extends({
    className: cls,
    "aria-invalid": invalid || undefined,
    style: style
  }, rest));
  if (!icon) return input;
  return /*#__PURE__*/React.createElement("span", {
    className: "torc-input-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "torc-input-wrap__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  })), input);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  placeholder,
  invalid = false,
  children,
  style,
  className,
  ...rest
}) {
  const cls = ['torc-input', 'torc-select', invalid && 'torc-input--invalid', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", {
    className: "torc-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: cls,
    "aria-invalid": invalid || undefined,
    style: style
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)), children), /*#__PURE__*/React.createElement("span", {
    className: "torc-select-wrap__chev"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteFooter({
  columns = [],
  tagline = 'Trieste Open Robotics Community',
  note,
  meta = [],
  style,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    className: 'torc-footer ' + (className || ''),
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "torc-footer__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "torc-footer__col"
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "lockup",
    height: 22
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--ls-mono)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, tagline), note && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      maxWidth: '34ch',
      margin: 'var(--space-2) 0 0'
    }
  }, note)), columns.map(col => /*#__PURE__*/React.createElement("div", {
    className: "torc-footer__col",
    key: col.title
  }, /*#__PURE__*/React.createElement("span", {
    className: "torc-kicker torc-kicker--muted"
  }, col.title), col.links.map(l => /*#__PURE__*/React.createElement("a", {
    className: "torc-footer__link",
    key: l.label,
    href: l.href
  }, l.label))))), /*#__PURE__*/React.createElement("div", {
    className: "torc-footer__bottom"
  }, meta.map(m => /*#__PURE__*/React.createElement("span", {
    key: m
  }, m))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteHeader({
  links = [],
  active,
  cta,
  github,
  onNavigate,
  style,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    className: 'torc-header ' + (className || ''),
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "torc-header__inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate('/');
      }
    },
    style: {
      display: 'flex',
      alignItems: 'center'
    },
    "aria-label": "TORC \u2014 home"
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "lockup",
    height: 24
  })), /*#__PURE__*/React.createElement("nav", {
    className: "torc-header__nav"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    className: 'torc-navlink' + (active === l.href || l.active ? ' torc-navlink--active' : ''),
    href: l.href,
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate(l.href);
      }
    }
  }, l.label)), github && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "github",
    label: "GitHub",
    href: github
  }), cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "primary",
    mono: true,
    href: cta.href,
    onClick: cta.onClick,
    style: {
      marginLeft: 'var(--space-3)'
    }
  }, cta.label))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  tabs = [],
  value,
  onChange,
  style,
  className,
  ...rest
}) {
  const [internal, setInternal] = React.useState(tabs[0] && (tabs[0].value || tabs[0]));
  const current = value != null ? value : internal;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: 'torc-tabs ' + (className || ''),
    role: "tablist",
    style: style
  }, rest), tabs.map(t => {
    const v = t.value || t;
    const label = t.label || t;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": current === v,
      type: "button",
      className: 'torc-tab' + (current === v ? ' torc-tab--active' : ''),
      onClick: () => {
        if (value == null) setInternal(v);
        onChange && onChange(v);
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/BuildsScreen.jsx
try { (() => {
const {
  Button,
  IconButton,
  Badge,
  Tag,
  Card,
  Divider,
  Kicker,
  Logo,
  Icon,
  Input,
  Select,
  Switch,
  Checkbox,
  Field,
  Alert,
  StatusDot,
  Spinner,
  Tabs,
  SectionHeading,
  StatBlock,
  CodeBlock,
  EventCard
} = window.TORCDesignSystem_49bcd9;
function BuildsScreen() {
  const D = window.TORC_DASH;
  const [only, setOnly] = React.useState(false);
  const rows = D.builds.filter(b => !only || b.state !== 'ok');
  const TONE = {
    ok: 'ok',
    live: 'accent',
    warn: 'warn',
    danger: 'danger'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 260
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Cerca repo o branch"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 180
    }
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "Tutti i repo",
    options: D.builds.map(b => b.repo)
  })), /*#__PURE__*/React.createElement(Switch, {
    label: "Solo problemi",
    checked: only,
    onChange: e => setOnly(e.target.checked)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(StatusDot, {
    state: "live"
  }, "1 in corso"), /*#__PURE__*/React.createElement(StatusDot, {
    state: "danger"
  }, "1 fallita"))), /*#__PURE__*/React.createElement(Card, {
    pad: "sm"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1.4fr 110px 130px 90px 90px',
      gap: 'var(--space-4)',
      padding: 'var(--space-3) var(--space-3)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-3xs)',
      letterSpacing: 'var(--ls-kicker)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "repo"), /*#__PURE__*/React.createElement("span", null, "branch"), /*#__PURE__*/React.createElement("span", null, "stato"), /*#__PURE__*/React.createElement("span", null, "durata"), /*#__PURE__*/React.createElement("span", null, "autore"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "quando")), rows.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: b.sha,
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1.4fr 110px 130px 90px 90px',
      gap: 'var(--space-4)',
      alignItems: 'center',
      padding: 'var(--space-4) var(--space-3)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)',
      fontWeight: 'var(--fw-medium)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "folder-git-2",
    size: 15,
    style: {
      color: 'var(--text-muted)'
    }
  }), b.repo), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-secondary)',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "git-branch",
    size: 14,
    style: {
      color: 'var(--text-muted)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, b.branch), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, b.sha)), /*#__PURE__*/React.createElement("span", null, b.state === 'live' ? /*#__PURE__*/React.createElement(StatusDot, {
    state: "live"
  }, b.label) : /*#__PURE__*/React.createElement(Badge, {
    tone: TONE[b.state]
  }, b.label)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, b.dur), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, b.who), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      textAlign: 'right'
    }
  }, b.when)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "danger",
    title: "presa-mite \xB7 main fallita"
  }, "Il test di cedevolezza non converge dopo il cambio di firmware. Log completo nella build #218."), /*#__PURE__*/React.createElement(Card, {
    style: {
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    dash: true
  }, "Riprodurre in locale"), /*#__PURE__*/React.createElement(CodeBlock, {
    language: "bash"
  }, 'torc build presa-mite --ref 77ac210 --local\ncolcon test --packages-select presa_mite'))));
}
Object.assign(window, {
  BuildsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/BuildsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/DashShell.jsx
try { (() => {
const {
  Button,
  IconButton,
  Badge,
  Tag,
  Card,
  Divider,
  Kicker,
  Logo,
  Icon,
  Input,
  Select,
  Switch,
  Checkbox,
  Field,
  Alert,
  StatusDot,
  Spinner,
  Tabs,
  SectionHeading,
  StatBlock,
  CodeBlock,
  EventCard
} = window.TORCDesignSystem_49bcd9;
const RAIL = [{
  id: 'overview',
  icon: 'gauge',
  label: 'Panoramica'
}, {
  id: 'rigs',
  icon: 'bot',
  label: 'Officina'
}, {
  id: 'builds',
  icon: 'git-branch',
  label: 'Build'
}, {
  id: 'bags',
  icon: 'layers',
  label: 'Archivio'
}, {
  id: 'people',
  icon: 'users',
  label: 'Persone'
}];
function DashShell({
  view,
  go,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: '100vh',
      background: 'var(--bg-page-deep)'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      width: 60,
      flex: 'none',
      borderRight: '1px solid var(--border-subtle)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: 'var(--space-4) 0',
      position: 'sticky',
      top: 0,
      height: '100vh'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('overview');
    },
    style: {
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "icon",
    height: 26
  })), RAIL.map(r => /*#__PURE__*/React.createElement("button", {
    key: r.id,
    type: "button",
    title: r.label,
    "aria-label": r.label,
    onClick: () => go(r.id),
    style: {
      width: 40,
      height: 40,
      display: 'grid',
      placeItems: 'center',
      border: 0,
      cursor: 'pointer',
      borderRadius: 'var(--radius-md)',
      background: view === r.id ? 'var(--accent-quiet)' : 'transparent',
      color: view === r.id ? 'var(--accent)' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.icon,
    size: 19
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "settings-2",
    label: "Impostazioni"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      height: 64,
      padding: '0 var(--space-8)',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--surface-header)',
      backdropFilter: 'blur(14px)',
      position: 'sticky',
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--ls-kicker)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Officina TORC"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 13,
    style: {
      color: 'var(--text-muted)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, (RAIL.find(r => r.id === view) || RAIL[0]).label), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 260,
      marginLeft: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Cerca rig, build, bag"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(StatusDot, {
    state: "live"
  }, "3 rig accesi"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "message-square",
    label: "Messaggi"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 'var(--radius-circle)',
      background: 'var(--accent-quiet)',
      color: 'var(--text-accent)',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)'
    }
  }, "EL"))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      padding: 'var(--space-8)',
      background: 'var(--bg-page)'
    }
  }, children)));
}
function Meter({
  label,
  value,
  unit = '%',
  tone
}) {
  const color = tone === 'danger' ? 'var(--status-danger)' : tone === 'warn' ? 'var(--status-warn)' : 'var(--accent)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--ls-mono)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)'
    }
  }, value, unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-3)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: value + '%',
      height: '100%',
      background: color,
      transition: 'width var(--dur-base) var(--ease-servo)'
    }
  })));
}
function Spark({
  data,
  height = 56
}) {
  const max = Math.max(...data);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 3,
      height
    }
  }, data.map((v, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      height: v / max * 100 + '%',
      background: i === data.length - 1 ? 'var(--accent)' : 'var(--torc-ink-500)',
      borderRadius: 2
    }
  })));
}
Object.assign(window, {
  DashShell,
  DashMeter: Meter,
  DashSpark: Spark,
  DASH_RAIL: RAIL
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/DashShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/OverviewScreen.jsx
try { (() => {
const {
  Button,
  IconButton,
  Badge,
  Tag,
  Card,
  Divider,
  Kicker,
  Logo,
  Icon,
  Input,
  Select,
  Switch,
  Checkbox,
  Field,
  Alert,
  StatusDot,
  Spinner,
  Tabs,
  SectionHeading,
  StatBlock,
  CodeBlock,
  EventCard
} = window.TORCDesignSystem_49bcd9;
function OverviewScreen({
  go
}) {
  const D = window.TORC_DASH;
  const {
    DashMeter: Meter,
    DashSpark: Spark
  } = window;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-4)'
    }
  }, [['3', 'rig accesi', 'bot'], ['6', 'progetti attivi', 'circuit-board'], ['1', 'build fallita', 'triangle-alert'], ['214', 'ore di officina', 'clock']].map(([v, l, ic]) => /*#__PURE__*/React.createElement(Card, {
    key: l,
    pad: "sm",
    style: {
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "torc-kicker torc-kicker--muted"
  }, l), /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-strong)',
      lineHeight: 1
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 'var(--space-6)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    dash: true
  }, "Rig in officina"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconEnd: "arrow-right",
    style: {
      marginLeft: 'auto'
    },
    onClick: () => go('rigs')
  }, "Tutti")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, D.rigs.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    onClick: () => go('rigs'),
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 120px 120px',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: 'var(--space-4) 0',
      borderTop: i ? '1px solid var(--border-subtle)' : 0,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, r.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, r.kind)), /*#__PURE__*/React.createElement(StatusDot, {
    state: r.state
  }, r.stateLabel), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-muted)'
    }
  }, r.owner), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Meter, {
    label: "batt",
    value: r.batt,
    tone: r.batt < 40 ? 'warn' : r.batt === 0 ? 'danger' : undefined
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    dash: true
  }, "Ore di officina \xB7 16 settimane"), /*#__PURE__*/React.createElement(Spark, {
    data: D.telemetry,
    height: 64
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "mar"), /*#__PURE__*/React.createElement("span", null, "lug"))), /*#__PURE__*/React.createElement(Card, {
    style: {
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    dash: true
  }, "Attivit\xE0"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, D.activity.map(([w, t, ic], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      padding: 'var(--space-3) 0',
      borderTop: i ? '1px solid var(--border-subtle)' : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: ic === 'triangle-alert' ? 'var(--status-warn)' : 'var(--text-muted)',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 15
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--lh-normal)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-muted)',
      flex: 'none'
    }
  }, w))))))));
}
Object.assign(window, {
  OverviewScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/OverviewScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/RigsScreen.jsx
try { (() => {
const {
  Button,
  IconButton,
  Badge,
  Tag,
  Card,
  Divider,
  Kicker,
  Logo,
  Icon,
  Input,
  Select,
  Switch,
  Checkbox,
  Field,
  Alert,
  StatusDot,
  Spinner,
  Tabs,
  SectionHeading,
  StatBlock,
  CodeBlock,
  EventCard
} = window.TORCDesignSystem_49bcd9;
function RigsScreen() {
  const D = window.TORC_DASH;
  const {
    DashMeter: Meter,
    DashSpark: Spark
  } = window;
  const [sel, setSel] = React.useState(D.rigs[0].id);
  const [tab, setTab] = React.useState('Telemetria');
  const r = D.rigs.find(x => x.id === sel);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      gap: 'var(--space-6)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: "sm",
    style: {
      gap: 'var(--space-1)'
    }
  }, D.rigs.map(x => /*#__PURE__*/React.createElement("button", {
    key: x.id,
    type: "button",
    onClick: () => setSel(x.id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      padding: 'var(--space-3)',
      border: 0,
      cursor: 'pointer',
      textAlign: 'left',
      borderRadius: 'var(--radius-md)',
      background: sel === x.id ? 'var(--surface-2)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 32,
      height: 32,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--accent-quiet)',
      color: 'var(--text-accent)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bot",
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-medium)',
      color: sel === x.id ? 'var(--text-strong)' : 'var(--text-body)'
    }
  }, x.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-muted)'
    }
  }, x.stateLabel)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: x.state === 'live' ? 'var(--accent)' : x.state === 'warn' ? 'var(--status-warn)' : x.state === 'danger' ? 'var(--status-danger)' : 'var(--text-muted)',
      flex: 'none'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "grid",
    style: {
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0
    }
  }, r.name), /*#__PURE__*/React.createElement(StatusDot, {
    state: r.state
  }, r.stateLabel)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)'
    }
  }, r.kind, " \xB7 progetto ", r.owner, " \xB7 acceso da ", r.up)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: "camera"
  }, "Vista"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    mono: true,
    icon: "terminal"
  }, "ssh"), /*#__PURE__*/React.createElement(Button, {
    variant: r.state === 'live' ? 'danger' : 'primary',
    size: "sm",
    icon: r.state === 'live' ? 'pause' : 'play'
  }, r.state === 'live' ? 'Ferma' : 'Avvia'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Meter, {
    label: "batteria",
    value: r.batt,
    tone: r.batt === 0 ? 'danger' : r.batt < 40 ? 'warn' : undefined
  }), /*#__PURE__*/React.createElement(Meter, {
    label: "cpu",
    value: r.cpu
  }), /*#__PURE__*/React.createElement(Meter, {
    label: "temperatura",
    value: r.temp,
    unit: "\xB0C",
    tone: r.temp > 52 ? 'warn' : undefined
  }))), /*#__PURE__*/React.createElement(Card, {
    style: {
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['Telemetria', 'Sensori', 'Log'],
    value: tab,
    onChange: setTab
  }), tab === 'Telemetria' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "muted"
  }, "Velocit\xE0 \xB7 ultimi 60 s"), /*#__PURE__*/React.createElement(Spark, {
    data: D.telemetry
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "muted"
  }, "Deriva stimata \xB7 ultimi 60 s"), /*#__PURE__*/React.createElement(Spark, {
    data: [...D.telemetry].reverse()
  }))), tab === 'Sensori' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 'var(--space-4)'
    }
  }, [['Lidar 32ch', 'ok', '20 Hz · 0 pacchetti persi', 'satellite-dish'], ['IMU 9DoF', 'ok', '200 Hz · bias stabile', 'activity'], ['Stereo 1440p', 'warn', 'esposizione automatica instabile', 'camera'], ['GNSS', 'danger', 'nessun fix (atteso in porto)', 'map-pin']].map(([n, st, note, ic]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      padding: 'var(--space-4)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-strong)'
    }
  }, n), /*#__PURE__*/React.createElement(Badge, {
    tone: st
  }, st === 'ok' ? 'attivo' : st === 'warn' ? 'instabile' : 'assente')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, note))))), tab === 'Log' && /*#__PURE__*/React.createElement(CodeBlock, {
    language: "ros2 topic echo /harbor/health",
    copyable: false
  }, '[ INFO] [fusion]: covarianza xy 0.031 · drift 0.4 m / 800 m\n[ INFO] [fusion]: filtro riflessioni: 214 punti scartati\n[ WARN] [stereo]: esposizione ricalcolata (3° volta in 60 s)\n[ INFO] [fusion]: posa pubblicata a 20.0 Hz'))));
}
Object.assign(window, {
  RigsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/RigsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/dash-content.js
try { (() => {
window.TORC_DASH = {
  rigs: [{
    id: 'harbor-01',
    name: 'Harbor 01',
    kind: 'Drone di superficie',
    state: 'live',
    stateLabel: 'in acqua',
    batt: 72,
    cpu: 41,
    temp: 48,
    owner: 'Harbor SLAM',
    up: '2h 14m'
  }, {
    id: 'carso-02',
    name: 'Carso 02',
    kind: 'Rover cingolato',
    state: 'live',
    stateLabel: 'in prova',
    batt: 38,
    cpu: 66,
    temp: 55,
    owner: 'Carso Rover',
    up: '48m'
  }, {
    id: 'braccio-01',
    name: 'Braccio 01',
    kind: 'Manipolatore 6 assi',
    state: 'warn',
    stateLabel: 'calibrazione',
    batt: 100,
    cpu: 12,
    temp: 33,
    owner: 'Presa Mite',
    up: '5m'
  }, {
    id: 'banco-lidar',
    name: 'Banco lidar',
    kind: 'Banco di prova',
    state: 'idle',
    stateLabel: 'libero',
    batt: 100,
    cpu: 3,
    temp: 28,
    owner: '—',
    up: '—'
  }, {
    id: 'bora-03',
    name: 'Bora 03',
    kind: 'Stazione meteo',
    state: 'danger',
    stateLabel: 'offline',
    batt: 0,
    cpu: 0,
    temp: 0,
    owner: 'Bora Net',
    up: '—'
  }],
  builds: [{
    repo: 'harbor-slam',
    branch: 'main',
    sha: 'a91f0c3',
    state: 'ok',
    label: 'passata',
    who: 'ele',
    when: '12m',
    dur: '4m 12s'
  }, {
    repo: 'carso-rover',
    branch: 'feat/sospensioni',
    sha: '3d77b1e',
    state: 'live',
    label: 'in corso',
    who: 'marco',
    when: 'ora',
    dur: '1m 40s'
  }, {
    repo: 'presa-mite',
    branch: 'main',
    sha: '77ac210',
    state: 'danger',
    label: 'fallita',
    who: 'giulia',
    when: '1h',
    dur: '2m 03s'
  }, {
    repo: 'ros-lab-trieste',
    branch: 'main',
    sha: 'b0c4d9a',
    state: 'ok',
    label: 'passata',
    who: 'ele',
    when: '3h',
    dur: '6m 51s'
  }, {
    repo: 'bora-net',
    branch: 'fix/lora-timeout',
    sha: '5e1aa88',
    state: 'warn',
    label: 'instabile',
    who: 'sara',
    when: '6h',
    dur: '3m 22s'
  }, {
    repo: 'archivio-bag',
    branch: 'main',
    sha: 'c72f04d',
    state: 'ok',
    label: 'passata',
    who: 'marco',
    when: '1g',
    dur: '9m 07s'
  }],
  activity: [['3m', 'Harbor 01 ha chiuso la sessione con drift 0.4 m su 800 m', 'waypoints'], ['22m', 'ele ha unito #142 · filtro riflessioni banchine', 'git-pull-request'], ['1h', 'Nuova bag caricata: porto_vecchio_2026_07_26.mcap (2.1 GB)', 'layers'], ['3h', 'Braccio 01 prenotato da giulia per giovedì 18:00', 'calendar-days'], ['5h', 'Bora 03 non risponde da 5 ore', 'triangle-alert']],
  telemetry: [22, 34, 28, 41, 38, 52, 47, 61, 55, 68, 72, 64, 70, 66, 74, 71]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/dash-content.js", error: String((e && e.message) || e) }); }

// ui_kits/docs/DocsArticle.jsx
try { (() => {
const {
  Button,
  IconButton,
  Badge,
  Tag,
  Card,
  Divider,
  Kicker,
  Logo,
  Icon,
  Input,
  Select,
  Switch,
  Checkbox,
  Field,
  Alert,
  StatusDot,
  Spinner,
  Tabs,
  SiteHeader,
  SiteFooter,
  SectionHeading,
  ProjectCard,
  EventCard,
  StatBlock,
  PrincipleItem,
  CodeBlock,
  Quote
} = window.TORCDesignSystem_49bcd9;
const H2 = ({
  children
}) => /*#__PURE__*/React.createElement("h2", {
  style: {
    fontSize: 'var(--text-2xl)',
    margin: 'var(--space-12) 0 var(--space-4)'
  }
}, children);
const H3 = ({
  children
}) => /*#__PURE__*/React.createElement("h3", {
  style: {
    fontSize: 'var(--text-lg)',
    margin: 'var(--space-8) 0 var(--space-3)'
  }
}, children);
const P = ({
  children
}) => /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 'var(--text-md)',
    lineHeight: 'var(--lh-relaxed)',
    color: 'var(--text-body)',
    maxWidth: 'var(--measure)',
    margin: '0 0 var(--space-4)'
  }
}, children);
const UL = ({
  items
}) => /*#__PURE__*/React.createElement("ul", {
  style: {
    margin: '0 0 var(--space-4)',
    paddingLeft: 0,
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-2)',
    maxWidth: 'var(--measure)'
  }
}, items.map(i => /*#__PURE__*/React.createElement("li", {
  key: typeof i === 'string' ? i : i[0],
  style: {
    display: 'flex',
    gap: 'var(--space-3)',
    fontSize: 'var(--text-md)',
    lineHeight: 'var(--lh-relaxed)',
    color: 'var(--text-body)'
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: 'var(--text-accent)',
    marginTop: 6,
    flex: 'none'
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "chevron-right",
  size: 14
})), /*#__PURE__*/React.createElement("span", null, typeof i === 'string' ? i : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", {
  style: {
    fontWeight: 'var(--fw-semibold)',
    color: 'var(--text-strong)'
  }
}, i[0]), " \u2014 ", i[1])))));
const KV = ({
  rows
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
    margin: '0 0 var(--space-4)'
  }
}, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
  key: r[0],
  style: {
    display: 'grid',
    gridTemplateColumns: '220px 120px 1fr',
    gap: 'var(--space-4)',
    padding: 'var(--space-3) var(--space-4)',
    borderTop: i ? '1px solid var(--border-subtle)' : 0,
    background: i % 2 ? 'transparent' : 'var(--surface-glass)'
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--text-xs)',
    color: 'var(--text-accent)'
  }
}, r[0]), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--text-xs)',
    color: 'var(--text-muted)'
  }
}, r[1]), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 'var(--text-sm)',
    color: 'var(--text-secondary)'
  }
}, r[2]))));
Object.assign(window, {
  DocsH2: H2,
  DocsH3: H3,
  DocsP: P,
  DocsUL: UL,
  DocsKV: KV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/docs/DocsArticle.jsx", error: String((e && e.message) || e) }); }

// ui_kits/docs/DocsPages.jsx
try { (() => {
const {
  Button,
  IconButton,
  Badge,
  Tag,
  Card,
  Divider,
  Kicker,
  Logo,
  Icon,
  Input,
  Select,
  Switch,
  Checkbox,
  Field,
  Alert,
  StatusDot,
  Spinner,
  Tabs,
  SiteHeader,
  SiteFooter,
  SectionHeading,
  ProjectCard,
  EventCard,
  StatBlock,
  PrincipleItem,
  CodeBlock,
  Quote
} = window.TORCDesignSystem_49bcd9;
function IntroPage() {
  const {
    DocsH2: H2,
    DocsP: P,
    DocsUL: UL
  } = window;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Kicker, {
    dash: true
  }, "Iniziare"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-4xl)',
      margin: 'var(--space-4) 0 var(--space-5)'
    }
  }, "Introduzione"), /*#__PURE__*/React.createElement(P, null, "Questa documentazione raccoglie tutto ci\xF2 che serve per far girare i progetti TORC sulla tua macchina, contribuire codice e riusare gli strumenti che costruiamo. \xC8 scritta da chi li usa ogni giorno, quindi assume che tu voglia arrivare a un sistema che funziona, non a una panoramica."), /*#__PURE__*/React.createElement(Alert, {
    tone: "info",
    title: "Serve una base di ROS 2"
  }, "Se non hai mai lanciato un nodo, parti da ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Il primo nodo"), ": dieci minuti, un terminale, nessun hardware."), /*#__PURE__*/React.createElement(H2, null, "Cosa trovi qui"), /*#__PURE__*/React.createElement(UL, {
    items: [['Guide', 'procedure verificate, con i comandi esatti che usiamo noi'], ['Riferimento', 'nodi, topic e parametri di ogni progetto attivo'], ['Community', 'come si apre una PR e che stile di codice ci aspettiamo']]
  }), /*#__PURE__*/React.createElement(H2, null, "Principi della documentazione"), /*#__PURE__*/React.createElement(P, null, "Documentiamo ci\xF2 che gira. Se una procedura non \xE8 stata eseguita da almeno due persone su due macchine diverse, resta in bozza. Ogni pagina dice esplicitamente su quale versione \xE8 stata provata."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "ros 2 jazzy"), /*#__PURE__*/React.createElement(Badge, null, "ubuntu 24.04"), /*#__PURE__*/React.createElement(Badge, null, "python 3.12"), /*#__PURE__*/React.createElement(Badge, {
    tone: "ok",
    icon: "circle-check"
  }, "verificata")));
}
function InstallPage() {
  const {
    DocsH2: H2,
    DocsH3: H3,
    DocsP: P,
    DocsUL: UL
  } = window;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Kicker, {
    dash: true
  }, "Iniziare"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-4xl)',
      margin: 'var(--space-4) 0 var(--space-5)'
    }
  }, "Installazione"), /*#__PURE__*/React.createElement(P, null, "Il workspace di riferimento \xE8 ", /*#__PURE__*/React.createElement("code", {
    style: {
      color: 'var(--text-accent)'
    }
  }, "torc_ws"), ". Contiene i pacchetti dei progetti attivi come submodule, cos\xEC una sola build ti d\xE0 tutto."), /*#__PURE__*/React.createElement(H2, null, "1 \xB7 Dipendenze di sistema"), /*#__PURE__*/React.createElement(CodeBlock, {
    language: "bash"
  }, 'sudo apt update && sudo apt install -y \\\n  ros-jazzy-desktop python3-colcon-common-extensions \\\n  ros-jazzy-rosbag2-storage-mcap'), /*#__PURE__*/React.createElement(H2, null, "2 \xB7 Clonare il workspace"), /*#__PURE__*/React.createElement(CodeBlock, {
    language: "bash"
  }, 'git clone --recurse-submodules https://github.com/torc-trieste/torc_ws\ncd torc_ws\nrosdep install --from-paths src --ignore-src -y'), /*#__PURE__*/React.createElement(H2, null, "3 \xB7 Build"), /*#__PURE__*/React.createElement(CodeBlock, {
    language: "bash"
  }, 'colcon build --symlink-install\nsource install/setup.bash'), /*#__PURE__*/React.createElement(Alert, {
    tone: "warn",
    title: "Build lunga la prima volta"
  }, "Su un portatile con 8 core la prima build richiede circa 6 minuti. Usa ", /*#__PURE__*/React.createElement("code", null, "--packages-select"), " se ti serve un solo pacchetto."), /*#__PURE__*/React.createElement(H3, null, "Verifica"), /*#__PURE__*/React.createElement(P, null, "Se questi due comandi rispondono, sei a posto:"), /*#__PURE__*/React.createElement(CodeBlock, {
    language: "bash"
  }, 'ros2 pkg list | grep harbor\nros2 launch harbor_slam bringup.launch.py use_bag:=true'), /*#__PURE__*/React.createElement(UL, {
    items: ['Nessun errore rosso in console.', 'RViz mostra la nuvola di punti entro 5 secondi.', 'Il topic /odom pubblica a 20 Hz.']
  }));
}
function ApiPage() {
  const {
    DocsH2: H2,
    DocsP: P,
    DocsKV: KV
  } = window;
  const [tab, setTab] = React.useState('Topic');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Kicker, {
    dash: true
  }, "Riferimento"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-4xl)',
      margin: 'var(--space-4) 0 var(--space-5)',
      fontFamily: 'var(--font-mono)',
      letterSpacing: '-0.01em'
    }
  }, "harbor_slam"), /*#__PURE__*/React.createElement(P, null, "Nodo di fusione lidar\u2013IMU\u2013odometria visiva per ambienti portuali. Pubblica una posa filtrata e la mappa locale; consuma le bag registrate in Porto Vecchio senza modifiche."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "ros 2 jazzy"), /*#__PURE__*/React.createElement(Badge, null, "apache-2.0"), /*#__PURE__*/React.createElement(Badge, {
    tone: "info"
  }, "v0.4.1")), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['Topic', 'Parametri', 'Servizi'],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, tab === 'Topic' && /*#__PURE__*/React.createElement(KV, {
    rows: [['/scan', 'sub · 20 Hz', 'sensor_msgs/PointCloud2 dal lidar 32ch'], ['/imu/data', 'sub · 200 Hz', 'sensor_msgs/Imu, già filtrato dal driver'], ['/odom', 'pub · 20 Hz', 'nav_msgs/Odometry, posa filtrata nel frame map'], ['/harbor/map_local', 'pub · 2 Hz', 'nuvola locale accumulata, 40 m di raggio'], ['/harbor/health', 'pub · 1 Hz', 'diagnostica: covarianza, drift stimato, stato fix']]
  }), tab === 'Parametri' && /*#__PURE__*/React.createElement(KV, {
    rows: [['fusion.rate_hz', 'int · 20', 'frequenza del filtro; oltre 30 Hz serve una GPU'], ['lidar.max_range_m', 'float · 40.0', 'oltre questa soglia i punti vengono scartati'], ['harbor.reflection_filter', 'bool · true', 'scarta i ritorni speculari dalle banchine'], ['bag.play_rate', 'float · 1.0', 'usato solo in modalità replay']]
  }), tab === 'Servizi' && /*#__PURE__*/React.createElement(KV, {
    rows: [['/harbor/reset_map', 'std_srvs/Empty', 'azzera la mappa locale senza riavviare il nodo'], ['/harbor/save_map', 'harbor_msgs/SaveMap', 'scrive la mappa corrente su disco in .mcap']]
  })), /*#__PURE__*/React.createElement(H2, null, "Esempio"), /*#__PURE__*/React.createElement(CodeBlock, {
    filename: "bringup.launch.py"
  }, 'Node(\n    package="harbor_slam", executable="fusion_node",\n    parameters=[{"fusion.rate_hz": 20, "harbor.reflection_filter": True}],\n    remappings=[("/scan", "/velodyne_points")],\n)'));
}
Object.assign(window, {
  IntroPage,
  InstallPage,
  ApiPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/docs/DocsPages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/docs/DocsSidebar.jsx
try { (() => {
const {
  Button,
  IconButton,
  Badge,
  Tag,
  Card,
  Divider,
  Kicker,
  Logo,
  Icon,
  Input,
  Select,
  Switch,
  Checkbox,
  Field,
  Alert,
  StatusDot,
  Spinner,
  Tabs,
  SiteHeader,
  SiteFooter,
  SectionHeading,
  ProjectCard,
  EventCard,
  StatBlock,
  PrincipleItem,
  CodeBlock,
  Quote
} = window.TORCDesignSystem_49bcd9;
function DocsSidebar({
  current,
  go
}) {
  const {
    tree
  } = window.TORC_DOCS;
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: 268,
      flex: 'none',
      borderRight: '1px solid var(--border-subtle)',
      padding: 'var(--space-8) var(--space-6)',
      position: 'sticky',
      top: 72,
      height: 'calc(100vh - 72px)',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Cerca nei documenti"
  })), tree.map(group => /*#__PURE__*/React.createElement("div", {
    key: group.section,
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "muted"
  }, group.section)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, group.pages.map(p => /*#__PURE__*/React.createElement("a", {
    key: p.id,
    href: '#' + p.id,
    onClick: e => {
      e.preventDefault();
      go(p.id);
    },
    style: {
      display: 'block',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--text-sm)',
      textDecoration: 'none',
      lineHeight: 1.4,
      color: current === p.id ? 'var(--text-accent)' : 'var(--text-secondary)',
      background: current === p.id ? 'var(--accent-quiet)' : 'transparent',
      borderLeft: current === p.id ? '1.5px solid var(--accent)' : '1.5px solid transparent'
    }
  }, p.label))))));
}
function DocsToc({
  items
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 220,
      flex: 'none',
      padding: 'var(--space-8) 0',
      position: 'sticky',
      top: 72,
      alignSelf: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "muted"
  }, "In questa pagina")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 'var(--text-xs)',
      color: i === 0 ? 'var(--text-accent)' : 'var(--text-muted)',
      textDecoration: 'none'
    }
  }, t))));
}
function DocsCrumbs({
  path
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--ls-mono)',
      color: 'var(--text-muted)',
      marginBottom: 'var(--space-5)'
    }
  }, path.map((p, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: p
  }, i > 0 && /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 12
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: i === path.length - 1 ? 'var(--text-secondary)' : undefined
    }
  }, p))));
}
function DocsPager({
  prev,
  next,
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-16)',
      paddingTop: 'var(--space-6)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, prev ? /*#__PURE__*/React.createElement(Card, {
    pad: "sm",
    interactive: true,
    style: {
      flex: 1,
      gap: 4
    },
    onClick: () => go(prev.id)
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "muted"
  }, "Precedente"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, prev.label)) : /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), next ? /*#__PURE__*/React.createElement(Card, {
    pad: "sm",
    interactive: true,
    style: {
      flex: 1,
      gap: 4,
      textAlign: 'right'
    },
    onClick: () => go(next.id)
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "muted"
  }, "Successivo"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, next.label)) : /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }));
}
Object.assign(window, {
  DocsSidebar,
  DocsToc,
  DocsCrumbs,
  DocsPager
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/docs/DocsSidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/docs/docs-content.js
try { (() => {
window.TORC_DOCS = {
  tree: [{
    section: 'Iniziare',
    pages: [{
      id: 'intro',
      label: 'Introduzione'
    }, {
      id: 'install',
      label: 'Installazione'
    }, {
      id: 'primo-nodo',
      label: 'Il primo nodo'
    }]
  }, {
    section: 'Guide',
    pages: [{
      id: 'calibrazione',
      label: 'Calibrazione camera–lidar'
    }, {
      id: 'bag',
      label: 'Registrare e tagliare le bag'
    }, {
      id: 'sim',
      label: 'Simulazione in Gazebo'
    }]
  }, {
    section: 'Riferimento',
    pages: [{
      id: 'api',
      label: 'harbor_slam · nodi e topic'
    }, {
      id: 'params',
      label: 'Parametri'
    }, {
      id: 'cli',
      label: 'CLI torc'
    }]
  }, {
    section: 'Community',
    pages: [{
      id: 'contribuire',
      label: 'Come contribuire'
    }, {
      id: 'stile',
      label: 'Stile del codice'
    }]
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/docs/docs-content.js", error: String((e && e.message) || e) }); }

// ui_kits/website/EventsScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeading,
  EventCard,
  Card,
  Kicker,
  Button,
  Icon,
  Divider
} = window.TORCDesignSystem_49bcd9;
function EventsScreen({
  go
}) {
  const C = window.TORC_CONTENT;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px var(--page-gutter-lg) var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    as: "h1",
    kicker: "Eventi",
    title: "Ci vediamo davanti a un robot acceso.",
    sub: "Meetup, hackathon e sfide a Trieste. Si entra gratis, si esce con qualcosa che funziona (o con un bug nuovo)."
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 var(--page-gutter-lg) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 320px',
      gap: 'var(--space-12)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    dash: true
  }, "In programma"), C.events.map(e => /*#__PURE__*/React.createElement(EventCard, _extends({
    key: e.title
  }, e, {
    href: "#"
  }))), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: 'var(--space-8) 0 var(--space-4)'
    }
  }), /*#__PURE__*/React.createElement(Kicker, {
    tone: "muted"
  }, "Passati"), [['12', 'giu', 'meetup', 'Lidar e riflessioni: cosa non funziona in porto'], ['30', 'mag', 'sfida', 'Line following, ma con la bora']].map(([day, month, kind, title]) => /*#__PURE__*/React.createElement(EventCard, {
    key: title,
    day: day,
    month: month,
    kind: kind,
    title: title,
    where: "Officina TORC",
    style: {
      opacity: .6
    }
  }))), /*#__PURE__*/React.createElement(Card, {
    variant: "grid",
    pad: "lg",
    style: {
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Vuoi presentare qualcosa?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)'
    }
  }, "Dieci minuti, un robot, un problema che non hai ancora risolto. Le demo imperfette sono le pi\xF9 utili."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "send",
    onClick: () => go('/entra')
  }, "Proponi una demo"), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 13
  }), " Trieste \xB7 Area Science Park \xB7 Porto Vecchio")))));
}
Object.assign(window, {
  EventsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/EventsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const NS = window.TORCDesignSystem_49bcd9;
const {
  Button,
  IconButton,
  Badge,
  Tag,
  Card,
  Divider,
  Kicker,
  Logo,
  Icon,
  StatusDot,
  SectionHeading,
  ProjectCard,
  EventCard,
  StatBlock,
  PrincipleItem,
  Quote
} = NS;

/* SpecTable / ImagePlate live in the design system (components/content/).
   These class-only fallbacks keep the kit rendering if the bundle in the page
   is older than the components — same markup, same CSS, no divergence. */
const SpecTable = NS.SpecTable || function SpecTable({
  rows = [],
  tight,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'torc-spec' + (tight ? ' torc-spec--tight' : ''),
    style: style
  }, rows.map(([k, v, n]) => /*#__PURE__*/React.createElement("div", {
    className: "torc-spec__row",
    key: k
  }, /*#__PURE__*/React.createElement("span", {
    className: "torc-spec__key"
  }, k), /*#__PURE__*/React.createElement("span", {
    className: "torc-spec__val"
  }, v, n && /*#__PURE__*/React.createElement("em", null, " \xB7 ", n)))));
};
const ImagePlate = NS.ImagePlate || function ImagePlate({
  src,
  alt = '',
  ratio = '16 / 9',
  height,
  caption,
  index,
  bleed,
  style
}) {
  return /*#__PURE__*/React.createElement("figure", {
    className: 'torc-plate torc-hud' + (bleed ? ' torc-plate--bleed' : ''),
    style: {
      position: 'relative',
      isolation: 'isolate',
      margin: 0,
      aspectRatio: height ? undefined : ratio,
      height,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    className: "torc-plate__media",
    src: src,
    alt: alt
  }) : /*#__PURE__*/React.createElement("span", {
    className: "torc-plate__empty"
  }, /*#__PURE__*/React.createElement("span", {
    className: "torc-hud-label"
  }, "inserire fotografia", height ? '' : ' · ' + ratio.replace(/\s/g, ''))), index && /*#__PURE__*/React.createElement("span", {
    className: "torc-plate__index"
  }, index), caption && /*#__PURE__*/React.createElement("figcaption", {
    className: "torc-plate__caption"
  }, caption));
};
function Bleed({
  children,
  style,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    className: className,
    style: {
      padding: '0 var(--page-gutter-lg)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max-wide)',
      margin: '0 auto'
    }
  }, children));
}
function SectionRule({
  index,
  label,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "torc-bleed-rule",
    style: {
      marginBottom: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "torc-hud-label"
  }, index), /*#__PURE__*/React.createElement("span", {
    className: "torc-hud-label",
    style: {
      color: 'var(--text-accent)'
    }
  }, label), right && /*#__PURE__*/React.createElement("span", {
    className: "torc-hud-label",
    style: {
      marginLeft: 'auto'
    }
  }, right));
}
function HomeScreen({
  go
}) {
  const C = window.TORC_CONTENT;
  return /*#__PURE__*/React.createElement("main", {
    className: "torc-field",
    "data-field": "survey",
    "data-field-depth": "open"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(ImagePlate, {
    bleed: true,
    height: "74vh",
    index: "FIG. 01",
    caption: "Harbor 01 \xB7 Porto Vecchio \xB7 2026-03-14"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 56,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 'var(--space-16) var(--page-gutter-lg) var(--space-12)',
      background: 'linear-gradient(to top, rgba(8,19,15,.92) 0%, rgba(8,19,15,.35) 45%, transparent 75%)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max-wide)',
      margin: '0 auto',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "torc-hud-label",
    style: {
      color: 'var(--text-accent)'
    }
  }, "Trieste Open Robotics Community"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(48px, 6vw, 96px)',
      lineHeight: .96,
      letterSpacing: 'var(--ls-display)',
      margin: 0,
      maxWidth: '18ch'
    }
  }, "Robotica che funziona. In pubblico."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-2)',
      pointerEvents: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    mono: true,
    iconEnd: "arrow-right",
    onClick: () => go('/entra')
  }, "Entra in TORC"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    mono: true,
    onClick: () => go('/manifesto')
  }, "Manifesto"))))), /*#__PURE__*/React.createElement("div", {
    className: "torc-ticks torc-ticks--major"
  }), /*#__PURE__*/React.createElement(Bleed, {
    style: {
      paddingTop: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement(SectionRule, {
    index: "01 / 06",
    label: "chi siamo",
    right: "associazione \xB7 trieste"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr .9fr',
      gap: 'var(--space-20)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-4xl)',
      lineHeight: 1.04,
      letterSpacing: 'var(--ls-display)',
      margin: 0
    }
  }, "Non un'azienda. Non una scuola. Un gruppo di persone che costruisce sistemi reali."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "A Trieste c'\xE8 chi la robotica la fa davvero: progetta, scrive codice, fa muovere l'hardware. Mancava uno spazio dove farlo insieme, in modo aperto. TORC \xE8 quello spazio."), /*#__PURE__*/React.createElement(SpecTable, {
    tight: true,
    rows: [['forma', 'associazione senza scopo di lucro'], ['licenza', 'Apache-2.0', 'codice · CC BY-SA testi'], ['sede', 'Trieste, Italia', '45.6495 N · 13.7768 E'], ['ingresso', 'aperto', 'nessuna quota']]
  })))), /*#__PURE__*/React.createElement(Bleed, {
    className: "torc-field",
    "data-field": "strata",
    "data-field-depth": "open",
    "data-field-edge": "horizon",
    style: {
      paddingTop: 'var(--section-y)',
      paddingBottom: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, C.stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      padding: 'var(--space-10) var(--space-8) var(--space-10) 0',
      borderLeft: i ? '1px solid var(--border-subtle)' : 0,
      paddingLeft: i ? 'var(--space-8)' : 0
    }
  }, /*#__PURE__*/React.createElement(StatBlock, s))))), /*#__PURE__*/React.createElement(Bleed, {
    style: {
      paddingTop: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement(SectionRule, {
    index: "02 / 06",
    label: "progetti",
    right: "6 attivi"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 'var(--space-8)',
      marginBottom: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-3xl)',
      lineHeight: 1.06,
      letterSpacing: 'var(--ls-display)',
      margin: 0,
      maxWidth: '24ch'
    }
  }, "Poche cose, fatte fino in fondo."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    mono: true,
    iconEnd: "arrow-right",
    style: {
      marginLeft: 'auto'
    },
    onClick: () => go('/progetti')
  }, "Tutti i progetti")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)'
    }
  }, C.projects.slice(0, 3).map(p => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: p.slug
  }, p, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('/progetti/' + p.slug);
    }
  }))))), /*#__PURE__*/React.createElement(Bleed, {
    style: {
      paddingTop: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement(SectionRule, {
    index: "03 / 06",
    label: "hardware",
    right: "fig. 02\u201303"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.35fr .65fr',
      gap: 'var(--space-8)',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(ImagePlate, {
    ratio: "16 / 9",
    index: "FIG. 02",
    caption: "Carso 02 \xB7 banco di prova \xB7 officina TORC"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "torc-hud-label"
  }, "Carso 02 \xB7 rover cingolato"), /*#__PURE__*/React.createElement(SpecTable, {
    rows: [['calcolatore', 'Jetson Orin NX 16 GB'], ['controllo', 'micro-ROS · STM32H7'], ['sensori', 'lidar 32ch · IMU 9DoF'], ['autonomia', '4 h', 'LiFePO4 24 V'], ['massa', '18.4 kg']]
  })))), /*#__PURE__*/React.createElement(Bleed, {
    style: {
      paddingTop: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement(SectionRule, {
    index: "04 / 06",
    label: "principi",
    right: "7 punti"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr .8fr',
      gap: 'var(--space-20)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, C.principles.slice(0, 3).map((p, i) => /*#__PURE__*/React.createElement(PrincipleItem, {
    key: p.title,
    number: i + 1,
    title: p.title
  }, p.body)), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    mono: true,
    iconEnd: "arrow-right",
    style: {
      marginTop: 'var(--space-6)',
      paddingLeft: 0
    },
    onClick: () => go('/manifesto')
  }, "Tutti i sette principi")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(ImagePlate, {
    ratio: "4 / 5",
    index: "FIG. 03",
    caption: "Demo night \xB7 Area Science Park"
  }), /*#__PURE__*/React.createElement(Quote, {
    by: "Manifesto TORC"
  }, "La porta \xE8 aperta, l'asticella \xE8 alta.")))), /*#__PURE__*/React.createElement(Bleed, {
    style: {
      paddingTop: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement(SectionRule, {
    index: "05 / 06",
    label: "incontri",
    right: "trieste \xB7 ingresso libero"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, C.events.map(e => /*#__PURE__*/React.createElement(EventCard, _extends({
    key: e.title
  }, e, {
    href: "#"
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "torc-field",
    "data-field": "scan",
    "data-field-glow": "lit",
    style: {
      marginTop: 'var(--section-y)',
      borderTop: '1px solid var(--border-subtle)',
      padding: 'var(--space-24) var(--page-gutter-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max-wide)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.2fr .8fr',
      gap: 'var(--space-20)',
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "torc-hud-label",
    style: {
      color: 'var(--text-accent)'
    }
  }, "06 / 06 \xB7 iniziamo"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-4xl)',
      lineHeight: 1.02,
      letterSpacing: 'var(--ls-display)',
      margin: 0,
      maxWidth: '22ch'
    }
  }, "Iniziamo a costruire."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      maxWidth: '48ch',
      margin: 0
    }
  }, "Non promettiamo rivoluzioni: promettiamo di costruire, insieme, e di condividere apertamente tutto ci\xF2 che impariamo."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    mono: true,
    iconEnd: "arrow-right",
    onClick: () => go('/entra')
  }, "Candidati"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    mono: true,
    icon: "github"
  }, "GitHub"))), /*#__PURE__*/React.createElement(SpecTable, {
    tight: true,
    rows: [['scrivici', 'ciao@torc.community'], ['codice', 'github.com/torc-trieste'], ['prossimo incontro', '18 set · 18:30']]
  }))), /*#__PURE__*/React.createElement("div", {
    className: "torc-ticks torc-ticks--major",
    style: {
      marginTop: 'var(--space-16)'
    }
  }));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/JoinScreen.jsx
try { (() => {
const {
  SectionHeading,
  Card,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  Button,
  Alert,
  Kicker,
  Divider,
  Icon,
  Quote
} = window.TORCDesignSystem_49bcd9;
function JoinScreen({
  go
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px var(--page-gutter-lg) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1000px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 360px',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    as: "h1",
    kicker: "Entra",
    title: "La porta \xE8 aperta, l\u2019asticella \xE8 alta.",
    sub: "Ci\xF2 che chiediamo non \xE8 un titolo, ma la voglia di mettersi alla prova su problemi difficili. Raccontaci cosa sai fare e cosa vorresti costruire."
  }), /*#__PURE__*/React.createElement(Card, {
    pad: "lg",
    style: {
      marginTop: 'var(--space-10)',
      gap: 'var(--space-5)'
    }
  }, sent && /*#__PURE__*/React.createElement(Alert, {
    tone: "ok",
    title: "Proposta inviata"
  }, "Ti scriviamo entro una settimana. Nel frattempo, il codice \xE8 gi\xE0 tutto l\xEC fuori."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nome",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Come ti chiami"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    required: true,
    hint: "Non la condividiamo con nessuno."
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    icon: "mail",
    placeholder: "nome@dominio.it"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Ti descrivi come"
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "Scegli",
    options: ['Professionista', 'Ricercatore/trice', 'Studente/essa', 'Autodidatta']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Ambito principale"
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "Scegli",
    options: ['Percezione', 'Controllo', 'Manipolazione', 'Elettronica', 'Software / tooling']
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Repository o portfolio",
    hint: "Un link vale pi\xF9 di un curriculum."
  }, /*#__PURE__*/React.createElement(Input, {
    mono: true,
    placeholder: "https://github.com/\u2026"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Cosa vorresti costruire con noi",
    required: true
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 4,
    placeholder: "Un problema che ti accende, un progetto dei nostri su cui vuoi lavorare, un\u2019idea da provare\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Ho letto il manifesto e ci sto.",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Voglio ricevere gli inviti ai meetup e alle sfide."
  })), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconEnd: "send",
    onClick: () => setSent(true)
  }, "Invia la candidatura"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "Nessuna quota, nessun colloquio formale. Si parte da un problema.")))), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "grid",
    pad: "lg",
    style: {
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Come funziona"), [['Ci scrivi', 'send'], ['Beviamo qualcosa al prossimo meetup', 'users'], ['Scegli un progetto e apri la prima PR', 'git-pull-request']].map(([t, ic], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-accent)',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, t)))), /*#__PURE__*/React.createElement(Quote, {
    by: "Manifesto TORC"
  }, "Chiunque condivida questa passione \xE8 benvenuto."), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconEnd: "arrow-right",
    onClick: () => go('/manifesto')
  }, "Rileggi il manifesto")))));
}
Object.assign(window, {
  JoinScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/JoinScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ManifestoScreen.jsx
try { (() => {
const {
  Kicker,
  SectionHeading,
  PrincipleItem,
  Quote,
  Button,
  Card,
  Divider
} = window.TORCDesignSystem_49bcd9;
function ManifestoScreen({
  go
}) {
  const C = window.TORC_CONTENT;
  return /*#__PURE__*/React.createElement("main", {
    "data-theme": "light",
    "data-instrument": "off",
    style: {
      background: 'var(--bg-page)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    className: "torc-grid",
    style: {
      padding: '96px var(--page-gutter-lg) var(--space-16)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    as: "h1",
    kicker: "Manifesto",
    title: "A Trieste c\u2019\xE8 chi la robotica la fa davvero. Mancava un posto dove farla insieme.",
    sub: "Esistono realt\xE0 che fanno divulgazione, didattica, robotica educativa, e il loro ruolo \xE8 fondamentale. Ma mancava uno spazio dove chi sa costruire possa incontrarsi per fare ricerca insieme, in modo aperto, sotto la spinta di un interesse genuino."
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) var(--page-gutter-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '900px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(Quote, {
    by: "TORC"
  }, "TORC nasce per essere quel ponte."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    dash: true
  }, "I nostri principi"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, C.principles.map((p, i) => /*#__PURE__*/React.createElement(PrincipleItem, {
    key: p.title,
    number: i + 1,
    title: p.title
  }, p.body)))), /*#__PURE__*/React.createElement(Card, {
    variant: "grid",
    pad: "lg",
    style: {
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Conclusione"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-lg)',
      color: 'var(--text-body)',
      maxWidth: 'var(--measure)'
    }
  }, "Crediamo che da questo modo di lavorare \u2014 aperto, concreto, guidato dalla passione \u2014 possano nascere le competenze, le collaborazioni e le imprese che renderanno Trieste un punto di riferimento per la robotica."), /*#__PURE__*/React.createElement(Divider, {
    variant: "lit"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, "Iniziamo a costruire."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconEnd: "arrow-right",
    style: {
      marginLeft: 'auto'
    },
    onClick: () => go('/entra')
  }, "Entra in TORC"))))));
}
Object.assign(window, {
  ManifestoScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ManifestoScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProjectDetailScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Kicker,
  Badge,
  Button,
  Card,
  Tabs,
  CodeBlock,
  StatusDot,
  Divider,
  Icon,
  Alert,
  EventCard
} = window.TORCDesignSystem_49bcd9;
function ProjectDetailScreen({
  slug,
  go
}) {
  const C = window.TORC_CONTENT;
  const p = C.projects.find(x => x.slug === slug) || C.projects[0];
  const [tab, setTab] = React.useState('Panoramica');
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "torc-grid",
    style: {
      padding: '72px var(--page-gutter-lg) var(--space-10)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "torc-navlink",
    style: {
      marginBottom: 'var(--space-6)',
      paddingLeft: 0,
      background: 'none',
      border: 0,
      cursor: 'pointer'
    },
    onClick: () => go('/progetti')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 15
  }), " Progetti"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-md)',
      background: 'var(--accent-quiet)',
      color: 'var(--text-accent)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 26
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      flex: 1,
      minWidth: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-4xl)',
      margin: 0
    }
  }, p.title), /*#__PURE__*/React.createElement(StatusDot, {
    state: p.state
  }, p.stateLabel)), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 'var(--text-lg)',
      maxWidth: '62ch',
      margin: 0
    }
  }, p.summary), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t
  }, t)), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "apache-2.0"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "github"
  }, "Vedi il repo"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "mail"
  }, "Contatta il team"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-10) var(--page-gutter-lg) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 320px',
      gap: 'var(--space-12)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['Panoramica', 'Hardware', 'Codice', 'Log'],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, tab === 'Panoramica' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-body)',
      maxWidth: 'var(--measure)',
      margin: 0
    }
  }, "Il problema \xE8 concreto: dentro il porto le riflessioni sulle banchine ingannano il lidar e il GNSS perde il fix fra le gru. Stiamo costruendo una pipeline che fonde lidar, IMU e odometria visiva e che sopravvive a quel rumore, con log pubblici di ogni uscita in acqua."), /*#__PURE__*/React.createElement(Alert, {
    tone: "warn",
    title: "Cerchiamo una mano"
  }, "Serve chi abbia esperienza di calibrazione camera\u2013lidar. Se \xE8 il tuo campo, scrivici."), /*#__PURE__*/React.createElement(CodeBlock, {
    language: "bash"
  }, 'git clone https://github.com/torc-trieste/' + p.slug + '\ncd ' + p.slug + ' && colcon build --symlink-install\nros2 launch ' + p.slug.replace('-', '_') + ' bringup.launch.py')), tab === 'Hardware' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, [['Calcolatore', p.stack, 'cpu'], ['Sensori', 'Lidar 32ch · IMU 9DoF · stereo 1440p', 'satellite-dish'], ['Alimentazione', 'LiFePO4 24V · 4h autonomia', 'battery-charging'], ['Telaio', 'Alluminio + parti stampate PETG', 'box']].map(([k, v, ic]) => /*#__PURE__*/React.createElement(Card, {
    key: k,
    pad: "sm",
    style: {
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      color: 'var(--text-accent)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    className: "torc-kicker"
  }, k)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, v)))), tab === 'Codice' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CodeBlock, {
    filename: "harbor_slam/fusion_node.py"
  }, 'class FusionNode(Node):\n    def __init__(self):\n        super().__init__("fusion")\n        self.sub = self.create_subscription(PointCloud2, "/lidar", self.on_scan, 10)\n\n    def on_scan(self, msg):\n        self.publish(self.filter.step(msg))'), /*#__PURE__*/React.createElement(CodeBlock, {
    language: "bash"
  }, 'ros2 bag play porto_vecchio_2026_03_14.mcap --rate 0.5')), tab === 'Log' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)'
    }
  }, [['3g', 'Fix del drift in uscita dal molo IV', 'git-branch'], ['1s', 'Prima uscita con la nuova calibrazione', 'flask-conical'], ['2s', 'Aggiunto dataset del 14 marzo all’archivio', 'layers'], ['1m', 'Demo al meetup di giugno', 'users']].map(([w, t, ic]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: 'var(--space-4) 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-muted)'
    }
  }, w)))))), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      position: 'sticky',
      top: 96
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: "sm",
    style: {
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "muted"
  }, "Stato"), [['Stack', p.stack], ['Persone', p.contributors + ' contributor'], ['Attività', p.updated], ['Licenza', 'Apache-2.0']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)',
      textAlign: 'right'
    }
  }, v))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    mono: true,
    icon: "terminal",
    block: true
  }, "git clone")), /*#__PURE__*/React.createElement(Card, {
    pad: "sm",
    variant: "grid",
    style: {
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Prossimo incontro"), /*#__PURE__*/React.createElement(EventCard, _extends({}, C.events[0], {
    style: {
      border: 0,
      padding: 0,
      background: 'transparent'
    }
  })))))));
}
Object.assign(window, {
  ProjectDetailScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProjectDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProjectsScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeading,
  ProjectCard,
  Tag,
  Input,
  Select,
  Switch,
  Divider,
  Kicker
} = window.TORCDesignSystem_49bcd9;
function ProjectsScreen({
  go
}) {
  const C = window.TORC_CONTENT;
  const allTags = Array.from(new Set(C.projects.flatMap(p => p.tags)));
  const [tag, setTag] = React.useState(null);
  const [q, setQ] = React.useState('');
  const [onlyActive, setOnlyActive] = React.useState(false);
  const list = C.projects.filter(p => (!tag || p.tags.includes(tag)) && (!onlyActive || p.state === 'live') && (q === '' || (p.title + ' ' + p.summary).toLowerCase().includes(q.toLowerCase())));
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px var(--page-gutter-lg) var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    as: "h1",
    kicker: "Progetti",
    title: "Codice che gira, hardware che si muove.",
    sub: "Ogni progetto nasce da un problema concreto del territorio o da un modo nuovo di affrontarne uno noto. Tutti sono open source dal primo commit."
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 var(--page-gutter-lg) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Cerca progetti",
    value: q,
    onChange: e => setQ(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200
    }
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "Tutti gli ambiti",
    value: tag || '',
    onChange: e => setTag(e.target.value || null),
    options: allTags
  })), /*#__PURE__*/React.createElement(Switch, {
    label: "Solo sviluppo attivo",
    checked: onlyActive,
    onChange: e => setOnlyActive(e.target.checked)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--ls-mono)',
      color: 'var(--text-muted)'
    }
  }, list.length, " / ", C.projects.length, " progetti")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      margin: 'var(--space-5) 0 var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    onClick: () => setTag(null),
    selected: !tag
  }, "tutti"), allTags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    onClick: () => setTag(t === tag ? null : t),
    selected: t === tag,
    count: C.projects.filter(p => p.tags.includes(t)).length
  }, t))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-8)'
    }
  }, list.map(p => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: p.slug
  }, p, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('/progetti/' + p.slug);
    }
  })))), list.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-16) 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "muted"
  }, "Nessun progetto con questi filtri")))));
}
Object.assign(window, {
  ProjectsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProjectsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/content.js
try { (() => {
// Placeholder content for the torc.community kit. Copy is written in the
// TORC voice (Italian, first-person plural, concrete); project names and
// figures are illustrative, not real association data.
window.TORC_CONTENT = {
  nav: [{
    label: 'Manifesto',
    href: '/manifesto'
  }, {
    label: 'Progetti',
    href: '/progetti'
  }, {
    label: 'Eventi',
    href: '/eventi'
  }, {
    label: 'Entra',
    href: '/entra'
  }],
  stats: [{
    value: '12',
    label: 'progetti aperti'
  }, {
    value: '40',
    accentPart: '+',
    label: 'persone in community'
  }, {
    value: '100',
    accentPart: '%',
    label: 'codice open source'
  }, {
    value: '6',
    label: 'incontri all’anno'
  }],
  projects: [{
    slug: 'harbor-slam',
    title: 'Harbor SLAM',
    icon: 'waypoints',
    summary: 'Localizzazione robusta per droni di superficie nel Porto Vecchio, dove il GNSS non basta e le banchine confondono il lidar.',
    state: 'live',
    stateLabel: 'sviluppo attivo',
    tags: ['slam', 'percezione', 'marino'],
    stack: 'ROS 2 Jazzy · Jetson Orin',
    contributors: 6,
    updated: 'ultimo commit 3g'
  }, {
    slug: 'carso-rover',
    title: 'Carso Rover',
    icon: 'move-3d',
    summary: 'Piattaforma cingolata per rilievi su terreno carsico: sospensioni stampate, autonomia 4h, log aperti di ogni uscita.',
    state: 'live',
    stateLabel: 'sviluppo attivo',
    tags: ['locomozione', 'hardware'],
    stack: 'micro-ROS · STM32 · Fusion 360',
    contributors: 4,
    updated: 'ultimo commit 6g'
  }, {
    slug: 'presa-mite',
    title: 'Presa Mite',
    icon: 'joystick',
    summary: 'Pinza a cedevolezza variabile per manipolare oggetti fragili: stampa 3D, sensori di forza low-cost, controllo in Python.',
    state: 'info',
    stateLabel: 'in revisione',
    tags: ['manipolazione', 'controllo'],
    stack: 'ROS 2 · Python · TPU 95A',
    contributors: 3,
    updated: 'ultimo commit 12g'
  }, {
    slug: 'bora-net',
    title: 'Bora Net',
    icon: 'satellite-dish',
    summary: 'Rete di stazioni meteo autocostruite lungo la costa: dati di raffica pubblici, pensati per chi progetta droni e vele.',
    state: 'warn',
    stateLabel: 'cerchiamo mani',
    tags: ['sensoristica', 'dati'],
    stack: 'ESP32 · LoRa · InfluxDB',
    contributors: 2,
    updated: 'ultimo commit 1m'
  }, {
    slug: 'ros-lab-trieste',
    title: 'ROS Lab Trieste',
    icon: 'book-open',
    summary: 'Ambiente di lavoro riproducibile per chi entra: container, bag di esempio, esercizi presi dai nostri progetti reali.',
    state: 'live',
    stateLabel: 'sviluppo attivo',
    tags: ['tooling', 'onboarding'],
    stack: 'Docker · ROS 2 · Gazebo',
    contributors: 5,
    updated: 'ultimo commit 2g'
  }, {
    slug: 'archivio-bag',
    title: 'Archivio Bag',
    icon: 'layers',
    summary: 'Dataset aperto di registrazioni raccolte in porto e sul Carso, con strumenti per tagliarle e annotarle.',
    state: 'idle',
    stateLabel: 'in pausa',
    tags: ['dati', 'percezione'],
    stack: 'rosbag2 · Parquet',
    contributors: 2,
    updated: 'ultimo commit 3m'
  }],
  events: [{
    day: '18',
    month: 'set',
    kind: 'meetup',
    title: 'Demo night: bracci e presa',
    where: 'Area Science Park',
    when: '18:30 → 21:00'
  }, {
    day: '04',
    month: 'ott',
    kind: 'hackathon',
    title: '24h su Harbor SLAM',
    where: 'Porto Vecchio, Magazzino 26',
    when: 'sab 10:00 → dom 10:00'
  }, {
    day: '22',
    month: 'ott',
    kind: 'sfida',
    title: 'Chi passa il varco più stretto?',
    where: 'Officina TORC',
    when: '19:00 → 22:00'
  }],
  principles: [{
    title: 'Il nostro motore è la passione.',
    body: 'Facciamo robotica perché ci appassiona la sfida tecnica. È la passione a guidare le nostre scelte, ed è la migliore garanzia che possiamo offrire: quando un problema ci accende, non lo abbandoniamo finché non funziona.'
  }, {
    title: 'Costruiamo sistemi reali.',
    body: 'Non ci bastano le parole. Il risultato del nostro lavoro è codice che gira, hardware che si muove, sistemi che funzionano. La concretezza è il nostro metro di giudizio.'
  }, {
    title: 'Trasformiamo i problemi in ricerca, e la ricerca in strumenti utili.',
    body: 'Un progetto può nascere da un’esigenza del territorio come da un modo nuovo di affrontare un problema noto. Una volta creato uno strumento, il lavoro non è finito: ne mostriamo le applicazioni e lo colleghiamo ai casi d’uso in cui può fare la differenza.'
  }, {
    title: 'Tutto ciò che creiamo è aperto.',
    body: 'Ogni progetto che sviluppiamo è open source. È un principio, non un’opzione. La conoscenza cresce quando può essere studiata, verificata, riutilizzata e migliorata da chiunque.'
  }, {
    title: 'Trieste è la nostra casa, la rete è la nostra piazza.',
    body: 'Ci incontriamo di persona — meetup, hackathon, sfide — perché le idee corrono più veloci quando le persone si guardano in faccia, davanti ad un robot acceso. Ma i nostri progetti vivono in rete e sono aperti al contributo di chiunque, ovunque si trovi.'
  }, {
    title: 'La porta è aperta, l’asticella è alta.',
    body: 'Chiunque condivida questa passione è benvenuto: professionisti, ricercatori, studenti, autodidatti. Ciò che chiediamo non è un titolo, ma la voglia di mettersi alla prova su problemi difficili.'
  }, {
    title: 'Poche cose, fatte fino in fondo.',
    body: 'Scegliamo con cura i progetti su cui investire le nostre energie e li portiamo a termine. Preferiamo un risultato solido a dieci esperimenti lasciati a metà.'
  }],
  footer: {
    columns: [{
      title: 'Community',
      links: [{
        label: 'Manifesto',
        href: '/manifesto'
      }, {
        label: 'Eventi',
        href: '/eventi'
      }, {
        label: 'Entra in TORC',
        href: '/entra'
      }]
    }, {
      title: 'Costruire',
      links: [{
        label: 'Progetti',
        href: '/progetti'
      }, {
        label: 'GitHub',
        href: '#'
      }, {
        label: 'Linee guida',
        href: '#'
      }]
    }, {
      title: 'Contatti',
      links: [{
        label: 'ciao@torc.community',
        href: '#'
      }, {
        label: 'Newsletter',
        href: '#'
      }, {
        label: 'Stampa',
        href: '#'
      }]
    }],
    meta: ['Testi CC BY-SA 4.0 · codice Apache-2.0', 'Trieste, Italia', '© 2026 TORC']
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/content.js", error: String((e && e.message) || e) }); }

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.EventCard = __ds_scope.EventCard;

__ds_ns.ImagePlate = __ds_scope.ImagePlate;

__ds_ns.PrincipleItem = __ds_scope.PrincipleItem;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.SpecTable = __ds_scope.SpecTable;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.StatusDot = __ds_scope.StatusDot;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.ICONS = __ds_scope.ICONS;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Tabs = __ds_scope.Tabs;

})();

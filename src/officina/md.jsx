// A small, deliberately partial Markdown renderer.
//
// It builds React elements rather than setting innerHTML. GitHub does return a
// sanitised `bodyHTML`, but injecting third-party HTML into a page that holds a
// member's API token is not a trade worth making for nicer typography. React
// escapes text by default, so nothing here can execute.
//
// The ideas repo is private now, so the authors are org members rather than
// anyone on GitHub — which lowers the risk but does not change the reasoning:
// a member's account can be compromised too, and this costs nothing.
//
// Supports what people actually write in an idea: paragraphs, headings, lists,
// quotes, fenced code, and inline code/bold/italic/links. Anything else falls
// through as plain text, which is a fair outcome for a brainstorming tool.
import React from 'react';

const INLINE = /(`[^`]+`)|(\*\*[^*]+\*\*)|(\*[^*]+\*)|(\[[^\]]+\]\([^)\s]+\))|(https?:\/\/[^\s<>()]+)/g;

const linkStyle = { color: 'var(--text-link)', textUnderlineOffset: 3 };
const codeStyle = {
  fontFamily: 'var(--font-mono)', fontSize: '.92em',
  background: 'var(--accent-quiet)', padding: '1px 5px', borderRadius: 'var(--radius-sm)',
};

function inline(text, keyBase) {
  const out = [];
  let last = 0;
  let m;
  INLINE.lastIndex = 0;
  while ((m = INLINE.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const k = keyBase + '-' + m.index;
    if (m[1]) out.push(<code key={k} style={codeStyle}>{m[1].slice(1, -1)}</code>);
    else if (m[2]) out.push(<strong key={k} style={{ color: 'var(--text-strong)' }}>{m[2].slice(2, -2)}</strong>);
    else if (m[3]) out.push(<em key={k}>{m[3].slice(1, -1)}</em>);
    else if (m[4]) {
      const label = m[4].slice(1, m[4].indexOf(']'));
      const href = m[4].slice(m[4].indexOf('](') + 2, -1);
      // Only http(s): never let a javascript: or data: URL through.
      out.push(/^https?:\/\//i.test(href)
        ? <a key={k} href={href} target="_blank" rel="noreferrer noopener" style={linkStyle}>{label}</a>
        : label);
    } else if (m[5]) {
      out.push(<a key={k} href={m[5]} target="_blank" rel="noreferrer noopener" style={linkStyle}>{m[5]}</a>);
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export default function Markdown({ text, style }) {
  if (!text || !text.trim()) return null;
  const lines = text.replace(/\r\n/g, '\n').split('\n');
  const blocks = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim().startsWith('```')) {
      const body = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) body.push(lines[i++]);
      i++;
      blocks.push(
        <pre key={'c' + i} style={{
          margin: 0, padding: 'var(--space-4)', background: 'var(--joints-ink-950)',
          border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)',
          overflowX: 'auto', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)',
          lineHeight: 1.7, color: 'var(--joints-mist-100)',
        }}>{body.join('\n')}</pre>
      );
      continue;
    }

    const heading = /^(#{1,3})\s+(.*)$/.exec(line);
    if (heading) {
      const sizes = ['var(--text-xl)', 'var(--text-lg)', 'var(--text-md)'];
      blocks.push(
        <p key={'h' + i} style={{
          fontFamily: 'var(--font-display)', fontSize: sizes[heading[1].length - 1],
          fontWeight: 'var(--fw-semibold)', letterSpacing: 'var(--ls-heading)',
          color: 'var(--text-strong)', margin: 0,
        }}>{inline(heading[2], 'h' + i)}</p>
      );
      i++;
      continue;
    }

    if (/^\s*>\s?/.test(line)) {
      const body = [];
      while (i < lines.length && /^\s*>\s?/.test(lines[i])) body.push(lines[i++].replace(/^\s*>\s?/, ''));
      blocks.push(
        <blockquote key={'q' + i} style={{
          margin: 0, paddingLeft: 'var(--space-4)', borderLeft: '1px solid var(--accent)',
          color: 'var(--text-secondary)',
        }}>{inline(body.join(' '), 'q' + i)}</blockquote>
      );
      continue;
    }

    const bullet = /^\s*[-*]\s+/;
    const numbered = /^\s*\d+\.\s+/;
    if (bullet.test(line) || numbered.test(line)) {
      const ordered = numbered.test(line);
      const re = ordered ? numbered : bullet;
      const items = [];
      while (i < lines.length && re.test(lines[i])) {
        items.push(lines[i].replace(re, ''));
        i++;
      }
      const List = ordered ? 'ol' : 'ul';
      blocks.push(
        <List key={'l' + i} style={{ margin: 0, paddingLeft: '1.3em', display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
          {items.map((it, n) => <li key={n}>{inline(it, 'l' + i + '-' + n)}</li>)}
        </List>
      );
      continue;
    }

    if (!line.trim()) { i++; continue; }

    const para = [];
    while (i < lines.length && lines[i].trim() && !/^\s*([-*]\s|\d+\.\s|>|#{1,3}\s|```)/.test(lines[i])) {
      para.push(lines[i++]);
    }
    blocks.push(<p key={'p' + i} style={{ margin: 0 }}>{inline(para.join(' '), 'p' + i)}</p>);
  }

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--space-4)',
      fontSize: 'var(--text-md)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-secondary)',
      ...style,
    }}>{blocks}</div>
  );
}

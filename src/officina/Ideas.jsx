// Idee — the association's idea wall.
//
// Stored as GitHub Discussions, shown as a wall of cards. Nothing here says
// "issue", "ticket" or "sprint": an idea is a headline, a few lines and a
// count of people who want it to happen. Promoting it into actual work is a
// separate, later decision that belongs on the board, not here.
import React from 'react';
import { Icon } from '../../design-system/components/icon/Icon.jsx';
import { Button } from '../../design-system/components/core/Button.jsx';
import { Alert } from '../../design-system/components/feedback/Alert.jsx';
import { Spinner } from '../../design-system/components/feedback/Spinner.jsx';
import { Input } from '../../design-system/components/forms/Input.jsx';
import { Textarea } from '../../design-system/components/forms/Textarea.jsx';
import { Select } from '../../design-system/components/forms/Select.jsx';
import { panel, mono, Empty, Rule } from './parts.jsx';
import * as gh from './gh.js';

function Vote({ idea, busy, onToggle }) {
  const on = idea.voted;
  return (
    <button
      type="button"
      onClick={() => onToggle(idea)}
      disabled={busy || (!idea.canVote && !on)}
      aria-pressed={on}
      aria-label={on ? 'Togli il voto' : 'Vota questa idea'}
      style={{
        flex: 'none', width: 46, display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: 2, padding: 'var(--space-2) 0', cursor: busy ? 'progress' : 'pointer',
        borderRadius: 'var(--radius-md)', background: on ? 'var(--accent-quiet)' : 'transparent',
        border: '1px solid ' + (on ? 'var(--border-accent)' : 'var(--border-subtle)'),
        color: on ? 'var(--text-accent)' : 'var(--text-muted)',
        transition: 'var(--transition-control)',
      }}
    >
      <Icon name="chevron-up" size={16} />
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-semibold)',
        fontVariantNumeric: 'tabular-nums', color: on ? 'var(--text-accent)' : 'var(--text-body)',
      }}>{idea.votes}</span>
    </button>
  );
}

function Card({ idea, categories, busy, onToggle, onMove }) {
  return (
    <article style={{ ...panel, padding: 'var(--space-5)', display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
      <Vote idea={idea} busy={busy} onToggle={onToggle} />
      <div style={{ minWidth: 0, flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        <a href={idea.url} target="_blank" rel="noreferrer" style={{
          fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 'var(--fw-semibold)',
          letterSpacing: 'var(--ls-heading)', lineHeight: 'var(--lh-snug)', color: 'var(--text-strong)',
          textDecoration: 'none',
        }}>{idea.title}</a>

        {idea.body && idea.body !== idea.title && (
          <p style={{
            fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-secondary)',
            margin: 0, display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>{idea.body}</p>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', flexWrap: 'wrap', ...mono, letterSpacing: 'var(--ls-mono)', textTransform: 'none' }}>
          <span>{idea.author}</span>
          <span>{gh.rel(idea.created)}</span>
          <a href={idea.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', color: 'inherit', textDecoration: 'none' }}>
            <Icon name="message-square" size={13} />{idea.comments}
          </a>
          {categories.length > 1 && (
            <select
              value={idea.categoryId || ''}
              disabled={busy}
              onChange={(e) => onMove(idea, e.target.value)}
              aria-label="Sposta in un'altra categoria"
              className="joints-input"
              style={{ width: 'auto', height: 26, fontSize: 'var(--text-3xs)', padding: '0 var(--space-2)', marginLeft: 'auto' }}
            >
              {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          )}
        </div>
      </div>
    </article>
  );
}

function Capture({ data, onCreated }) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const [cat, setCat] = React.useState('');
  const [busy, setBusy] = React.useState(false);
  const [error, setError] = React.useState(null);

  // Prefer a category actually meant for ideas; otherwise the first one.
  React.useEffect(() => {
    if (cat || !data.categories.length) return;
    const preferred = data.categories.find((c) => /idea|idee/i.test(c.name)) || data.categories[0];
    setCat(preferred.id);
  }, [data.categories, cat]);

  async function submit(e) {
    e.preventDefault();
    if (!title.trim()) return;
    setBusy(true);
    setError(null);
    try {
      await gh.createIdea({ repositoryId: data.repositoryId, categoryId: cat, title: title.trim(), body });
      setTitle(''); setBody(''); setOpen(false);
      onCreated();
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} style={{ ...panel, padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <Input
            placeholder="Un'idea in una riga…"
            value={title}
            onChange={(e) => { setTitle(e.target.value); if (e.target.value) setOpen(true); }}
            aria-label="Titolo dell'idea"
          />
        </div>
        <Button variant="primary" size="md" type="submit" disabled={busy || !title.trim() || !cat}>
          {busy ? 'Pubblico…' : 'Proponi'}
        </Button>
      </div>

      {open && (
        <>
          <Textarea
            rows={3}
            placeholder="Due righe sul problema e su cosa proveresti. Facoltativo."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            aria-label="Descrizione"
          />
          {data.categories.length > 1 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
              <span style={mono}>Categoria</span>
              <div style={{ minWidth: 180 }}>
                <Select value={cat} onChange={(e) => setCat(e.target.value)}
                  options={data.categories.map((c) => ({ value: c.id, label: c.name }))} />
              </div>
            </div>
          )}
        </>
      )}

      {error && <Alert tone="danger" title="Idea non pubblicata">{error}</Alert>}
    </form>
  );
}

export default function Ideas() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [busy, setBusy] = React.useState({});
  const [filter, setFilter] = React.useState('all');
  const [sort, setSort] = React.useState('votes');

  const load = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      setData(await gh.ideas());
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => { load(); }, [load]);

  async function toggle(idea) {
    const next = !idea.voted;
    setBusy((b) => ({ ...b, [idea.id]: true }));
    setData((d) => ({ ...d, items: d.items.map((i) => i.id === idea.id
      ? { ...i, voted: next, votes: i.votes + (next ? 1 : -1) } : i) }));
    try {
      const s = await gh.setUpvote(idea.id, next);
      setData((d) => ({ ...d, items: d.items.map((i) => i.id === idea.id
        ? { ...i, voted: s.viewerHasUpvoted, votes: s.upvoteCount } : i) }));
    } catch {
      setData((d) => ({ ...d, items: d.items.map((i) => i.id === idea.id
        ? { ...i, voted: idea.voted, votes: idea.votes } : i) }));
    } finally {
      setBusy((b) => { const n = { ...b }; delete n[idea.id]; return n; });
    }
  }

  async function move(idea, categoryId) {
    const prev = idea.categoryId;
    setBusy((b) => ({ ...b, [idea.id]: true }));
    setData((d) => ({ ...d, items: d.items.map((i) => i.id === idea.id ? { ...i, categoryId } : i) }));
    try {
      await gh.moveIdea(idea.id, categoryId);
    } catch {
      setData((d) => ({ ...d, items: d.items.map((i) => i.id === idea.id ? { ...i, categoryId: prev } : i) }));
    } finally {
      setBusy((b) => { const n = { ...b }; delete n[idea.id]; return n; });
    }
  }

  if (loading && !data) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-12)' }}>
        <Spinner size={18} /><span style={mono}>Carico le idee</span>
      </div>
    );
  }

  if (error) {
    return (
      <Empty
        title="Idee non disponibili."
        body={error.kind === 'scope'
          ? 'Il token non può leggere le discussioni di questo repository.'
          : error.message}
      />
    );
  }

  if (!data.enabled) {
    return (
      <Empty
        title="Le discussioni non sono attive."
        body={`Il muro delle idee vive nelle Discussions di ${gh.ORG}/${gh.IDEAS_REPO}. Attivale in Settings → General → Features → Discussions, poi ricarica.`}
        action={<Button variant="secondary" size="sm" iconEnd="external-link"
          href={`https://github.com/${gh.ORG}/${gh.IDEAS_REPO}/settings`}>Apri le impostazioni</Button>}
      />
    );
  }

  const visible = data.items
    .filter((i) => filter === 'all' || i.categoryId === filter)
    .sort((a, b) => (sort === 'votes' ? b.votes - a.votes : new Date(b.created) - new Date(a.created)));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
      <Capture data={data} onCreated={load} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
        <button type="button" onClick={() => setFilter('all')}
          className={'joints-tag joints-tag--interactive' + (filter === 'all' ? ' joints-tag--selected' : '')}>
          Tutte {data.items.length}
        </button>
        {data.categories.map((c) => {
          const n = data.items.filter((i) => i.categoryId === c.id).length;
          if (!n) return null;
          return (
            <button key={c.id} type="button" onClick={() => setFilter(c.id)}
              className={'joints-tag joints-tag--interactive' + (filter === c.id ? ' joints-tag--selected' : '')}>
              {c.name} {n}
            </button>
          );
        })}
        <span style={{ marginLeft: 'auto', display: 'flex', gap: 'var(--space-2)' }}>
          <Button variant={sort === 'votes' ? 'secondary' : 'ghost'} size="sm" onClick={() => setSort('votes')}>Più votate</Button>
          <Button variant={sort === 'recent' ? 'secondary' : 'ghost'} size="sm" onClick={() => setSort('recent')}>Più recenti</Button>
        </span>
      </div>

      {visible.length === 0 ? (
        <Empty
          title="Il muro è vuoto."
          body="Scrivi la prima idea qui sopra. Una riga basta: serve a farla esistere, non a difenderla."
        />
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,320px),1fr))', gap: 'var(--space-4)', alignItems: 'start' }}>
          {visible.map((idea) => (
            <Card key={idea.id} idea={idea} categories={data.categories}
              busy={!!busy[idea.id]} onToggle={toggle} onMove={move} />
          ))}
        </div>
      )}
    </div>
  );
}

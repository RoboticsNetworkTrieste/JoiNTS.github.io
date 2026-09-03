// The Projects v2 board, editable. Moving a card writes the new column back to
// GitHub (updateProjectV2ItemFieldValue), so the board and the project stay in
// sync — that is the whole point of it being here rather than a screenshot.
//
// Moves are optimistic: the card lands in the new column immediately and rolls
// back if GitHub refuses. A console that lies about having saved is worse than
// a slow one, so a failed move also says so out loud.
import React from 'react';
import { Icon } from '../../design-system/components/icon/Icon.jsx';
import { Badge } from '../../design-system/components/core/Badge.jsx';
import { Button } from '../../design-system/components/core/Button.jsx';
import { Spinner } from '../../design-system/components/feedback/Spinner.jsx';
import { Alert } from '../../design-system/components/feedback/Alert.jsx';
import { Select } from '../../design-system/components/forms/Select.jsx';
import { panel, mono, Empty } from './parts.jsx';
import * as gh from './gh.js';

const NO_STATUS = '__none__';

function Card({ item, columns, dragging, onDragStart, onDragEnd, onMove, busy }) {
  const isPR = item.type === 'PullRequest';
  const isDraft = item.type === 'DraftIssue';
  const closed = item.state === 'CLOSED' || item.state === 'MERGED';

  return (
    <article
      draggable={!busy}
      onDragStart={(e) => { e.dataTransfer.effectAllowed = 'move'; onDragStart(item.id); }}
      onDragEnd={onDragEnd}
      style={{
        ...panel,
        padding: 'var(--space-4)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        cursor: busy ? 'progress' : 'grab',
        opacity: dragging ? 0.42 : 1,
        transition: 'opacity var(--dur-fast) var(--ease-servo), border-color var(--dur-fast) var(--ease-standard)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
        <Icon
          name={isDraft ? 'file-text' : isPR ? 'git-pull-request' : 'circle-dot'}
          size={15}
          style={{ marginTop: 2, flex: 'none', color: closed ? 'var(--text-muted)' : 'var(--text-accent)' }}
        />
        <div style={{ minWidth: 0, flex: 1 }}>
          {item.url ? (
            <a href={item.url} target="_blank" rel="noreferrer" style={{
              fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-normal)', color: 'var(--text-body)', textDecoration: 'none',
            }}>{item.title}</a>
          ) : (
            <span style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-normal)', color: 'var(--text-body)' }}>{item.title}</span>
          )}
        </div>
        {busy && <Spinner size={14} label="Sincronizzo" />}
      </div>

      {item.labels.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
          {item.labels.map((l) => <Badge key={l.name}>{l.name}</Badge>)}
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', ...mono, letterSpacing: 'var(--ls-mono)', textTransform: 'none' }}>
        {item.repo && <span>{item.repo}</span>}
        {item.number != null && <span>#{item.number}</span>}
        {item.assignees.length > 0 && (
          <span style={{ marginLeft: 'auto', display: 'flex', gap: 'var(--space-1)' }}>
            {item.assignees.map((a) => (
              <img key={a.login} src={a.avatarUrl} alt={a.login} title={a.login} width="18" height="18"
                style={{ borderRadius: 'var(--radius-circle)', display: 'block' }} />
            ))}
          </span>
        )}
      </div>

      {/* Dragging is not reachable by keyboard, so every card also carries a
          plain select. Same mutation, no mouse required. */}
      <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
        <span style={{ ...mono, flex: 'none' }}>Sposta</span>
        {/* Plain .joints-input, not .joints-select: that modifier hides the
            native arrow because Select draws its own chevron, and there is no
            room for one here. Without it the control loses its affordance. */}
        <select
          value={item.optionId || NO_STATUS}
          disabled={busy}
          onChange={(e) => onMove(item.id, e.target.value)}
          className="joints-input"
          style={{ height: 'var(--control-h-sm)', fontSize: 'var(--text-xs)', padding: '0 var(--space-2)' }}
        >
          <option value={NO_STATUS} disabled>Senza stato</option>
          {columns.filter((c) => c.id !== NO_STATUS).map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
      </label>
    </article>
  );
}

export default function Board({ projects, onReload }) {
  // Derived, not copied. The console loads repositories and activity before it
  // loads projects, so this component mounts while `projects` is still empty —
  // and a useState initialiser runs once, so a default captured here would stay
  // null for good and the board would spin forever. Falling back to the first
  // project on every render means it starts working the moment they arrive.
  // The explicit choice also has to be re-checked: a project can disappear
  // between reloads, and pointing at a stale id would load nothing.
  const [chosenId, setChosenId] = React.useState(null);
  const projectId = projects.some((p) => p.id === chosenId)
    ? chosenId
    : (projects[0]?.id ?? null);
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [dragging, setDragging] = React.useState(null);
  const [over, setOver] = React.useState(null);
  const [busy, setBusy] = React.useState({});
  const [moveError, setMoveError] = React.useState(null);

  const load = React.useCallback(async (id) => {
    if (!id) return;
    setLoading(true);
    setError(null);
    try {
      setData(await gh.board(id));
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => { load(projectId); }, [projectId, load]);

  const columns = React.useMemo(() => {
    const opts = data?.status?.options || [];
    const cols = opts.map((o) => ({ id: o.id, name: o.name }));
    // Items GitHub has not given a status yet still have to appear somewhere,
    // or the board would silently hide work.
    if (data?.items.some((i) => !i.optionId)) cols.unshift({ id: NO_STATUS, name: 'Senza stato' });
    return cols;
  }, [data]);

  async function move(itemId, optionId) {
    if (!data?.status || optionId === NO_STATUS) return;
    const item = data.items.find((i) => i.id === itemId);
    if (!item || item.optionId === optionId) return;

    const previous = item.optionId;
    setMoveError(null);
    setBusy((b) => ({ ...b, [itemId]: true }));
    setData((d) => ({ ...d, items: d.items.map((i) => (i.id === itemId ? { ...i, optionId } : i)) }));

    try {
      await gh.moveItem({ projectId: data.id, itemId, fieldId: data.status.id, optionId });
    } catch (e) {
      setData((d) => ({ ...d, items: d.items.map((i) => (i.id === itemId ? { ...i, optionId: previous } : i)) }));
      setMoveError(e.kind === 'scope'
        ? 'Il token non può scrivere sui progetti: serve il permesso Projects in scrittura.'
        : e.message);
    } finally {
      setBusy((b) => { const n = { ...b }; delete n[itemId]; return n; });
    }
  }

  if (!projects.length) {
    return (
      <Empty
        title="Nessun progetto aperto."
        body={`L'organizzazione non ha progetti attivi, oppure il token non ha il permesso di leggerli. I progetti si creano su GitHub, nella scheda Projects di ${gh.ORG}.`}
        action={<Button variant="secondary" size="sm" icon="external-link" href={`https://github.com/orgs/${gh.ORG}/projects`}>Apri Projects</Button>}
      />
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
        {projects.length > 1 && (
          <div style={{ minWidth: 220 }}>
            <Select
              value={projectId || ''}
              onChange={(e) => setChosenId(e.target.value)}
              options={projects.map((p) => ({ value: p.id, label: p.title }))}
            />
          </div>
        )}
        <span style={mono}>{data ? `${data.items.length} elementi` : '—'}</span>
        <span style={{ marginLeft: 'auto', display: 'flex', gap: 'var(--space-2)' }}>
          <Button variant="ghost" size="sm" icon="rotate-cw" onClick={() => { load(projectId); onReload?.(); }}>Aggiorna</Button>
          {data?.url && <Button variant="secondary" size="sm" iconEnd="external-link" href={data.url}>Apri su GitHub</Button>}
        </span>
      </div>

      {moveError && <Alert tone="danger" title="Spostamento non riuscito">{moveError}</Alert>}
      {error && <Alert tone="danger" title="Board non caricata">{error.message}</Alert>}

      {loading && !data ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-8)' }}>
          <Spinner size={18} /><span style={mono}>Carico la board</span>
        </div>
      ) : !data?.status ? (
        <Empty
          title="Questa board non ha colonne."
          body="Il progetto non espone un campo a scelta singola (di norma «Status»), quindi non ci sono colonne da mostrare. Aggiungilo su GitHub e ricarica."
        />
      ) : (
        <div style={{ display: 'flex', gap: 'var(--space-4)', overflowX: 'auto', paddingBottom: 'var(--space-3)', alignItems: 'flex-start' }}>
          {columns.map((col) => {
            const items = data.items.filter((i) => (i.optionId || NO_STATUS) === col.id);
            const isTarget = over === col.id && col.id !== NO_STATUS;
            return (
              <section
                key={col.id}
                onDragOver={(e) => { if (col.id !== NO_STATUS) { e.preventDefault(); setOver(col.id); } }}
                onDragLeave={() => setOver((o) => (o === col.id ? null : o))}
                onDrop={(e) => { e.preventDefault(); setOver(null); if (dragging) move(dragging, col.id); setDragging(null); }}
                style={{
                  flex: '0 0 300px', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)',
                  padding: 'var(--space-3)', borderRadius: 'var(--radius-lg)',
                  border: `1px solid ${isTarget ? 'var(--border-accent)' : 'transparent'}`,
                  background: isTarget ? 'var(--accent-quiet)' : 'transparent',
                  transition: 'background-color var(--dur-fast) var(--ease-servo), border-color var(--dur-fast) var(--ease-servo)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: 'var(--space-2)' }}>
                  <span style={{ ...mono, color: col.id === NO_STATUS ? 'var(--text-muted)' : 'var(--text-accent)' }}>{col.name}</span>
                  <span style={mono}>{items.length}</span>
                </div>
                {items.map((item) => (
                  <Card
                    key={item.id}
                    item={item}
                    columns={columns}
                    dragging={dragging === item.id}
                    busy={!!busy[item.id]}
                    onDragStart={setDragging}
                    onDragEnd={() => { setDragging(null); setOver(null); }}
                    onMove={move}
                  />
                ))}
                {items.length === 0 && (
                  <span style={{ ...mono, padding: 'var(--space-4) 0', textAlign: 'center' }}>Vuota</span>
                )}
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}

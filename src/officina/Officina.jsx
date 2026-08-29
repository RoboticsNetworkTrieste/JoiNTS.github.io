// Officina JoiNTS — the members' console.
//
// Renders client-side only: everything it shows comes from the GitHub API with
// the member's own token, so there is nothing to prerender. See gh.js for why
// the token is pasted rather than obtained through an OAuth button.
import React from 'react';
import { Icon } from '../../design-system/components/icon/Icon.jsx';
import { Logo } from '../../design-system/components/brand/Logo.jsx';
import { Button } from '../../design-system/components/core/Button.jsx';
import { Badge } from '../../design-system/components/core/Badge.jsx';
import { Alert } from '../../design-system/components/feedback/Alert.jsx';
import { StatusDot } from '../../design-system/components/feedback/StatusDot.jsx';
import { Spinner } from '../../design-system/components/feedback/Spinner.jsx';
import { Field } from '../../design-system/components/forms/Field.jsx';
import { Input } from '../../design-system/components/forms/Input.jsx';
import { Checkbox } from '../../design-system/components/forms/Checkbox.jsx';
import { Tile, Rule, Empty, Lang, Meta, panel, mono } from './parts.jsx';
import Board from './Board.jsx';
import * as gh from './gh.js';

const RAIL = [
  { id: 'overview', icon: 'gauge', label: 'Panoramica' },
  { id: 'repos', icon: 'folder-git-2', label: 'Repository' },
  { id: 'activity', icon: 'activity', label: 'Attività' },
];

// Classic tokens accept their scopes as URL parameters, so this link opens the
// form with the three boxes already ticked: the member picks an expiry and
// clicks generate. Fine-grained tokens cannot be pre-filled the same way, and
// their Resource owner field defaults to the personal account — the single most
// common reason a token that looks right is refused.
const TOKEN_CLASSIC =
  'https://github.com/settings/tokens/new?description=Officina%20JoiNTS&scopes=repo,read:org,project';
const TOKEN_FINE =
  'https://github.com/settings/personal-access-tokens/new?name=Officina%20JoiNTS&description=Console%20interna%20JoiNTS';

// The console locks itself after this long without input. The page cannot be
// walled — see gh.js — so the one thing that is actually in our hands is how
// long a usable token stays loaded in a browser someone walked away from.
const IDLE_MS = 30 * 60 * 1000;

const code = {
  fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)',
  background: 'var(--accent-quiet)', color: 'var(--text-body)',
  padding: '1px 5px', borderRadius: 'var(--radius-sm)',
};

// ── The gate ───────────────────────────────────────────────────────────────

function Gate({ onAuth, notice }) {
  const [value, setValue] = React.useState('');
  const [remember, setRemember] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const [error, setError] = React.useState(null);

  // A notice from the previous session (expired token, idle lock) shows until
  // the member starts typing, then gets out of the way.
  const message = error
    ? { tone: 'danger', title: 'Accesso non riuscito', text: error }
    : !value && notice ? notice : null;

  async function submit(e) {
    e.preventDefault();
    const tok = value.trim();
    if (!tok) return;
    setBusy(true);
    setError(null);
    try {
      const user = await gh.verify(tok);
      gh.token.set(tok, remember);
      onAuth(user);
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="joints-field" data-field="scan" data-field-glow="lit" data-field-depth="hero"
      style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 'var(--space-8)' }}>
      <div style={{ width: '100%', maxWidth: 520, display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <Logo variant="lockup" height={26} />
          <span className="joints-kicker">Officina · console interna</span>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 'var(--fw-semibold)',
            lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-display)', color: 'var(--text-strong)', margin: 0,
          }}>Entra con il tuo account GitHub.</h1>
          <p style={{ fontSize: 'var(--text-md)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-secondary)', margin: 0 }}>
            La console legge repository, attività e board dell'organizzazione {gh.ORG}. Serve un token personale:
            il sito è statico e non ha un server che possa fare il login al posto tuo.
          </p>
        </div>

        <form onSubmit={submit} style={{ ...panel, padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          <Field
            label="Token GitHub"
            htmlFor="tok"
            required
            hint="Resta in questo browser. Lo mandiamo solo a api.github.com, mai a noi."
          >
            <Input
              id="tok"
              mono
              type="password"
              autoComplete="off"
              spellCheck="false"
              placeholder="github_pat_…"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              invalid={!!error}
            />
          </Field>

          {message && <Alert tone={message.tone} title={message.title}>{message.text}</Alert>}

          <Checkbox
            label="Ricordami su questo computer"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <span style={{ ...mono, letterSpacing: 'var(--ls-mono)', textTransform: 'none', marginTop: 'calc(var(--space-3) * -1)' }}>
            {remember
              ? 'Il token resta finché non esci. Usalo solo su un computer tuo.'
              : 'Senza questa opzione il token si cancella quando chiudi il browser.'}
          </span>

          <Button variant="primary" size="md" type="submit" block disabled={busy || !value.trim()}
            iconEnd={busy ? undefined : 'arrow-right'}>
            {busy ? 'Verifico…' : 'Entra'}
          </Button>

          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <span style={mono}>Come si crea · due strade</span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-body)' }}>
                Veloce — token classic
              </span>
              <p style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-secondary)', margin: 0 }}>
                Il link apre il modulo con i permessi già spuntati (<span style={code}>repo</span>,{' '}
                <span style={code}>read:org</span>, <span style={code}>project</span>). Scegli una
                scadenza, genera, incolla qui. Nient'altro da configurare.
              </p>
              <Button variant="secondary" size="sm" iconEnd="external-link" href={TOKEN_CLASSIC}>Crea token classic</Button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-body)' }}>
                Più stretta — token fine-grained
              </span>
              <p style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-secondary)', margin: 0 }}>
                Vede solo {gh.ORG} invece di tutti i tuoi repository, ma va compilata a mano.
              </p>
              <ol style={{ margin: 0, paddingLeft: '1.2em', fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-secondary)' }}>
                <li><strong style={{ color: 'var(--text-body)' }}>Resource owner: {gh.ORG}</strong> — GitHub
                  propone il tuo account personale, e con quello la console non entra. È l'errore più comune.</li>
                <li>Repository access: all repositories.</li>
                <li>Repository: Metadata, Contents, Issues, Pull requests in lettura.</li>
                <li>Organization: Members in lettura, <strong style={{ color: 'var(--text-body)' }}>Projects in scrittura</strong> —
                  senza, la board si vede ma non si sposta.</li>
                <li>Potrebbe restare in attesa di approvazione di un owner dell'organizzazione.</li>
              </ol>
              <Button variant="secondary" size="sm" iconEnd="external-link" href={TOKEN_FINE}>Crea token fine-grained</Button>
            </div>
          </div>
        </form>

        <p style={{ ...mono, letterSpacing: 'var(--ls-mono)', textTransform: 'none', lineHeight: 'var(--lh-relaxed)' }}>
          Questa pagina è pubblica: a essere protetti sono i dati, che GitHub non restituisce
          senza un token di chi è membro dell'organizzazione.
        </p>
      </div>
    </div>
  );
}

// ── Views ──────────────────────────────────────────────────────────────────

function RepoRow({ r }) {
  return (
    <a href={r.url} target="_blank" rel="noreferrer" style={{
      display: 'grid', gridTemplateColumns: 'minmax(0,1fr) auto', gap: 'var(--space-4)', alignItems: 'center',
      padding: 'var(--space-4) 0', borderBottom: '1px solid var(--border-subtle)', textDecoration: 'none',
    }}>
      <div style={{ minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', fontWeight: 'var(--fw-semibold)',
            letterSpacing: 'var(--ls-heading)', color: 'var(--text-strong)',
          }}>{r.name}</span>
          {r.private && <Badge icon="lock">privato</Badge>}
          {r.archived && <Badge tone="warn">archiviato</Badge>}
          {r.fork && <Badge>fork</Badge>}
        </div>
        {r.description && (
          <p style={{
            fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-normal)', color: 'var(--text-secondary)',
            margin: 'var(--space-2) 0 0', maxWidth: '70ch',
          }}>{r.description}</p>
        )}
        <div className="joints-project__meta" style={{ borderTop: 0, paddingTop: 'var(--space-2)', marginTop: 'var(--space-2)' }}>
          <Lang name={r.language} />
          <Meta icon="circle-dot">{r.openIssues} aperte</Meta>
          {r.stars > 0 && <Meta icon="star">{r.stars}</Meta>}
          <Meta icon="git-branch">{r.branch}</Meta>
        </div>
      </div>
      <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: 'var(--space-1)', alignItems: 'flex-end' }}>
        <span style={{ ...mono, color: 'var(--text-body)', letterSpacing: 'var(--ls-mono)', textTransform: 'none' }}>{gh.rel(r.pushed)}</span>
        <span style={mono}>ultimo push</span>
      </div>
    </a>
  );
}

function Feed({ events, limit }) {
  const shown = limit ? events.slice(0, limit) : events;
  if (!shown.length) return <Empty title="Nessuna attività recente." body="GitHub non riporta eventi per questa organizzazione negli ultimi giorni." />;
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {shown.map((ev) => {
        const d = gh.describe(ev);
        return (
          <div key={ev.id} style={{
            display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)',
            padding: 'var(--space-3) 0', borderBottom: '1px solid var(--border-subtle)',
          }}>
            <Icon name={d.icon} size={15} style={{ marginTop: 3, flex: 'none', color: 'var(--text-muted)' }} />
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-normal)', color: 'var(--text-body)' }}>
                {d.url ? <a href={d.url} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{d.verb}</a> : d.verb}
              </div>
              <div style={{ ...mono, letterSpacing: 'var(--ls-mono)', textTransform: 'none', marginTop: 2 }}>
                {ev.actor?.login} · {d.repo}
              </div>
            </div>
            <span style={{ ...mono, flex: 'none' }}>{gh.rel(ev.created_at)}</span>
          </div>
        );
      })}
    </div>
  );
}

function Overview({ data, projects, onReload }) {
  const { repos, events, counts } = data;
  const week = events.filter((e) => Date.now() - new Date(e.created_at).getTime() < 7 * 864e5).length;
  const priv = repos.filter((r) => r.private).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: 'var(--space-4)' }}>
        <Tile label="Repository" value={repos.length} note={`${priv} privati · ${repos.length - priv} pubblici`} icon="folder-git-2" />
        <Tile label="Pull request" value={counts?.prs} note="aperte" icon="git-pull-request" tone="accent" />
        <Tile label="Issue" value={counts?.issues} note="aperte" icon="circle-dot" />
        <Tile label="Eventi" value={week} note="ultimi 7 giorni" icon="activity" />
      </div>

      <section>
        <Rule index="01 / 03" label="Board" note="Projects · GitHub" />
        <Board projects={projects} onReload={onReload} />
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.25fr) minmax(0,.75fr)', gap: 'var(--space-10)', alignItems: 'start' }}>
        <section>
          <Rule index="02 / 03" label="Repository" note={`${repos.length} totali`} />
          {repos.length === 0
            ? <Empty title="Nessun repository." body={`L'organizzazione ${gh.ORG} non ha ancora repository visibili a questo token.`} />
            : repos.slice(0, 6).map((r) => <RepoRow key={r.id} r={r} />)}
        </section>
        <section>
          <Rule index="03 / 03" label="Attività" />
          <Feed events={events} limit={12} />
        </section>
      </div>
    </div>
  );
}

function Repos({ data }) {
  const [q, setQ] = React.useState('');
  const [filter, setFilter] = React.useState('all');

  const list = data.repos
    .filter((r) => (filter === 'all' ? true : filter === 'private' ? r.private : filter === 'public' ? !r.private : !r.archived))
    .filter((r) => {
      const t = q.trim().toLowerCase();
      return !t || r.name.toLowerCase().includes(t) || (r.description || '').toLowerCase().includes(t);
    });

  const FILTERS = [
    { id: 'all', label: 'Tutti' },
    { id: 'active', label: 'Attivi' },
    { id: 'public', label: 'Pubblici' },
    { id: 'private', label: 'Privati' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
        <div style={{ width: 280 }}>
          <Input icon="search" placeholder="Cerca repository" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          {FILTERS.map((f) => (
            <button key={f.id} type="button" onClick={() => setFilter(f.id)}
              className={'joints-tag joints-tag--interactive' + (filter === f.id ? ' joints-tag--selected' : '')}>
              {f.label}
            </button>
          ))}
        </div>
        <span style={{ ...mono, marginLeft: 'auto' }}>{list.length} di {data.repos.length}</span>
      </div>
      {list.length === 0
        ? <Empty title="Nessun repository con questi filtri." />
        : <div>{list.map((r) => <RepoRow key={r.id} r={r} />)}</div>}
    </div>
  );
}

// ── Shell ──────────────────────────────────────────────────────────────────

function Console({ user, onExit }) {
  const [view, setView] = React.useState('overview');
  const [data, setData] = React.useState(null);
  const [projects, setProjects] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [projectsError, setProjectsError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const load = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Counts come from the search API, which is rate-limited harder than the
      // rest; a failure there must not take the whole console down.
      const [repos, events, counts] = await Promise.all([
        gh.repos(),
        gh.activity(user.login),
        gh.counts().catch(() => null),
      ]);
      setData({ repos, events, counts });
    } catch (e) {
      setError(e);
      if (e.kind === 'auth') onExit();
    } finally {
      setLoading(false);
    }
    // Projects need their own permission, so they fail independently and say so
    // rather than looking like an empty board.
    try {
      setProjects(await gh.projects());
      setProjectsError(null);
    } catch (e) {
      setProjects([]);
      setProjectsError(e);
    }
  }, [user.login, onExit]);

  React.useEffect(() => { load(); }, [load]);

  // Idle lock. Any real input resets the countdown; loading data does not, so a
  // console left open on a projector locks on schedule.
  React.useEffect(() => {
    let timer;
    const arm = () => {
      clearTimeout(timer);
      timer = setTimeout(() => onExit('idle'), IDLE_MS);
    };
    const events = ['pointerdown', 'keydown', 'wheel'];
    events.forEach((e) => window.addEventListener(e, arm, { passive: true }));
    arm();
    return () => {
      clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, arm));
    };
  }, [onExit]);

  const initials = (user.name || user.login).slice(0, 2).toUpperCase();

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-page-deep)' }}>
      <nav style={{
        width: 60, flex: 'none', borderRight: '1px solid var(--border-subtle)', display: 'flex',
        flexDirection: 'column', alignItems: 'center', gap: 'var(--space-2)', padding: 'var(--space-4) 0',
        position: 'sticky', top: 0, height: '100vh',
      }}>
        <a href="/" aria-label="JoiNTS — sito" style={{ marginBottom: 'var(--space-4)' }}><Logo variant="icon" height={26} /></a>
        {RAIL.map((r) => (
          <button key={r.id} type="button" title={r.label} aria-label={r.label}
            aria-current={view === r.id ? 'page' : undefined}
            onClick={() => setView(r.id)}
            style={{
              width: 40, height: 40, display: 'grid', placeItems: 'center', border: 0, cursor: 'pointer',
              borderRadius: 'var(--radius-md)',
              background: view === r.id ? 'var(--accent-quiet)' : 'transparent',
              color: view === r.id ? 'var(--accent)' : 'var(--text-muted)',
            }}>
            <Icon name={r.icon} size={19} />
          </button>
        ))}
        <button type="button" title="Esci" aria-label="Esci" onClick={onExit}
          style={{
            marginTop: 'auto', width: 40, height: 40, display: 'grid', placeItems: 'center',
            border: 0, cursor: 'pointer', borderRadius: 'var(--radius-md)', background: 'transparent', color: 'var(--text-muted)',
          }}>
          <Icon name="lock" size={18} />
        </button>
      </nav>

      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <header style={{
          display: 'flex', alignItems: 'center', gap: 'var(--space-4)', height: 64, padding: '0 var(--space-8)',
          borderBottom: '1px solid var(--border-subtle)', background: 'var(--surface-header)',
          backdropFilter: 'blur(14px)', position: 'sticky', top: 0, zIndex: 20,
        }}>
          <span style={mono}>Officina JoiNTS</span>
          <Icon name="chevron-right" size={13} style={{ color: 'var(--text-muted)' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)' }}>
            {(RAIL.find((r) => r.id === view) || RAIL[0]).label}
          </span>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 'var(--space-5)' }}>
            {loading
              ? <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}><Spinner size={14} /><span style={mono}>Carico</span></span>
              : <StatusDot state="live">{gh.ORG}</StatusDot>}
            {gh.budget.remaining != null && <span style={mono}>{gh.budget.remaining} richieste</span>}
            <span title={`${user.login} · ${user.role}`} style={{
              width: 32, height: 32, borderRadius: 'var(--radius-circle)', background: 'var(--accent-quiet)',
              color: 'var(--text-accent)', display: 'grid', placeItems: 'center',
              fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', overflow: 'hidden',
            }}>
              {user.avatar ? <img src={user.avatar} alt={user.login} width="32" height="32" style={{ display: 'block' }} /> : initials}
            </span>
          </div>
        </header>

        <main style={{ flex: 1, padding: 'var(--space-8)', background: 'var(--bg-page)' }}>
          {error && (
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <Alert tone="danger" title="Dati non caricati">{error.message}</Alert>
            </div>
          )}
          {projectsError && view === 'overview' && (
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <Alert tone="warn" title="Board non disponibile">
                {projectsError.kind === 'scope'
                  ? 'Il token non ha il permesso Projects sull\'organizzazione. Aggiungilo e ricarica.'
                  : projectsError.message}
              </Alert>
            </div>
          )}

          {!data && loading && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-12)' }}>
              <Spinner size={20} /><span style={mono}>Interrogo GitHub</span>
            </div>
          )}

          {data && view === 'overview' && <Overview data={data} projects={projects} onReload={load} />}
          {data && view === 'repos' && <Repos data={data} />}
          {data && view === 'activity' && (
            <>
              <Rule label="Attività" note={`${data.events.length} eventi`} action={
                <Button variant="ghost" size="sm" icon="rotate-cw" onClick={load}>Aggiorna</Button>
              } />
              <Feed events={data.events} />
            </>
          )}
        </main>
      </div>
    </div>
  );
}

// ── Root ───────────────────────────────────────────────────────────────────

export default function Officina() {
  const [state, setState] = React.useState('checking');
  const [user, setUser] = React.useState(null);
  const [notice, setNotice] = React.useState(null);

  React.useEffect(() => {
    const tok = gh.token.get();
    if (!tok) { setState('locked'); return; }
    let live = true;
    gh.verify(tok)
      .then((u) => { if (live) { setUser(u); setState('ready'); } })
      .catch((e) => {
        if (!live) return;
        gh.token.clear();
        setNotice({ tone: 'danger', title: 'Accesso non riuscito', text: e.message });
        setState('locked');
      });
    return () => { live = false; };
  }, []);

  // Memoised: Console derives its data loader and its idle timer from it, and a
  // fresh identity on every render would restart both.
  const exit = React.useCallback((reason) => {
    gh.token.clear();
    setUser(null);
    setNotice(reason === 'idle'
      ? { tone: 'info', title: 'Sessione chiusa', text: 'Nessuna attività per 30 minuti. Reincolla il token per rientrare.' }
      : null);
    setState('locked');
  }, []);

  if (state === 'checking') {
    return (
      <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <Spinner size={18} /><span style={mono}>Verifico l'accesso</span>
        </span>
      </div>
    );
  }
  if (state === 'locked') {
    return <Gate notice={notice} onAuth={(u) => { setNotice(null); setUser(u); setState('ready'); }} />;
  }
  return <Console user={user} onExit={exit} />;
}

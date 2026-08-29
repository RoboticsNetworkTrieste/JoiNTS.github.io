// GitHub API layer for the Officina console.
//
// WHY A PASTED TOKEN, AND NOT "LOGIN WITH GITHUB"
//
// This site is static HTML on GitHub Pages: there is no server. GitHub's OAuth
// web flow needs a client secret to exchange the code, and a secret shipped to
// a browser is not a secret. The device flow needs no secret, but its token
// endpoint sends no CORS headers, so a browser cannot complete it either.
// What is left, and what this uses, is a token the member creates and pastes.
// It is kept in sessionStorage (localStorage only on request) and sent to
// api.github.com and nowhere else.
//
// So be precise about what this is: a MEMBER CONSOLE, not a secret area. The
// page is public HTML — anyone can load it. What is gated is the *data*:
// GitHub refuses to return it unless the token belongs to an org member. If
// the association later wants a real login wall, it needs a backend (a small
// Cloudflare Worker doing the OAuth exchange is enough) — swap `token()` and
// the gate in Officina.jsx and nothing else here changes.

export const ORG = 'RoboticsNetworkTrieste';

const TOKEN_KEY = 'joints.officina.token';
const REST = 'https://api.github.com';
const GQL = 'https://api.github.com/graphql';

// Session storage by default, localStorage only if the member asks to be
// remembered. Since the page itself cannot be walled, the compensating control
// is exposure time: a token that dies with the browser is a token that cannot
// be found later on a shared laptop.
export const token = {
  get: () => {
    try { return sessionStorage.getItem(TOKEN_KEY) || localStorage.getItem(TOKEN_KEY) || ''; } catch { return ''; }
  },
  set: (v, persist = false) => {
    try {
      (persist ? localStorage : sessionStorage).setItem(TOKEN_KEY, v);
      // Never leave a copy in the store we did not choose.
      (persist ? sessionStorage : localStorage).removeItem(TOKEN_KEY);
    } catch { /* private mode: the token just does not survive a reload */ }
  },
  clear: () => {
    try {
      sessionStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(TOKEN_KEY);
    } catch { /* nothing to clear */ }
  },
};

// Rate-limit headroom, read off the last response. Shown in the status bar —
// an instrument panel should say how much budget is left.
export const budget = { remaining: null, limit: null };

function readBudget(res) {
  const remaining = res.headers.get('x-ratelimit-remaining');
  const limit = res.headers.get('x-ratelimit-limit');
  if (remaining !== null) budget.remaining = Number(remaining);
  if (limit !== null) budget.limit = Number(limit);
}

export class GhError extends Error {
  constructor(message, { status = 0, kind = 'unknown' } = {}) {
    super(message);
    this.status = status;
    this.kind = kind;
  }
}

// One place that turns an HTTP failure into a sentence a member can act on.
function explain(status, body) {
  if (status === 401) return new GhError('Token non valido o scaduto.', { status, kind: 'auth' });
  if (status === 403) {
    const msg = String(body?.message || '');
    if (/rate limit/i.test(msg)) return new GhError('Limite di richieste GitHub raggiunto. Riprova tra qualche minuto.', { status, kind: 'rate' });
    return new GhError('Il token non ha i permessi necessari.', { status, kind: 'scope' });
  }
  if (status === 404) return new GhError('Risorsa non trovata, o non visibile a questo token.', { status, kind: 'missing' });
  return new GhError(body?.message || `Errore GitHub (${status}).`, { status, kind: 'http' });
}

async function rest(path, { method = 'GET', body, tok } = {}) {
  const res = await fetch(REST + path, {
    method,
    headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      Authorization: `Bearer ${tok || token.get()}`,
      ...(body ? { 'Content-Type': 'application/json' } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
  readBudget(res);
  if (!res.ok) throw explain(res.status, await res.json().catch(() => null));
  return res.json();
}

async function graphql(query, variables = {}, tok) {
  const res = await fetch(GQL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${tok || token.get()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });
  readBudget(res);
  if (!res.ok) throw explain(res.status, await res.json().catch(() => null));
  const json = await res.json();
  if (json.errors?.length) {
    const first = json.errors[0];
    // A token without the Projects permission fails here rather than at the
    // HTTP layer, so map it to the same "scope" kind the gate understands.
    const kind = /scope|permission|resource not accessible/i.test(first.message) ? 'scope' : 'graphql';
    throw new GhError(first.message, { status: 200, kind });
  }
  return json.data;
}

// ── Identity and the gate ──────────────────────────────────────────────────

// Verifies the token AND that its owner is an active member of the org. Both
// in two calls, so a wrong-account token fails with the right message.
export async function verify(tok) {
  const user = await rest('/user', { tok });
  let membership;
  try {
    membership = await rest(`/user/memberships/orgs/${ORG}`, { tok });
  } catch (e) {
    // A 403/404 here has TWO causes and they need different fixes: the account
    // really is not a member, or the token is not allowed to read membership
    // (owned by a personal account instead of the org, or missing Members:read).
    // Blaming membership alone sends a member hunting in the wrong place.
    if (e.kind === 'missing' || e.status === 403) {
      throw new GhError(
        `Non riesco a confermare che ${user.login} sia membro di ${ORG}. ` +
        `Di solito il token è intestato all'account personale invece che all'organizzazione, ` +
        `oppure gli manca il permesso Members in lettura. Controlla "Resource owner" sul token.`,
        { status: e.status, kind: 'member' }
      );
    }
    throw e;
  }
  if (membership.state !== 'active') {
    throw new GhError(`L'invito a ${ORG} è in sospeso: accettalo su GitHub, poi riprova.`, { status: 200, kind: 'member' });
  }
  return { login: user.login, name: user.name, avatar: user.avatar_url, role: membership.role };
}

// ── Repositories and activity ──────────────────────────────────────────────

export async function repos() {
  const all = [];
  // Up to 300 repos. Past that the console should paginate on demand rather
  // than pretending it can hold the whole org in memory.
  for (let page = 1; page <= 3; page++) {
    const batch = await rest(`/orgs/${ORG}/repos?per_page=100&sort=pushed&page=${page}`);
    all.push(...batch);
    if (batch.length < 100) break;
  }
  return all.map((r) => ({
    id: r.id,
    name: r.name,
    full: r.full_name,
    url: r.html_url,
    description: r.description,
    private: r.private,
    archived: r.archived,
    fork: r.fork,
    language: r.language,
    stars: r.stargazers_count,
    forks: r.forks_count,
    // GitHub counts PRs inside open_issues_count; the split comes from search.
    openIssues: r.open_issues_count,
    branch: r.default_branch,
    pushed: r.pushed_at,
    topics: r.topics || [],
  }));
}

// Events visible to this member, private repos included. The public
// /orgs/{org}/events endpoint would hide exactly what a member logs in to see.
export async function activity(login) {
  try {
    return await rest(`/users/${login}/events/orgs/${ORG}?per_page=100`);
  } catch {
    return rest(`/orgs/${ORG}/events?per_page=100`);
  }
}

// Accurate open PR / issue counts. REST's open_issues_count conflates the two.
export async function counts() {
  const q = async (query) => {
    const r = await rest(`/search/issues?q=${encodeURIComponent(query)}&per_page=1`);
    return r.total_count;
  };
  const [prs, issues] = await Promise.all([
    q(`org:${ORG} is:pr is:open`),
    q(`org:${ORG} is:issue is:open`),
  ]);
  return { prs, issues };
}

// ── Projects v2 (the boards) ───────────────────────────────────────────────

export async function projects() {
  const data = await graphql(
    `query($org:String!){
      organization(login:$org){
        projectsV2(first:20, orderBy:{field:UPDATED_AT, direction:DESC}){
          nodes{ id number title url closed shortDescription }
        }
      }
    }`,
    { org: ORG }
  );
  return (data.organization?.projectsV2?.nodes || []).filter((p) => !p.closed);
}

export async function board(projectId) {
  const data = await graphql(
    `query($id:ID!){
      node(id:$id){ ... on ProjectV2 {
        id title url
        fields(first:30){ nodes{
          ... on ProjectV2SingleSelectField { id name options{ id name } }
        } }
        items(first:100){ nodes{
          id
          fieldValues(first:20){ nodes{
            ... on ProjectV2ItemFieldSingleSelectValue {
              optionId name field{ ... on ProjectV2SingleSelectField { id name } }
            }
          } }
          content{
            __typename
            ... on Issue { number title url state repository{ name } assignees(first:3){ nodes{ login avatarUrl } } labels(first:4){ nodes{ name color } } }
            ... on PullRequest { number title url state isDraft repository{ name } assignees(first:3){ nodes{ login avatarUrl } } labels(first:4){ nodes{ name color } } }
            ... on DraftIssue { title }
          }
        } }
      } }
    }`,
    { id: projectId }
  );

  const node = data.node;
  if (!node) throw new GhError('Progetto non trovato.', { kind: 'missing' });

  const singleSelects = (node.fields.nodes || []).filter((f) => f && f.options);
  // "Status" is the default board field; fall back to the first single-select
  // so a renamed column field still works.
  const status = singleSelects.find((f) => f.name === 'Status') || singleSelects[0] || null;

  const items = (node.items.nodes || []).map((it) => {
    const c = it.content || {};
    const value = (it.fieldValues.nodes || []).find((v) => v?.field?.id && status && v.field.id === status.id);
    return {
      id: it.id,
      optionId: value?.optionId || null,
      type: c.__typename || 'DraftIssue',
      number: c.number ?? null,
      title: c.title || 'Senza titolo',
      url: c.url || null,
      state: c.state || null,
      draft: c.isDraft || false,
      repo: c.repository?.name || null,
      assignees: c.assignees?.nodes || [],
      labels: c.labels?.nodes || [],
    };
  });

  return { id: node.id, title: node.title, url: node.url, status, items };
}

// The write side: moving a card between columns is a single-select field
// update. This is what keeps the board and GitHub in sync in both directions.
export async function moveItem({ projectId, itemId, fieldId, optionId }) {
  await graphql(
    `mutation($p:ID!,$i:ID!,$f:ID!,$o:String!){
      updateProjectV2ItemFieldValue(input:{
        projectId:$p, itemId:$i, fieldId:$f, value:{ singleSelectOptionId:$o }
      }){ projectV2Item{ id } }
    }`,
    { p: projectId, i: itemId, f: fieldId, o: optionId }
  );
}

// ── Formatting, in the brand's register ────────────────────────────────────

// Short mono relative time: 3g, 2s, 1m. The readme is explicit about this.
export function rel(iso) {
  if (!iso) return '—';
  const s = Math.max(0, (Date.now() - new Date(iso).getTime()) / 1000);
  if (s < 60) return 'ora';
  const m = s / 60;
  if (m < 60) return `${Math.floor(m)}min`;
  const h = m / 60;
  if (h < 24) return `${Math.floor(h)}h`;
  const d = h / 24;
  if (d < 7) return `${Math.floor(d)}g`;
  const w = d / 7;
  if (w < 5) return `${Math.floor(w)}s`;
  const mo = d / 30;
  if (mo < 12) return `${Math.floor(mo)}m`;
  return `${Math.floor(d / 365)}a`;
}

// Events carry a verb and a target; both are needed to read a feed at a glance.
export function describe(ev) {
  const repo = ev.repo?.name?.split('/')[1] || ev.repo?.name || '';
  const p = ev.payload || {};
  switch (ev.type) {
    case 'PushEvent': {
      const n = p.size ?? p.commits?.length ?? 0;
      const branch = (p.ref || '').replace('refs/heads/', '');
      return { icon: 'git-branch', verb: `${n} commit su ${branch}`, repo, url: null };
    }
    case 'PullRequestEvent':
      return { icon: 'git-pull-request', verb: `PR #${p.number} ${p.action === 'closed' && p.pull_request?.merged ? 'unita' : p.action === 'opened' ? 'aperta' : p.action}`, repo, url: p.pull_request?.html_url };
    case 'IssuesEvent':
      return { icon: 'circle-dot', verb: `Issue #${p.issue?.number} ${p.action === 'opened' ? 'aperta' : p.action === 'closed' ? 'chiusa' : p.action}`, repo, url: p.issue?.html_url };
    case 'IssueCommentEvent':
      return { icon: 'message-square', verb: `Commento su #${p.issue?.number}`, repo, url: p.comment?.html_url };
    case 'CreateEvent':
      return { icon: 'plus', verb: p.ref_type === 'repository' ? 'Repository creato' : `${p.ref_type} ${p.ref} creato`, repo, url: null };
    case 'DeleteEvent':
      return { icon: 'minus', verb: `${p.ref_type} ${p.ref} eliminato`, repo, url: null };
    case 'ReleaseEvent':
      return { icon: 'package', verb: `Release ${p.release?.tag_name}`, repo, url: p.release?.html_url };
    case 'ForkEvent':
      return { icon: 'git-branch', verb: 'Fork', repo, url: null };
    case 'WatchEvent':
      return { icon: 'star', verb: 'Star', repo, url: null };
    case 'PullRequestReviewEvent':
      return { icon: 'eye', verb: `Review su #${p.pull_request?.number}`, repo, url: p.review?.html_url };
    default:
      return { icon: 'activity', verb: ev.type.replace(/Event$/, ''), repo, url: null };
  }
}

// ── Idee ───────────────────────────────────────────────────────────────────
//
// Backed by GitHub Discussions, which are the storage and not the shape: they
// give threads, upvotes, notifications and permanence for nothing, while the
// console renders them as a wall of cards. Projects were the wrong home — a
// kanban frames an idea as a ticket before anyone has decided it is one, and
// "Da fare / In corso" is the wrong question to ask of a half-formed thought.
//
// Point this at whichever repo should hold the association's ideas; it needs
// Discussions enabled in that repo's Settings → Features.
export const IDEAS_REPO = 'JoiNTS.github.io';

export async function ideas() {
  const data = await graphql(
    `query($owner:String!,$repo:String!){
      repository(owner:$owner,name:$repo){
        id
        hasDiscussionsEnabled
        discussionCategories(first:25){ nodes{ id name description isAnswerable } }
        discussions(first:100, orderBy:{field:CREATED_AT, direction:DESC}){
          nodes{
            id number title bodyText url createdAt
            upvoteCount viewerHasUpvoted viewerCanUpvote
            author{ login avatarUrl }
            category{ id name }
            comments{ totalCount }
          }
        }
      }
    }`,
    { owner: ORG, repo: IDEAS_REPO }
  );
  const r = data.repository;
  if (!r) throw new GhError(`Repository ${ORG}/${IDEAS_REPO} non trovato.`, { kind: 'missing' });
  return {
    repositoryId: r.id,
    enabled: r.hasDiscussionsEnabled,
    categories: r.discussionCategories.nodes || [],
    items: (r.discussions.nodes || []).map((d) => ({
      id: d.id,
      number: d.number,
      title: d.title,
      body: d.bodyText || '',
      url: d.url,
      created: d.createdAt,
      votes: d.upvoteCount,
      voted: d.viewerHasUpvoted,
      canVote: d.viewerCanUpvote,
      author: d.author?.login || '—',
      avatar: d.author?.avatarUrl || null,
      categoryId: d.category?.id || null,
      category: d.category?.name || '—',
      comments: d.comments?.totalCount ?? 0,
    })),
  };
}

export async function createIdea({ repositoryId, categoryId, title, body }) {
  // GitHub requires a body; when someone only writes a headline, the headline
  // is the idea, so send it rather than refusing the post.
  const data = await graphql(
    `mutation($repo:ID!,$cat:ID!,$title:String!,$body:String!){
      createDiscussion(input:{repositoryId:$repo,categoryId:$cat,title:$title,body:$body}){
        discussion{ id number url }
      }
    }`,
    { repo: repositoryId, cat: categoryId, title, body: body.trim() || title }
  );
  return data.createDiscussion.discussion;
}

export async function setUpvote(id, on) {
  const m = on ? 'addUpvote' : 'removeUpvote';
  const data = await graphql(
    `mutation($id:ID!){
      ${m}(input:{subjectId:$id}){
        subject{ ... on Discussion { upvoteCount viewerHasUpvoted } }
      }
    }`,
    { id }
  );
  return data[m].subject;
}

export async function moveIdea(id, categoryId) {
  await graphql(
    `mutation($id:ID!,$cat:ID!){
      updateDiscussion(input:{discussionId:$id,categoryId:$cat}){ discussion{ id } }
    }`,
    { id, cat: categoryId }
  );
}

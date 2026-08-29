// All copy and data for join.ts.it, in one place.
//
// Everything here is REAL: the manifesto text is verbatim from the association's
// founding document, the links and the address are live. If a number or a date
// is not something JoiNTS can stand behind, it does not belong in this file —
// the design system's rule is no invented metrics, and an honest empty state
// beats a placeholder project.
//
// Voice, in short (design-system/readme.md has the full rules): Italian, first
// person plural, sentence case, statements end with a full stop, no hype, no
// emoji. `·` separates, `→` points, `—` asides.

export const SITE = {
  title: 'JoiNTS — Robotics Network Trieste',
  description:
    'Associazione di robotica a Trieste. Progettiamo, scriviamo codice e facciamo muovere hardware. Tutto open source, dal primo commit.',
  email: 'info@join.ts.it',
  github: 'https://github.com/RoboticsNetworkTrieste',
  githubLabel: 'github.com/RoboticsNetworkTrieste',
  whatsapp: 'https://chat.whatsapp.com/J99EPLX7dGtDGLHxT2mzm9',
  coords: '45.6495 N · 13.7768 E',
};

// The form endpoint both the join and the notify forms post to.
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgawadww';

export const NAV = [
  { label: 'Manifesto', href: '/manifesto/' },
  { label: 'Progetti', href: '/progetti/' },
  { label: 'Incontri', href: '/incontri/' },
];

export const FOOTER = {
  note: 'Associazione senza scopo di lucro, in costituzione. Tutto ciò che creiamo è open source.',
  columns: [
    {
      title: 'Comunità',
      links: [
        { label: 'Manifesto', href: '/manifesto/' },
        { label: 'Incontri', href: '/incontri/' },
        { label: 'Entra in JoiNTS', href: '/entra/' },
      ],
    },
    {
      title: 'Costruire',
      links: [
        { label: 'Progetti', href: '/progetti/' },
        { label: 'GitHub', href: SITE.github },
        { label: 'WhatsApp', href: SITE.whatsapp },
        { label: 'Officina · soci', href: '/officina/' },
      ],
    },
    {
      title: 'Contatti',
      links: [
        { label: SITE.email, href: `mailto:${SITE.email}` },
        { label: 'Newsletter · in apertura' },
      ],
    },
  ],
  meta: ['Testi CC BY-SA 4.0 · codice Apache-2.0', 'join.ts.it · Trieste, Italia', 'APS in costituzione'],
};

// The seven principles, verbatim from the manifesto. Titles keep their full stop.
export const PRINCIPLES = [
  {
    number: 1,
    title: 'Il nostro motore è la passione.',
    body: 'Facciamo robotica perché ci appassiona la sfida tecnica. È la passione a guidare le nostre scelte, ed è la migliore garanzia che possiamo offrire: quando un problema ci accende, non lo abbandoniamo finché non funziona.',
  },
  {
    number: 2,
    title: 'Costruiamo sistemi reali.',
    body: 'Non ci bastano le parole. Il risultato del nostro lavoro è codice che gira, hardware che si muove, sistemi che funzionano. La concretezza è il nostro metro di giudizio.',
  },
  {
    number: 3,
    title: 'Trasformiamo i problemi in ricerca, e la ricerca in strumenti utili.',
    body: "Un progetto può nascere da un'esigenza del territorio come da un modo nuovo di affrontare un problema noto. Una volta creato uno strumento, il lavoro non è finito: ne mostriamo le applicazioni e lo colleghiamo ai casi d'uso in cui può fare la differenza.",
  },
  {
    number: 4,
    title: 'Tutto ciò che creiamo è aperto.',
    body: "Ogni progetto che sviluppiamo è open source. È un principio, non un'opzione. La conoscenza cresce quando può essere studiata, verificata, riutilizzata e migliorata da chiunque.",
  },
  {
    number: 5,
    title: 'Trieste è la nostra casa, la rete è la nostra piazza.',
    body: 'Ci incontriamo di persona — meetup, hackathon, sfide — perché le idee corrono più veloci quando le persone si guardano in faccia. Ma i nostri progetti vivono in rete e sono aperti al contributo di chiunque, ovunque si trovi.',
  },
  {
    number: 6,
    title: "La porta è aperta, l'asticella è alta.",
    body: 'Chiunque condivida questa passione è benvenuto: professionisti, ricercatori, studenti, autodidatti. Ciò che chiediamo non è un titolo, ma la voglia di mettersi alla prova su problemi difficili.',
  },
  {
    number: 7,
    title: 'Poche cose, fatte fino in fondo.',
    body: 'Scegliamo con cura i progetti su cui investire le nostre energie e li portiamo a termine. Preferiamo un risultato solido a dieci esperimenti lasciati a metà.',
  },
];

// Home — the three figures on the strata band.
export const STATS = [
  { value: '6', label: "meetup all'anno" },
  { value: '100', accentPart: '%', label: 'codice open source' },
  { value: '48', accentPart: 'h', label: 'hackathon' },
];

// Home — the six technical strands.
export const DISCIPLINE = [
  { title: 'Robotica', body: 'Navigazione, SLAM e controllo: nodi ROS 2 su rig reali.' },
  { title: 'Intelligenza artificiale', body: 'Percezione, visione e calibrazione, con inferenza a bordo.' },
  { title: 'Simulazione e 3D', body: 'Modelli, ambienti e digital twin per provare prima di costruire.' },
  { title: 'Meccanica', body: 'Telai, trasmissioni e cinematica, tra CAD e stampa 3D.' },
  { title: 'Elettronica', body: 'Schede di controllo, alimentazione, sensori e firmware.' },
  { title: 'Dati e infrastruttura', body: 'Dataset, CI e documentazione: ciò che tiene in piedi i progetti.' },
];

// Home — what comes out of a project.
export const ESITI = [
  { title: 'Collaborazioni', body: 'Persone e gruppi che si incontrano su un problema comune e proseguono insieme.' },
  { title: 'Le imprese di domani', body: "Da un prototipo funzionante può nascere un prodotto, e da un gruppo di lavoro un'impresa." },
  { title: 'Ricerca scientifica', body: 'Metodi e risultati pubblici, riutilizzabili da chi fa ricerca a Trieste e altrove.' },
];

// Home — where the association lives online. `tone: 'ok'` is a live channel;
// no tone means it is announced but not open yet, and says so.
export const CHANNELS = [
  { name: 'GitHub', text: 'Tutti i repository, pubblici dal primo commit.', badge: 'attivo', tone: 'ok', href: SITE.github },
  { name: 'Sito', text: 'join.ts.it — manifesto, progetti e prossimi incontri.', badge: 'attivo', tone: 'ok' },
  { name: 'WhatsApp', text: 'Il canale di confronto quotidiano tra i soci.', badge: 'attivo', tone: 'ok', href: SITE.whatsapp },
  { name: 'LinkedIn', text: 'Il riferimento per ricercatori, università e aziende.', badge: 'in apertura', muted: true },
  { name: 'Newsletter', text: 'Aggiornamenti sui repository e sui prossimi incontri.', badge: 'in apertura', muted: true },
];

// Incontri — the four steps, in order. `dot: true` puts a status dot next to
// the step index; only the step currently under way carries it.
export const ROADMAP = [
  { title: 'Costituzione', body: 'Statuto, registrazione e ruoli definiti tra i fondatori.', dot: true },
  { title: 'Lancio open', body: 'Canali ufficiali attivi e primo repository pubblico.' },
  { title: 'Primi meetup', body: 'Un intervento tecnico, un problema aperto, il tempo per discuterne.' },
  { title: 'Primi hackathon', body: 'Due giorni su un obiettivo: da qui nascono i primi progetti.' },
];

// Entra — the three steps to joining.
export const JOIN_STEPS = [
  'Scrivici dal sito e leggi il manifesto.',
  'Vieni al primo incontro.',
  'Porta un problema su cui vuoi lavorare.',
];

// SpecTable rows: [key, value, note?]. Keys lowercase — the CSS uppercases them.
export const ROWS_CHI_SIAMO = [
  ['forma', 'associazione no-profit', 'in costituzione'],
  ['licenza', 'open source', 'ogni progetto, dal primo commit'],
  ['sede', 'Trieste, Italia', SITE.coords],
];

export const ROWS_CTA = [
  ['scrivici', SITE.email],
  ['codice', SITE.githubLabel],
  ['prossimo incontro', 'in definizione', 'lo annunciamo sui canali ufficiali'],
];

export const ROWS_MEETUP = [
  ['formato', 'serale · 2h'],
  ['contenuto', 'un intervento tecnico + un problema aperto'],
  ['accesso', 'aperto a chiunque', 'nessuna quota'],
  ['luogo', 'Trieste', 'da definire'],
];

export const ROWS_CONTATTI = [
  ['email', SITE.email],
  ['github', SITE.githubLabel],
  ['whatsapp', 'gruppo soci', 'link in pagina'],
  ['sede', 'Trieste, Italia', '45.6495 N'],
  ['ente', 'APS in costituzione'],
];

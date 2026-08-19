import React from 'react';
import { Field } from '../../design-system/components/forms/Field.jsx';
import { Input } from '../../design-system/components/forms/Input.jsx';
import { Textarea } from '../../design-system/components/forms/Textarea.jsx';
import { Checkbox } from '../../design-system/components/forms/Checkbox.jsx';
import { Button } from '../../design-system/components/core/Button.jsx';
import { Alert } from '../../design-system/components/feedback/Alert.jsx';
import { FORMSPREE_ENDPOINT, SITE, DISCIPLINE } from '../content.js';
import { postForm } from '../formspree.js';

/** The membership form on /entra/. */
export function JoinForm() {
  const [state, setState] = React.useState('idle');

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setState('sending');
    postForm(FORMSPREE_ENDPOINT, form).then((ok) => {
      if (ok) form.reset();
      setState(ok ? 'ok' : 'error');
    });
  };

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <input type="hidden" name="_subject" value="Nuova richiesta di adesione a TORC" />
      {/* Formspree's honeypot: a bot fills it, a person never sees it. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <Field label="Nome" required>
          <Input name="nome" required placeholder="Nome e cognome" />
        </Field>
        <Field label="Email" required>
          <Input type="email" name="email" required placeholder="nome@dominio.it" />
        </Field>
      </div>

      {/* The same six strands the site lists elsewhere — one source, so the
          form can never offer a filone the site does not talk about. */}
      <Field label="Filoni che ti interessano" hint="Scegli quelli su cui vuoi lavorare, anche più di uno.">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 28px', paddingTop: '4px' }}>
          {DISCIPLINE.map((d) => (
            <Checkbox key={d.title} name="filoni" value={d.title} label={d.title} />
          ))}
        </div>
      </Field>

      <Field label="Cosa sai fare" hint="Progetti, strumenti, hardware — e su cosa vorresti lavorare.">
        <Textarea name="messaggio" placeholder="Scrivi qui" />
      </Field>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Button variant="primary" size="lg" mono type="submit" disabled={state === 'sending'} iconEnd="arrow-right">Invia richiesta</Button>
        <span className="torc-hud-label">Rispondiamo via email a {SITE.email}</span>
      </div>

      {state === 'ok' && (
        <Alert tone="ok" title="Richiesta inviata.">Ti rispondiamo via email. Nel frattempo puoi chiedere di entrare nel gruppo WhatsApp.</Alert>
      )}
      {state === 'error' && (
        <Alert tone="danger" title="Invio non riuscito.">Riprova tra poco, oppure scrivici direttamente a {SITE.email}.</Alert>
      )}
    </form>
  );
}

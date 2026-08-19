import React from 'react';
import { Field } from '../../design-system/components/forms/Field.jsx';
import { Input } from '../../design-system/components/forms/Input.jsx';
import { Button } from '../../design-system/components/core/Button.jsx';
import { Alert } from '../../design-system/components/feedback/Alert.jsx';
import { FORMSPREE_ENDPOINT, SITE } from '../content.js';
import { postForm } from '../formspree.js';

/**
 * "Avvisami quando ci sono date" — the mail signup on /incontri/.
 * One of only two interactive things on the site, so one of only two islands.
 */
export function NotifyBlock() {
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
    <>
      <div style={{ border: '1px solid var(--border-subtle)', borderRadius: '3px', padding: '40px', display: 'grid', gridTemplateColumns: '1fr auto', gap: '48px', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 600, letterSpacing: '-.02em', color: 'var(--text-strong)', margin: 0 }}>Il calendario verrà definito al primo incontro.</h2>
          <p style={{ fontSize: '17px', lineHeight: 1.6, color: 'var(--text-secondary)', margin: '12px 0 0', maxWidth: '52ch' }}>Lascia la tua email e ti scriviamo quando fissiamo le prime date.</p>
        </div>
        <form onSubmit={onSubmit} style={{ display: 'flex', gap: '12px', alignItems: 'flex-end' }}>
          <input type="hidden" name="_subject" value="Nuova iscrizione agli avvisi TORC" />
          {/* Formspree's honeypot: a bot fills it, a person never sees it. */}
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />
          <Field label="Email">
            <Input type="email" name="email" required placeholder="nome@dominio.it" />
          </Field>
          <Button variant="secondary" size="md" mono type="submit" disabled={state === 'sending'}>Avvisami</Button>
        </form>
      </div>

      {state === 'ok' && (
        <div style={{ marginTop: '16px' }}>
          <Alert tone="ok" title="Email registrata.">Ti scriviamo appena il calendario è pronto.</Alert>
        </div>
      )}
      {state === 'error' && (
        <div style={{ marginTop: '16px' }}>
          <Alert tone="danger" title="Invio non riuscito.">Riprova, oppure scrivici a {SITE.email}.</Alert>
        </div>
      )}
    </>
  );
}

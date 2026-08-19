/**
 * Posts a form to Formspree and reports success as a boolean.
 *
 * Both site forms submit through here so the two islands cannot drift apart
 * in how they handle a failed send. A network error and a non-2xx response
 * are the same thing to the caller: the message did not arrive.
 */
export function postForm(endpoint, form) {
  return fetch(endpoint, {
    method: 'POST',
    body: new FormData(form),
    headers: { Accept: 'application/json' },
  })
    .then((r) => r.ok)
    .catch(() => false);
}

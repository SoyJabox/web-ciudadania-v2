/* Repaso local: no envía ni guarda respuestas. */
document.querySelectorAll('[data-quiz]').forEach((form) => {
  const groups = [...form.querySelectorAll('fieldset')];
  const result = form.querySelector('.quiz-result');
  let reviewed = false;
  function clearFeedback() {
    groups.forEach((group) => {
      group.classList.remove('is-correct', 'is-incorrect');
      group.querySelector('.quiz-feedback').hidden = true;
      group.querySelector('.quiz-explanation').hidden = true;
    });
    result.textContent = '';
    reviewed = false;
  }
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearFeedback();
    const missing = groups.filter((group) => !group.querySelector('input:checked'));
    if (missing.length) {
      result.textContent = `Falta responder ${missing.length} de las ${groups.length} preguntas. Revisá las que quedaron sin marcar.`;
      missing[0].querySelector('input').focus();
      return;
    }
    let correct = 0;
    groups.forEach((group) => {
      const answer = group.querySelector('input:checked');
      const ok = answer.value === group.dataset.answer;
      if (ok) correct++;
      const feedback = group.querySelector('.quiz-feedback');
      const solution = group.querySelector(`input[value="${group.dataset.answer}"]`).nextElementSibling.textContent;
      feedback.textContent = ok ? 'Respuesta correcta.' : `Para revisar. La respuesta es: ${solution}`;
      feedback.hidden = false;
      group.querySelector('.quiz-explanation').hidden = false;
      group.classList.add(ok ? 'is-correct' : 'is-incorrect');
    });
    result.textContent = `${correct} de ${groups.length} respuestas correctas. Leé las explicaciones para revisar lo aprendido. Podés volver a intentarlo.`;
    reviewed = true;
  });
  form.addEventListener('change', () => {
    if (reviewed) {
      clearFeedback();
      result.textContent = 'Cambiaste una respuesta. Pulsá «Revisar respuestas» para comprobarlas nuevamente.';
    }
  });
  form.addEventListener('reset', clearFeedback);
  form.querySelector('.quiz-controls').hidden = false;
});

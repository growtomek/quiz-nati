// === Quiz Powiśle dla Nati === //

let score = 0;
const answered = { q1: false, q2: false, q3: false, q4: false, q5: false };

function goTo(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById('screen-' + screenId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  if (screenId === 'end') {
    document.getElementById('score').textContent = score;
  }
}

// Pytanie 1 — wpisywana liczba (512)
function checkQ1() {
  if (answered.q1) return;
  const input = document.getElementById('ans-q1');
  const fb = document.getElementById('fb-q1');
  const val = parseInt(input.value, 10);

  if (isNaN(val)) {
    fb.textContent = 'Wpisz liczbę 🙂';
    fb.className = 'feedback no';
    return;
  }

  answered.q1 = true;
  input.disabled = true;

  if (val === 512) {
    score++;
    fb.textContent = '✨ Brawo! 512 — dokładnie tu jesteśmy!';
    fb.className = 'feedback ok';
  } else {
    fb.textContent = `Prawie! Prawidłowa odpowiedź: 512 km`;
    fb.className = 'feedback no';
  }

  setTimeout(() => goTo('q2'), 1800);
}

// Pytania 2–5 — wybór z opcji
function checkOption(btn, qId, nextScreen) {
  if (answered[qId]) return;
  answered[qId] = true;

  const isCorrect = btn.dataset.correct === 'true';
  const fb = document.getElementById('fb-' + qId);
  const allOpts = btn.parentElement.querySelectorAll('.option');

  allOpts.forEach(o => {
    o.disabled = true;
    if (o.dataset.correct === 'true') o.classList.add('correct');
  });

  if (isCorrect) {
    score++;
    btn.classList.add('correct');
    fb.textContent = '🎉 Super! Zgadza się!';
    fb.className = 'feedback ok';
  } else {
    btn.classList.add('wrong');
    fb.textContent = '🌸 Nie tym razem — zielona to prawidłowa.';
    fb.className = 'feedback no';
  }

  setTimeout(() => goTo(nextScreen), 1800);
}

function restart() {
  score = 0;
  Object.keys(answered).forEach(k => answered[k] = false);

  // Reset Q1
  const q1Input = document.getElementById('ans-q1');
  q1Input.value = '';
  q1Input.disabled = false;
  document.getElementById('fb-q1').textContent = '';

  // Reset opcji
  document.querySelectorAll('.option').forEach(o => {
    o.disabled = false;
    o.classList.remove('correct', 'wrong');
  });

  document.querySelectorAll('.feedback').forEach(f => {
    f.textContent = '';
    f.className = 'feedback';
  });

  goTo('welcome');
}

// Enter w polu Q1
document.addEventListener('DOMContentLoaded', () => {
  const q1Input = document.getElementById('ans-q1');
  if (q1Input) {
    q1Input.addEventListener('keypress', e => {
      if (e.key === 'Enter') checkQ1();
    });
  }
});

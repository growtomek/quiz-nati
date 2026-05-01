# Quiz Powiśle dla Nati 💗

Mały quiz dla Nati od Hani i Heli — zaproszenie na podchody po Powiślu.

## Jak opublikować na GitHub Pages

1. Wejdź na https://github.com/new
2. Nazwa repo: **`quiz-nati`** (musi być dokładnie taka, żeby pasowała do QR kodu)
3. Ustaw repo jako **Public**
4. Kliknij "Create repository"
5. Wgraj wszystkie pliki z tego folderu (przeciągnij przez przeglądarkę albo `git push`)
6. W repo: **Settings → Pages → Source: `main` branch, folder: `/ (root)` → Save**
7. Po ~1 minucie strona będzie pod: **https://growtomek.github.io/quiz-nati/**

QR kod na zaproszeniu prowadzi dokładnie tam.

## Pliki

- `index.html` — strona quizu
- `style.css` — style
- `script.js` — logika
- `img/` — zdjęcia (bunkier do pyt. 4, dziewczynki przy 512 na ekran końcowy)

## Edycja pytań

Wszystkie pytania i odpowiedzi są w `index.html`. Każde pytanie ma swoją sekcję `<section id="screen-qN">`. Atrybut `data-correct="true"` na opcji oznacza prawidłową odpowiedź.

Liczba 512 jest hardkodowana w `script.js` w funkcji `checkQ1()`.

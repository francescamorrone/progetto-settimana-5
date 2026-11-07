# 🌱 Bloom — Studio di design

Sito vetrina single-page per **Bloom**, uno studio creativo di identità visiva, web design e motion graphic.
Progetto realizzato con HTML, CSS e JavaScript vanilla, senza framework né librerie JS.

## Anteprima

<img src="assets/img/preview.png" alt="Anteprima di Bloom" width="600">

🔗 **Demo live:** https://francescamorrone.github.io/progetto-settimana-5/

## Funzionalità

- **Header sticky dinamico:** diventa compatto e cambia colore quando si scorre la pagina (soglia di 50px).
- **Hero** con animazioni di entrata scaglionate e pulsante CTA.
- **Sezioni** Lavori, Servizi, Team e Recensioni, con card che si sollevano al passaggio del mouse.
- **Carosello di recensioni solo CSS:** scorrimento continuo a loop, con pausa al passaggio del mouse.
- **Modale "Richiedi preventivo"** con form di contatto. Si chiude con il pulsante ×, con il tasto `Esc` o cliccando sullo sfondo scuro.
- **Tema chiaro/scuro** con toggle nell'header.
- **Design responsive** mobile-first, con breakpoint a 768px e 1200px.
- **Accessibilità:** `aria-label` su link e pulsanti, attributo `hidden` per gli elementi nascosti, rispetto di `prefers-reduced-motion`.

## Tecnologie

| Tecnologia | Uso |
| --- | --- |
| HTML5 | Struttura semantica (`header`, `main`, `section`, `article`, `footer`) |
| CSS3 | Flexbox, CSS nesting, `clamp()`, `@keyframes`, `mask-image`, media query |
| JavaScript (ES6) | Modale, form, dark mode, header allo scroll |
| [Font Awesome 6.5](https://fontawesome.com/) | Icone, caricate da CDN |


## Struttura del progetto

```
progetto-settimana-5/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── img/
    │   ├── favicon.svg
    │   └── preview.png
    └── js/
        └── script.js
```

## Come avviarlo

Non servono installazioni né build.

1. Clona il repository:
   ```bash
   git clone https://github.com/<tuo-username>/<nome-repo>.git
   ```
2. Apri `index.html` nel browser, oppure usa un server locale (ad esempio l'estensione **Live Server** di VS Code).


## Palette

| Colore | Valore |
| --- | --- |
| Verde principale | `hsl(150, 60%, 30%)` |
| Verde chiaro (hover, sfondi) | `hsl(150, 60%, 95%)` |
| Sfondo chiaro | `#fafafa` |
| Sfondo scuro | `#121212` |
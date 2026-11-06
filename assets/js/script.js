// Bloom — Week Project Settimana V
//
// Aggiungi qui il codice JavaScript se serve (es. modale, scroll handler).
// Per la Versione Base spesso non serve niente: tutto si fa in CSS.

const overlay = document.querySelector('.overlay');
const apriContatti = document.querySelector('#open-modal');
const chiusiContatti = document.querySelector('#close-modal');
const myForm = document.querySelector('.modal-form');
const submitForm = document.querySelector(".btn-submit");
const darkModeToggle = document.querySelector('#dark-mode-toggle');

const tutteLeSezioni = document.querySelectorAll('#site-main section');
const navLinks = document.querySelectorAll('.site-nav a');


apriContatti.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.removeAttribute("hidden"); 
    document.body.style.overflow = "hidden";
});

chiusiContatti.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.setAttribute("hidden", ""); 
    document.body.style.overflow = "";
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        overlay.setAttribute("hidden", "");
        document.body.style.overflow = "";
    }
});

overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.setAttribute("hidden", "");
        document.body.style.overflow = "";
    }
});

const successMsg = document.querySelector('#success-msg');

myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    successMsg.removeAttribute("hidden");

    setTimeout(() => {
        overlay.setAttribute("hidden", "");
        document.body.style.overflow = "";
        myForm.reset();
        successMsg.setAttribute("hidden", "");
    }, 3000);
});

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

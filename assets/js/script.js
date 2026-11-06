
const overlay = document.querySelector('.overlay');
const apriContatti = document.querySelector('#open-modal');
const chiusiContatti = document.querySelector('#close-modal');
const myForm = document.querySelector('.modal-form');
const submitForm = document.querySelector(".btn-submit");
const darkModeToggle = document.querySelector('#dark-mode-toggle');

const tutteLeSezioni = document.querySelectorAll('#site-main section');
const navLinks = document.querySelectorAll('.site-nav a');

const header = document.querySelector('header');


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



window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});
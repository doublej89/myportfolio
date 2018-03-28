const navToggle = document.querySelector('.menu');
const nav = document.querySelector('nav');
const containerAll = document.querySelector('.container-all');
navToggle.addEventListener('click', () => {
    containerAll.style.transition = 'transform ease-in-out 250ms';
    document.body.classList.toggle('nav-is-open');
});
nav.addEventListener('click', () => {
    containerAll.style.transition = '0ms';
    document.body.classList.remove('nav-is-open');
});
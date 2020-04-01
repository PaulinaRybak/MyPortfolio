const button = document.getElementsByClassName('main-header-button')[0];
const navLinks = document.getElementsByClassName('nav-links')[0];
const burger = document.querySelector('.main-header-button');

button.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    burger.classList.toggle('toggle');

});




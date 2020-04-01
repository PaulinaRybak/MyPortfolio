const button = document.getElementsByClassName('main-header-button')[0];
const navLinks = document.getElementsByClassName('nav-links')[0];

button.addEventListener('click', () => {
    navLinks.classList.toggle('open');

});



const portugal = document.querySelector('#portugal');
const australia = document.querySelector('#australia');
const srilanka = document.querySelector('#srilanka');
const usa = document.querySelector('#usa');

const close = document.querySelectorAll('.close');
const formBMsg = document.querySelector('.submit-booking');
const formQMsg = document.querySelector('.submit-question');

const home = document.querySelector('body');
const about = document.querySelector('#about');
const surfcamp = document.querySelector('#surfcamp');
const contact = document.querySelector('#contact');
const checkbox = document.querySelector('#checkbox');

portugal.addEventListener('click', function (evt) {
    window.location.href = 'portugal.html';
});

australia.addEventListener('click', function (evt) {
    window.location.href = 'australia.html';
});

srilanka.addEventListener('click', function (evt) {
    window.location.href = 'srilanka.html';
});

usa.addEventListener('click', function (evt) {
    window.location.href = 'usa.html';
});


// Hamburger menu click event
/* home.addEventListener('click', function (evt) {
    checkbox.checked = false;
}); */

about.addEventListener('click', function (evt) {
    checkbox.checked = false;
});

surfcamp.addEventListener('click', function (evt) {
    checkbox.checked = false;
});

contact.addEventListener('click', function (evt) {
    checkbox.checked = false;
});
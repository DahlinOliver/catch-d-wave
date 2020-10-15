const portugal = document.querySelector('#portugal');
const australia = document.querySelector('#australia');
const srilanka = document.querySelector('#srilanka');
const usa = document.querySelector('#usa');

const close = document.querySelectorAll('.close');
const formBMsg = document.querySelector('.submit-booking');
const formQMsg = document.querySelector('.submit-question');

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
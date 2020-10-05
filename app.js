// https://www.youtube.com/watch?v=RxnV9Xcw914

const navbar = document.querySelector('header');
const hero = document.querySelector('.hero');
const about = document.querySelector('#about');
const surfcamp = document.querySelector('#surfcamp');

const cards = document.querySelector('.cards');

const aboutOptions = {
    rootMargin: "-150px 0px 0px 0px"
};

const surfcampOptions = {
    rootMargin: "-150px 0px 0px 0px"
};

const aboutObserver = new IntersectionObserver(function (entries, aboutObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navbar.classList.add('scrolled-about');
        } else {
            navbar.classList.remove('scrolled-about');
        }
    });
}, aboutOptions);

aboutObserver.observe(hero);

const surfcampObserver = new IntersectionObserver(function (entries, surfcampObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navbar.classList.add('scrolled-surfcamp');
        } else {
            navbar.classList.remove('scrolled-surfcamp');
        }
    });
}, surfcampOptions);

surfcampObserver.observe(about);
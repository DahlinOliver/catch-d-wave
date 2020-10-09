const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const h1Booking = document.getElementById('h1-booking');
const h1Question = document.getElementById('h1-question');
let bookingMsg = document.querySelector('.submit-booking');
let questionMsg = document.querySelector('.submit-question');
// let feedbackMsg = document.querySelector('.submit-feedback');

// Add eventlistener for when form is submitted
// And execute check form inputs function

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();

    let numError = document.querySelectorAll('.error').length;
    if (numError === 0) {
        showMessage(subject.value);
        /*        if (subject.value === 'booking') {
                   bookingMsg.classList.add('visible');
                   h1Booking.innerHTML = "Thanks " + firstname.value + " for your booking";
       
               } else if (subject.value === 'question') {
                   questionMsg.classList.add('visible');
                   h1Question.innerHTML = "Thanks " + firstname.value + " for your question!";
       
               }  */
        //bookingSubmit();
        //questionSubmit();
    }
});

function showMessage(chosenSubject) {
    // subject = 'booking'
    let element = document.querySelector(`.submit-${chosenSubject}`);
    let chosenHeader = element.firstElementChild
    chosenHeader.innerHTML = `Thanks ${firstname.value} for your ${chosenSubject}!`;
    element.classList.add('visible');
}

function checkInputs() {
    // get the values from the inputs and remove whitespaces with trim()
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();

    if (firstnameValue === '') {
        //add error class
        setErrorFor(firstname, 'First Name cannot be blank');
    } else {
        // add success class
        setSuccessFor(firstname)
    }

    if (lastnameValue === '') {
        setErrorFor(lastname, 'Last Name cannot be blank');
    } else {
        setSuccessFor(lastname);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if (subjectValue === '') {
        setErrorFor(subject, 'Must choose a subject');
    } else {
        setSuccessFor(subject);
    }

    if (messageValue === '') {
        setErrorFor(message, 'Must write something');
    } else {
        setSuccessFor(message);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const errorMsg = formControl.querySelector('p');

    // add error message inside p tag
    errorMsg.innerText = message;

    // add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    //add success class
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// Add function for making bookingMsg visible

function bookingSubmit() {

    let bookingMsg = document.querySelector('.submit-booking');

    if (subject.value === 'booking') {
        bookingMsg.classList.add('visible');
        h1Booking.innerHTML = "Thanks " + firstname.value + " for booking with us!";
    }
}

// Add function for making questionMsg visible

function questionSubmit() {

    let questionMsg = document.querySelector('.submit-question');

    if (subject.value === 'question') {
        questionMsg.classList.add('visible');
        h1Question.innerHTML = "Thanks " + firstname.value + " for your question!";
    }
}
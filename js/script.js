/* ------Constants------ */
// This array stores all the  objects that are made when user submits the form.
const objectArray = [];

/* ------Class------ */
class User {
	constructor(name, email, message) {
		this.name = name;
		this.email = email;
		this.message = message;
	}
}

/* ------Cached Elements------ */

// The following code is for Modals in the interest section
const poem1 = document.querySelector('#munif1');
const poem2 = document.querySelector('#munif2');
const poem3 = document.querySelector('#fl');
const poem4 = document.querySelector('#grief');
const poem5 = document.querySelector('#superman');
const poem6 = document.querySelector('#geisel');

const modalBg = document.querySelector('.modal-bg');
const modalBg2 = document.querySelector('.modal-bg-2');
const modalBg3 = document.querySelector('.modal-bg-3');
const modalBg4 = document.querySelector('.modal-bg-4');
const modalBg5 = document.querySelector('.modal-bg-5');
const modalBg6 = document.querySelector('.modal-bg-6');

const modalCloseContainer = document.querySelector('.modal-close-container');
const modalCloseContainer2 = document.querySelector('.modal-close-container-2');
const modalCloseContainer3 = document.querySelector('.modal-close-container-3');
const modalCloseContainer4 = document.querySelector('.modal-close-container-4');
const modalCloseContainer5 = document.querySelector('.modal-close-container-5');
const modalCloseContainer6 = document.querySelector('.modal-close-container-6');

// The following code allows us to use side nav elements
const hamburgerEl = document.querySelector('.hamburger-img');
const navClose = document.querySelector('.nav-close');
const smallNav = document.querySelector('.small-nav');
// The following code is for the form on the 'Contact' section

/* ------Event Listeners------ */
// The following code is for Modals in the interest section
poem1.addEventListener('click', function () {
	modalBg.classList.add('bg-active');
});
poem2.addEventListener('click', function () {
	modalBg2.classList.add('bg-active-2');
});
poem3.addEventListener('click', function () {
	modalBg3.classList.add('bg-active-3');
});
poem4.addEventListener('click', function () {
	modalBg4.classList.add('bg-active-4');
});
poem5.addEventListener('click', function () {
	modalBg5.classList.add('bg-active-5');
});
poem6.addEventListener('click', function () {
	modalBg6.classList.add('bg-active-6');
});

modalCloseContainer.addEventListener('click', function () {
	modalBg.classList.remove('bg-active');
});
modalCloseContainer2.addEventListener('click', function () {
	modalBg2.classList.remove('bg-active-2');
});
modalCloseContainer3.addEventListener('click', function () {
	modalBg3.classList.remove('bg-active-3');
});
modalCloseContainer4.addEventListener('click', function () {
	modalBg4.classList.remove('bg-active-4');
});
modalCloseContainer5.addEventListener('click', function () {
	modalBg5.classList.remove('bg-active-5');
});
modalCloseContainer6.addEventListener('click', function () {
	modalBg6.classList.remove('bg-active-6');
});

// The following code is for the form on the 'Contact' section

const nameInput = document.querySelector('#your-name');
const emailInput = document.querySelector('#your-email');
const yourMessage = document.querySelector('#textarea-message');
const btn = document.querySelector('button');
console.log(btn);

// The following is the event listener that records form data by creating objects and storing them in array, when the submit button is clicked.

btn.addEventListener('click', createObjects);

// The following code activates small Nav
hamburgerEl.addEventListener('click', () => {
	smallNav.classList.add('activate-nav');
});
navClose.addEventListener('click', () => {
	smallNav.classList.remove('activate-nav');
});

/*----- functions -----*/
// The following function creates an object every time a user submits a form. All objects are then stored in an array called 'objectArray'. the function also clears all text from

function createObjects(event) {
	event.preventDefault();
	objectArray.push(
		new User(nameInput.value, emailInput.value, yourMessage.value)
	);
	console.log(objectArray);
	nameInput.value = '';
	emailInput.value = '';
	yourMessage.value = '';
	alert('Thank you for submitting your message!');
}

// Cached Elements
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
// const

//  Event Listeners
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

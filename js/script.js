const poem = document.querySelector('#munif1');
console.log(poem)
const modalBg = document.querySelector('.modal-bg');

poem.addEventListener('click', function(){
    modalBg.classList.add('bg-active')
})
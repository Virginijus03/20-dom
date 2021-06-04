let rezultatas = 0;
const minusDOM = document.querySelector('.minus');
const plusDOM = document.querySelector('.plus');
const numberDOM = document.querySelector('.number');
const resetDOM = document.querySelector('.reset');
const h1DOM = document.querySelector('h1');
const h1 = 'Te prasideda žaidynės! 🥳';

minusDOM.addEventListener('click', () => {
    numberDOM.innerText = --rezultatas;
    h1DOM.innerText = 'Žaidimas progrese';
})

plusDOM.addEventListener('click', () => {
    numberDOM.innerText = ++rezultatas;
    h1DOM.innerText = 'Žaidimas progrese';
})

resetDOM.addEventListener('click', () => {
    numberDOM.innerText = 0;
    h1DOM.innerText = h1;
})
/*
const hamburgerDOM = document.querySelector('.hamburger');
const navDOM = document.querySelector('nav');


console.log(hamburgerDOM);
console.log(navDOM);

hamburgerDOM.addEventListener('click', () => {
    navDOM.classList.toggle('visible');
})

/*const liDOM = document.querySelectorAll('li');
liDOM.classList.add('darzove');
console.log(liDOM);*/

const minusDOM = document.querySelector('.minus');
const plusDOM = document.querySelector('.plus');
const numberDOM = document.querySelector('.number');
const resetDOM = document.querySelector('.reset');
const h1DOM = document.querySelector('h1');
const h1 = 'Te prasideda žaidynės! 🥳';

minusDOM.addEventListener('click', () => {
    rezultatas = rezultatas - 1;
    numberDOM.innerText = rezultatas;
    h1DOM.innerText = 'Žaidimas progrese';
})

plusDOM.addEventListener('click', () => {
    h1DOM.innerText = 'Žaidimas progrese';
})

resetDOM.addEventListener('click', () => {
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
const buttonDOM = document.querySelector('button');
const inputDOM = document.querySelector('input');
const spanDOM = document.querySelector('span');

buttonDOM.addEventListener('click', (event) => {
    event.preventDefault();
    spanDOM.innerText = inputDOM.value;
    inputDOM.value = '';
})





/*let rezultatas = 0;
const minusDOM = document.querySelector('.minus');
const plusDOM = document.querySelector('.plus');
const numberDOM = document.querySelector('.number');
const resetDOM = document.querySelector('.reset');
const h1DOM = document.querySelector('h1');
const ulDOM = document.querySelector('ul');

const h1 = 'Te prasideda žaidynės! 🥳';
const gameInProgressMessage = 'Žaidimas progrese';

ulDOM.innerHTML = `<li>Tu pasileidai zaidima - sekmes!</li>`;

minusDOM.addEventListener('click', () => {
    numberDOM.innerText = --rezultatas;
    h1DOM.innerText = gameInProgressMessage;
    ulDOM.innerHTML += `<li> Paspaudei minusa ir dabartinis rezultatas yra ${rezultatas}.</li>`;
})

plusDOM.addEventListener('click', () => {
    numberDOM.innerText = ++rezultatas;
    h1DOM.innerText = gameInProgressMessage;
    ulDOM.innerHTML += `<li> Paspaudei pliusa ir dabartinis rezultatas yra  ${rezultatas}.</li>`;
})

resetDOM.addEventListener('click', () => {
    rezultatas = 0;
    numberDOM.innerText = rezultatas;
    h1DOM.innerText = h1;
    ulDOM.innerHTML += `<li> Paspaudei reset ir dabartinis rezultatas yra  ${rezultatas}.</li>`;
})
*/



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
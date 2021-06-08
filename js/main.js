const orderDOM = document.querySelector('.order');
const buttonDOM = document.querySelector('button');
const customerDOM = document.querySelector('#customer');
const sriubaDOM = document.querySelector('#sriuba');
const patiekalasDOM = document.querySelector('#patiekalas');
const desertasDOM = document.querySelector('#desertas');
const gerimaiDOM = document.querySelectorAll('input[name="gerimas"]');

function checkedItems(item) {
    return item.checked ? "nori" : "nenori";
}

function kurisPazymetas(DOMlist) {
    for (const itemDOM of DOMlist) {
        if (itemDOM.checked) {
            return itemDOM.value;
        }
    }
}

buttonDOM.addEventListener('click', e => {
    e.preventDefault();

    const pasirinktasGerimas = kurisPazymetas(gerimaiDOM);

    const drink = pasirinktasGerimas ? pasirinktasGerimas + ' yra pasirinktas gerimas' : 'gerimo nepasirinko';
    let kreipinys = customerDOM.value === '' ? 'nepateikes vardo' : 'vardu ' + customerDOM.value;

    orderDOM.innerText = `Klientas ${kreipinys} ${checkedItems(sriubaDOM)} sriubos,
    ${checkedItems(patiekalasDOM)} pagrindinio patiekalo, 
    ${checkedItems(desertasDOM)} deserto,
    ${drink}.`;
})

















/*const buttonDOM = document.querySelector('button');
const inputDOM = document.querySelector('input');
const spanDOM = document.querySelector('span');
const inputBgColor = document.querySelector('#bg-color');
const inputTextColor = document.querySelector('#text-color');

inputDOM.style.color = 'red';

buttonDOM.addEventListener('click', (event) => {
    event.preventDefault();
    spanDOM.innerText = inputDOM.value;
    inputDOM.value = '';
    spanDOM.style.backgroundColor = inputBgColor.value;
    spanDOM.style.color = inputTextColor.value;
})*/





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
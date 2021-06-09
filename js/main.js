function generuotiSocials(selector, icons) {

    if (selector === '' ||
        typeof selector !== 'string') {
        console.error('ERROR: teksto nerasta!!!');
        return false;
    }
    if (!Array.isArray(icons) ||
        icons.length === 0) {
        console.error('ERROR: teksto nerasta!!!');
        return false;
    }
    const iconsDOM = document.querySelector(selector);
    if (!iconsDOM) {
        console.error('ERROR: teksto nerasta!!!');
        return false;
    }

    let HTML = '';
    for (let i = 0; i < icons.length; i++) {
        if (typeof icons[i] === 'string' &&
            icons[i] !== '') {
            HTML += `<i class="fa fa-${icons[i]}"></i>`;
            console.log(icons[i]);
        }
    }
    iconsDOM.innerHTML = HTML;
}

const icons = ['facebook', 'twitter', 5, [], '', 'linkedin', 'pinterest'];
generuotiSocials('.socials', icons);


/*
 <!-- <i class="fa fa-facebook"></i> -->
Priimamas ikonu sarasas turi buti ne tuscias array

Funkcijos uzduotis, pagal duota ikonu sarasa sugeneruoti <i> elementus, kuriuose class atribute
bus nurodytos atitinkamu fontAwesome ikonu klasiu pavadinimai

Visas sugeneruotas tekstinis HTML turi buti istatytas i nurodyta selector'iaus elementa
*/

/*function generuotiLenta(selector, count) {
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('ERROR: lentos nerasta!!!');
        return false;
    }
    if (count < 0 ||
        count % 1 !== 0) {
        return false;
    }
    let HTML = '';
    for (let i = 1; i <= count; i++) {
        HTML += `<div>${i}</div>`;
    }
    DOM.innerHTML = HTML;
}

generuotiLenta('.lenta', 4);*/

/*const lentaDOM = document.querySelector('.lenta');
const rezNamuDOM = lentaDOM.querySelector('[data-komanda="namu"]');
const rezSveciuDOM = lentaDOM.querySelector('[data-komanda="sveciu"]');

const aiksteleDOM = document.querySelector('.aikstele');
const aikNamuDOM = aiksteleDOM.querySelector('[data-komanda="namu"]');
const taskaiNamuDOM = aikNamuDOM.querySelectorAll('button');

const aikSveciuDOM = aiksteleDOM.querySelector('[data-komanda="sveciu"]');
const taskaiSveciuDOM = aikSveciuDOM.querySelectorAll('button');

let namuTaskai = 0;
for (let i = 0; i < taskaiNamuDOM.length; i++) {
    const mygtukas = taskaiNamuDOM[i];
    mygtukas.addEventListener('click', () => {
        namuTaskai += i + 1;
        rezNamuDOM.innerText = namuTaskai;
    })
}
let sveciuTaskai = 0;
for (let i = 0; i < taskaiSveciuDOM.length; i++) {
    const mygtukas = taskaiSveciuDOM[i];
    mygtukas.addEventListener('click', () => {
        sveciuTaskai += i + 1;
        rezSveciuDOM.innerText = sveciuTaskai;
    })
}*/







/*const orderDOM = document.querySelector('.order');
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
})*/


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
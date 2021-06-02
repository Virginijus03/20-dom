const liDOM = document.querySelectorAll('li');
const ingridientai = [];

for (let i = 0; i < liDOM.length; i++) {
    const ingridientas = liDOM[i].innerText.toUpperCase();
    ingridientai.push(ingridientas);
}
console.log(ingridientai);

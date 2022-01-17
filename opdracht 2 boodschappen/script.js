console.log("Script is geladen!");

const groentevak = document.getElementById('groente');
const fruitvak = document.getElementById('fruit');

function zetInFruitla(fruit){
    console.log(fruit);

    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = fruit;
    nieuwElement.className = 'rood'
    fruitvak.appendChild(nieuwElement);
}

function zetInGroentela(groente){
    console.log(groente);

    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = groente;
    nieuwElement.className = 'groen'
    groentevak.appendChild(nieuwElement);
}
const selType = document.getElementById("s_type");
const selMysteres = document.getElementById("s_mysteres");

const spanClausule = document.getElementById("clausule");

const dzPremier = document.getElementById('n1');
const dzFin = document.getElementById("fin_dizaine");

let chapelet, reponse;

let mysteres, fruits, intros;
let dizaines, clausules;

let index = 0;
let type = "joyeux";
let clausule;

getDonnees(type);

function reset()
{
    dzPremier.checked = true;
    dzFin.checked = false;

    setClausule(0);
}

async function getDonnees(type) 
{
    mysteres = [];
    fruits = [];
    intros = [];
    dizaines = [];
    clausules = [];

    reponse = await fetch(`/data/json/mysteres/${type}.json`);
    chapelet = await reponse.json();

    for (let mystere of chapelet) 
    {
        mysteres.push(mystere.nom);
        fruits.push(mystere.fruit);
        intros.push(mystere.intro);
        dizaines.push(mystere.clausules);
    }

    clausules = dizaines[0];
}

async function majListes() 
{
    index = 0;

    type = selType.value;

    await getDonnees(type);

    for (let optMystere of selMysteres.children) {
        optMystere.innerText = mysteres[index++];
    }

    selMysteres.selectedIndex = 0;

    reset();
}

function majClausules() 
{
    index = selMysteres.selectedIndex;

    clausules = dizaines[index];

    reset();
}

function setClausule(value)
{
    index = parseInt(value) - 1;

    clausule = clausules[index];

    spanClausule.textContent = clausule;
}
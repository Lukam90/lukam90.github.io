const rosaire = {
    "joyeux" : m_joyeux,
    "lumineux" : m_lumineux,
    "douloureux" : m_douloureux,
    "glorieux" : m_glorieux
}

const selType = document.getElementById("s_type");
const selMysteres = document.getElementById("s_mysteres");

const spanClausule = document.getElementById("clausule");

const dzPremier = document.getElementById('n1');
const dzFin = document.getElementById("fin_dizaine");

let btnRadio;

let chapelet, reponse;

let mysteres, fruits, intros;
let dizaines, clausules;

let index = 0;
let type = "joyeux";
let clausule;

getDonnees(type);

for (let i = 0 ; i < 10 ; i++)
{
    btnRadio = document.getElementById("n" + (i + 1));
    btnRadio.addEventListener("click", () => setClausule(i));
}

function reset()
{
    dzPremier.checked = true;
    dzFin.checked = false;

    setClausule(0);
}

function getDonnees(type) 
{
    mysteres = [];
    fruits = [];
    intros = [];
    dizaines = [];
    clausules = [];

    chapelet = rosaire[type];

    for (let mystere of chapelet) 
    {
        mysteres.push(mystere.nom);
        fruits.push(mystere.fruit);
        intros.push(mystere.intro);
        dizaines.push(mystere.clausules);
    }

    clausules = dizaines[0];
}

function majListes() 
{
    index = 0;

    type = selType.value;

    getDonnees(type);

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

function setClausule(index)
{
    clausule = clausules[index];

    spanClausule.textContent = clausule;
}
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

// Initialisation des données

majDonnees(type);

// Ajout de l'événement de clic sur les boutons radio

for (let i = 0 ; i < 10 ; i++)
{
    btnRadio = document.getElementById("n" + (i + 1));
    btnRadio.addEventListener("click", () => setClausule(i));
}

// Réinitialisation des cases et de la clausule

function reset()
{
    dzPremier.checked = true;
    dzFin.checked = false;

    setClausule(0);
}

// MAJ des données d'un chapelet selon le type

function majDonnees(type) 
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

// MAJ de la liste des mystères selon le type

function majListes() 
{
    index = 0;

    type = selType.value;

    majDonnees(type);

    for (let optMystere of selMysteres.children) {
        optMystere.innerText = mysteres[index++];
    }

    selMysteres.selectedIndex = 0;

    reset();
}

// MAJ des clausules lors de la sélection du mystère

function majClausules() 
{
    index = selMysteres.selectedIndex;

    clausules = dizaines[index];

    reset();
}

// MAJ de la clausule lors du clic sur un bouton radio

function setClausule(index)
{
    clausule = clausules[index];

    spanClausule.textContent = clausule;
}
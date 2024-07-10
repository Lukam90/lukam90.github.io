const selType = document.getElementById("s_type");
const selMysteres = document.getElementById("s_mysteres");

const pIntro = document.getElementById("intro");

const spanFruit = document.getElementById("fruit");
const spanClausule = document.getElementById("clausule");

const dzPremier = document.getElementById('n1');

let chapelet, liste, fruits, clausules, intros;
let mystere, fruit, clausule, intro;

let index = 0;
let type = "joyeux";

// Initialisation des données

initChapelet("joyeux");

function initChapelet(type)
{
    chapelet = rosaire[type];

    liste = chapelet["liste"];
    fruits = chapelet["fruits"];
    intros = chapelet["intros"];
    clausules = chapelet["clausules"];

    mystere = liste[0];
    fruit = fruits[0];
    intro = fruits[0];
    clausule = clausules[0];
}

// MAJ des données d'un chapelet selon le type

function majChapelet() 
{
    type = selMysteres.value;

    

    resetFirst();
}

// MAJ des données selon le mystère sélectionné

function majInfos() 
{
    index = 0;

    type = selType.value;

    for (let optMystere of selMysteres.children) {
        optMystere.innerText = liste[index++];
    }

    //selMysteres.selectedIndex = 0;

    resetFirst();
}

// MAJ des champs textes

function updateText()
{
    pIntro.innerText = intro;
    spanClausule.innerText = clausule;
    spanFruit.innerText = fruit;

    resetFirst();
}

// Retour à la 1ère case

function resetFirst()
{
    dzPremier.checked = true;
}
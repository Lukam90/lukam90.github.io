const selType = document.getElementById("s_type");
const selMysteres = document.getElementById("s_mysteres");

const pIntro = document.getElementById("intro");

const spanFruit = document.getElementById("fruit");
const spanClausule = document.getElementById("clausule");

const dzPremier = document.getElementById('n1');

let chapelet, liste; 
let fruits, clausules, intros;
let fruit, clausule, intro;

let index = 0;
let type = "joyeux";

initData("joyeux");

// Debug

function chDebug()
{
    console.log("type : ", type);
    console.log("chapelet : ", chapelet);
}

// Initialisation des données

function initData(type)
{
    chapelet = rosaire[type];

    liste = chapelet["liste"];
    fruits = chapelet["fruits"];
    intros = chapelet["intros"];
    clausules = chapelet["clausules"];

    //chDebug();
}

// MAJ des données d'un chapelet selon le type

function majChapelet() 
{
    index = 0;

    type = selType.value;

    initData(type);

    for (let optMystere of selMysteres.children) {
        optMystere.innerText = liste[index++];
    }

    selMysteres.selectedIndex = 0;

    majInfos();
}

// MAJ des données selon le mystère sélectionné

function majInfos() 
{
    index = selMysteres.selectedIndex;

    fruit = fruits[index];
    intro = intros[index];
    clausule = clausules[index];

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
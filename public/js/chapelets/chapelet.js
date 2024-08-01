// Eléments

const selType = $("#sel_type");
const selMysteres = $("#sel_mysteres");

const spanFruit = $("#fruit");
const spanClausule = $("#clausule");

const pIntro = $("#intro");

const btnPremier = $('#dz_grains_1');

// Variables

let chapelet, mysteres; 
let fruits, clausules, intros;
let fruit, clausule, intro;

let index = 0;
let type = "joyeux";

let url, resultat;

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
    chapelet = ch_mysteres[type];
    intros = ch_intros[type];

    mysteres = chapelet["mysteres"];
    fruits = chapelet["fruits"];
    clausules = chapelet["clausules"];

    pIntro.innerText = intros[0];
}

// MAJ des données d'un chapelet selon le type

function majChapelet() 
{
    index = 0;

    type = selType.value;

    initData(type);

    for (let optMystere of selMysteres.children) {
        optMystere.innerText = mysteres[index++];
    }

    selMysteres.selectedIndex = 0;

    majInfos();
}

// MAJ des données selon le mystère sélectionné

function majInfos() 
{
    index = selMysteres.selectedIndex;

    clausule = clausules[index];
    fruit = fruits[index];

    spanClausule.innerText = clausule;
    spanFruit.innerText = fruit;

    pIntro.innerText = intros[index];
}

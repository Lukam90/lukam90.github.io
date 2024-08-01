const selType = $("#sel_type");
const selMysteres = $("#sel_mysteres");

const spanFruit = $("#fruit");
//const spanClausule = $("#clausule");

const btnPremier = $('#dz_grains_1');

const versets = $all(".verset");

let chapelet, liste; 
let fruits, fruit;

let index = 0;
let type = "joyeux";

let url, resultat;

let id, elVerset = $("#joyeux_1");

initData("joyeux");
showBlock(elVerset);

// Debug

function chDebug()
{
    console.log("type : ", type);
    console.log("chapelet : ", chapelet);
}

// Initialisation des données

function initData(type)
{
    chapelet = mysteres[type];

    liste = chapelet["liste"];
    fruits = chapelet["fruits"];

    hideAll(versets);
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

    //clausule = clausules[index];
    fruit = fruits[index];

    //spanClausule.innerText = clausule;
    spanFruit.innerText = fruit;

    id = "#" + type + "_" + (index + 1);

    elVerset = $(id);

    switchBlocks(versets, elVerset);
}

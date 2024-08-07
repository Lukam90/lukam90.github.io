// Mystères

const ch_mysteres = {
    joyeux : ch_joyeux,
    lumineux : ch_lumineux,
    douloureux : ch_douloureux,
    glorieux : ch_glorieux
};

// Eléments

const selType = $("#sel_type");
const selMysteres = $("#sel_mysteres");

const spanFruit = $("#fruit");
const spanClausule = $("#clausule");

const pVerset = $("#verset");

const btnPremier = $('#dz_grains_1');

// Variables

let chapelet, mysteres; 
let fruits, clausules, versets;
let fruit, clausule, verset;

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
    chapelet = ch_mysteres[type];

    mysteres = chapelet["mysteres"];
    fruits = chapelet["fruits"];
    clausules = chapelet["clausules"];
    versets = chapelet["versets"];
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
    verset = versets[index];

    spanClausule.innerText = clausule;
    spanFruit.innerText = fruit;

    pVerset.innerText = verset;

    checkFirst();
}

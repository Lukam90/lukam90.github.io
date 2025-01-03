// Données

const chapelets = {
    joyeux : ch_joyeux,
    lumineux : ch_lumineux,
    douloureux : ch_douloureux,
    glorieux : ch_glorieux
};

// Eléments

const selType = $("#sel_type");
const selMysteres = $("#sel_mysteres");

const spanFruit = $("#fruit");

const btnPremier = $("#dz_grains_1");

// Variables

let chapelet, mysteres, fruits;

let index = 0;
let type = "joyeux";
let fruit = "";

initData("joyeux");

//debugHideAll();

// Initialisation des données

function initData(type)
{
    chapelet = chapelets[type];

    mysteres = chapelet["mysteres"];
    fruits = chapelet["fruits"];
}

// MAJ des mystères d'un chapelet selon le type

function majMysteres() 
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

    fruit = fruits[index];

    spanFruit.textContent = fruit;

    checkFirst();
}

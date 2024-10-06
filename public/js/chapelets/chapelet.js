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
const spanClausule = $("#clausule");

const btnPremier = $("#dz_grains_1");

const txtIntention = $("#intention");

// Variables

let chapelet, mysteres;
let fruits, clausules;
let fruit, clausule;

let index = 0;
let type = "joyeux";

let estOptionnel = false;

initData("joyeux");

//debugHideAll();

// Initialisation des données

function initData(type)
{
    chapelet = chapelets[type];

    mysteres = chapelet["mysteres"];
    fruits = chapelet["fruits"];
    clausules = chapelet["clausules"];
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
    txtIntention.value = "";

    majInfos();
}

// MAJ des données selon le mystère sélectionné

function majInfos() 
{
    index = selMysteres.selectedIndex;

    fruit = fruits[index];
    clausule = clausules[index];

    spanFruit.textContent = fruit;
    spanClausule.textContent = clausule;

    txtIntention.value = "";

    checkFirst();
}

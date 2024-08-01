// Eléments

const selType = $("#sel_type");
const selMysteres = $("#sel_mysteres");

const spanFruit = $("#fruit");

const pVerset = $("#verset");

const btnPremier = $('#dz_grains_1');

// Variables

let chapelet, mysteres;
let fruits, intros;
let fruit, intro;

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
    versets = ch_versets[type];

    mysteres = chapelet["mysteres"];
    fruits = chapelet["fruits"];

    pVerset.innerText = versets[0];
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

    fruit = fruits[index];
    verset = versets[index];

    spanFruit.innerText = fruit;

    pVerset.innerText = versets[index];

    checkFirst();
}

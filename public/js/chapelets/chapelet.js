const selType = $("#sel_type");
const selMysteres = $("#sel_mysteres");

const spanFruit = $("#fruit");
const spanClausule = $("#clausule");

const btnPremier = $('#dz_grains_1');

const intros = $all(".intro");

let chapelet, liste; 
let fruits, clausules;
let fruit, clausule;
let intro, id;

let index = 0;
let type = "joyeux";

let url, resultat;

initData("joyeux");
showBlock("#joyeux_1");

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
    clausules = chapelet["clausules"];

    hideAll(intros);
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

    clausule = clausules[index];
    fruit = fruits[index];

    spanClausule.innerText = clausule;
    spanFruit.innerText = fruit;

    id = "#" + type + "_" + (index + 1);

    hideAll(intros);
    showBlock(id);

    checkFirst();
}

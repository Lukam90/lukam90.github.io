// Eléments

const selType = $("#sel_type");
const selMysteres = $("#sel_mysteres");

const btnPremier = $("#dz_grains_1");

// Variables

let mysteres;

let index = 0;
let type = "joyeux";

initData("joyeux");

// Initialisation des données

function initData(type)
{
    mysteres = chapelets[type];
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
}

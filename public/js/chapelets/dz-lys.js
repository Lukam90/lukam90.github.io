// Eléments

const selType = $("#sel_type");
const selMysteres = $("#sel_mysteres");

const btnPremier = $("#dz_grains_1");

// Variables

let index = 0;
let type = "joyeux";
let mysteres = rosaire["joyeux"];

//debugHideAll();

// MAJ du chapelet selon le type

function majChapelet()
{
    index = 0;

    type = selType.value;

    mysteres = rosaire[type];
    
    for (let optMystere of selMysteres.children) {
        optMystere.innerText = mysteres[index++];
    }

    selMysteres.selectedIndex = 0;

    checkFirst();
}

// Réinitialisation de l'ensemble

function resetAll()
{
    selType.selectedIndex = 0;
    selMysteres.selectedIndex = 0;

    majChapelet();
}
// Eléments

const selMysteres = $("#sel_mysteres");

const divTrio = $("#trio");
const divDizaines = $("#dizaines");

const trioPremier = $("#fin_trio_1");
const dzPremier = $("#dz_grains_1");

// Variables

let index = 0;

// Lancement

resetAll();

/* Fonctions */

// MAJ des données texte

function updateText()
{
    index = selMysteres.selectedIndex;

    switchBlocks(divDizaines, divTrio);

    if (index == 5) {
        switchBlocks(divTrio, divDizaines);
    }

    checkButton(trioPremier);
    checkButton(dzPremier);
}

// Réinitialisation du chapelet

function resetAll()
{
    selMysteres.selectedIndex = 0;

    updateText();
}
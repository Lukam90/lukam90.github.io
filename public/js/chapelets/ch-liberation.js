// Eléments

const selRondes = $("#sel_rondes");

const dzPremier = $("#dz_grains_1");

const divTrio = $("#trio");
const divDizaines = $("#dizaines");

// Variables

let index = 0;

// Lancement

resetAll();

/* Fonctions */

// Affichage du bon bloc

function setBlock()
{
    index = selRondes.selectedIndex;

    if (index == 0) {
        switchBlocks(divTrio, divDizaines);
    } else {
        switchBlocks(divDizaines, divTrio);
    }

    checkButton(dzPremier);
}

// Réinitialisation du chapelet

function resetAll()
{
    selRondes.selectedIndex = 0;

    setBlock();
}
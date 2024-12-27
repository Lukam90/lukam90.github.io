// Eléments

const selRondes = $("#sel_rondes");

const dzRondes = $("#dz_rondes");
const trioFin = $("#trio_fin");

const trioPremier = $("#fin_trio_1");
const dzPremier = $("#dz_grains_1");

// Variables

let index = 0;

/* Fonctions */

setBlock();

// Réinitialisation des boutons

function resetButtons()
{
    checkButton(trioPremier);
    checkButton(dzPremier);
}

// MAJ du bloc

function setBlock() 
{
    index = selRondes.selectedIndex;

    if (index < 5) {
        switchBlocks(dzRondes, trioFin);
    } else {
        switchBlocks(trioFin, dzRondes);
    }

    resetButtons();
}

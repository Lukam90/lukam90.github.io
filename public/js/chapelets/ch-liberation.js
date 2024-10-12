// Eléments

const selRondes = $("#sel_rondes");

const txtIntention = $("#txt_intention");

const divTrio = $("#trio");
const divDizaines = $("#dizaines");

const trioPremier = $("#base_trio_1");
const dzPremier = $("#dz_grains_1");

// Variables

let index = 0;

let nom = "";

/* Fonctions */

//hideAll(maskable);
resetAll();

// MAJ des blocs

function updateBlock()
{
    index = selRondes.selectedIndex;

    if (index == 0) {
        switchBlocks(divTrio, divDizaines);
    } else {
        switchBlocks(divDizaines, divTrio);
    }

    checkButton(trioPremier);
    checkButton(dzPremier);
}

// Réinitialisation du chapelet

function resetAll()
{
    selRondes.selectedIndex = 0;
    txtIntention.value = "";

    updateBlock();
}
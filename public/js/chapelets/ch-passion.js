// Eléments

const selRondes = $("#sel_rondes");

const txtIntention = $("#txt_intention");

const pIntro = $("#intro");

const divTrio = $("#trio");
const divDizaines = $("#dizaines");

const dzPremier = $("#dz_grains_1");
const trioPremier = $("#fin_trio_1");

// Variables

let index = 0;
let intro = "";

/* Fonctions */

resetAll();

// MAJ des blocs

function setBlock()
{
    index = selRondes.selectedIndex;

    if (index < 5) {
        intro = intros[index];

        pIntro.innerText = intro;

        switchBlocks(divDizaines, divTrio);
    } else {
        pIntro.textContent = "";

        switchBlocks(divTrio, divDizaines);
    }

    checkButton(trioPremier);
    checkButton(dzPremier);
}

// Réinitialisation du chapelet

function resetAll()
{
    selRondes.selectedIndex = 0;
    txtIntention.value = "";

    setBlock();
}
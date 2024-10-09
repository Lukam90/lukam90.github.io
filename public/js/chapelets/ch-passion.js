// Eléments

const selMysteres = $("#sel_mysteres");

const txtIntention = $("#txt_intention");

const spanOrdinal = $("#ordinal");

const dzPremier = $("#dz_grains_1");
const trioPremier = $("#fin_trio_1");

// Variables

let index = 0;
let ordinal = "1er";

/* Fonctions */

resetAll();

// Changement du nombre ordinal

function setOrdinal()
{
    index = selMysteres.selectedIndex + 1;

    if (index == 1) {
        ordinal = "1er";
    } else {
        ordinal = index + "ème";
    }

    spanOrdinal.textContent = ordinal;

    checkButton(trioPremier);
    checkButton(dzPremier);
}

// Réinitialisation du chapelet

function resetAll()
{
    selMysteres.selectedIndex = 0;
    txtIntention.value = "";

    setOrdinal();
}
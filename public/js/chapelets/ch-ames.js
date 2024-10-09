// Eléments

const selRondes = $("#sel_rondes");

const basePremier = $("#ste_marie_vertus_1");
const btnPremier = $("#dz_grains_1");
const finPremier = $("#fin_trio_1");

/* Fonctions */

//hideAll(maskable);
resetAll();

// Réinitialisation du chapelet

function resetAll()
{
    selRondes.selectedIndex = 0;

    checkButton(basePremier);
    checkButton(btnPremier);
    checkButton(finPremier);
}
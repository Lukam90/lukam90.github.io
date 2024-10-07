// Eléments

const selRondes = $("#sel_rondes");

const txtIntention = $("#txt_intention");

const btnPremier = $("#dz_grains_1");

/* Fonctions */

// Réinitialisation du chapelet

function resetAll()
{
    selRondes.selectedIndex = 0;
    txtIntention.value = "";

    checkFirst();
}
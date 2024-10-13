// Eléments

const selRondes = $("#sel_rondes");

const btnPremier = $("#dz_grains_1");

/* Fonctions */

//hideAll(maskable);
resetAll();

// Réinitialisation du chapelet

function resetAll()
{
    selRondes.selectedIndex = 0;

    checkFirst();
}
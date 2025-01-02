// Eléments

const trioPremier = $("#base_trio_1");
const btnPremier = $("#dz_trio_1");

const selNiveaux = $("#sel_niveaux");

// Variables

let index = 0;

//debugHideAll();

/* Fonctions */

// Réinitialisation du chapelet

function resetAll()
{
    selNiveaux.selectedIndex = 0;

    checkButton(trioPremier);
    checkButton(btnPremier);
}
// Eléments

const selNiveaux = $("#sel_niveaux");

const basePremier = $("#base_trio_1");
const finPremier = $("#fin_trio_1");

/* Fonctions */

//hideAll(maskable);
resetAll();

// Réinitialisation des boutons

function resetButtons()
{
    checkButton(basePremier);
    checkButton(finPremier);
}

// Réinitialisation du chapelet

function resetAll()
{
    selNiveaux.selectedIndex = 0;

    resetButtons();
}
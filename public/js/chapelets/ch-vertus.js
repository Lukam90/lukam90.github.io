/* Eléments */

const selNiveaux = $("#sel_niveaux");

const basePremier = $("#base_trio_1");
const finPremier = $("#fin_trio_1");

/* Variables */

let numKey = 0;

/* Fonctions */

// Réinitialisation du trio

function resetTrio()
{
    finPremier.click();
}

// Réinitialisation du rosaire

function resetAll()
{
    goTo("#");

    selNiveaux.selectedIndex = 0;

    basePremier.click();
    finPremier.click();
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    if (e.key == "0")   resetAll();

    if (isMajKey(e)) {
        if (e.key == "C")   goTo("#base");
        if (e.key == "P")   goTo("#pater");
        if (e.key == "G")   goTo("#gloria");
        if (e.key == "A")   goTo("#ave");
        if (e.key == "M")   goTo("#medaille");
        if (e.key == "N")   goTo("#niveaux");
    }
});
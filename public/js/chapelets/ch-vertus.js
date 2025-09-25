/* Eléments */

const basePremier = $("#base_trio_1");
const finPremier = $("#fin_trio_1");

/* Fonctions */

// Réinitialisation du trio

function resetTrio()
{
    basePremier.click();
    finPremier.click();
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    if (e.key == "0")   goTo("#");

    if (isMajKey(e)) {
        if (e.key == "C")   goTo("#base");
        if (e.key == "P")   goTo("#pater");
        if (e.key == "G")   goTo("#gloria");
        if (e.key == "A")   goTo("#ave");

        if (e.key == "M")   goTo("#medaille");
    }
});
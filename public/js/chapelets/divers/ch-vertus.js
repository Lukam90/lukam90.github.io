/* Eléments */

const selNiveaux = $("#sel_niveaux");

const basePremier = $("#base_trio_1");
const finPremier = $("#fin_trio_1");

/* Fonctions */

// Sélection du niveau (raccourci)

function selectNiveau(index)
{
    selNiveaux.selectedIndex = index;
    selNiveaux.focus();

    resetTrio();
}

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
    numKey = parseInt(e.key);

    if (numKey == 0)   resetAll();

    if (numKey >= 1 && numKey <= 9) {
        goTo("#niveaux");

        selectNiveau(numKey - 1);
    }

    if (isMajKey(e)) {
        if (e.key == "C")   goTo("#base");
        if (e.key == "P")   goTo("#pater");
        if (e.key == "G")   goTo("#gloria");
        if (e.key == "A")   goTo("#ave");
        if (e.key == "M")   goTo("#medaille");
        if (e.key == "N")   goTo("#niveaux");
    }
});
/* Eléments */

const basePremier = $("#base_trio_1");

/* Fonctions */

// Réinitialisation du rosaire

function resetAll()
{
    goTo("#");

    selType.selectedIndex = 0;

    basePremier.click();

    selectType();
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    let numKey = parseInt(e.key);

    if (numKey == 0)   resetDizaine();

    if (numKey >= 1 && numKey <= 5) {
        goTo("#mysteres");

        selectMystere(numKey - 1);
    }

    if (isMajKey(e)) {
        if (e.key == "P")   goTo("#dz_pater");
        if (e.key == "D")   goTo("#dz_ave");
        if (e.key == "G")   goTo("#dz_gloria");
        if (e.key == "F")   goTo("#dz_fatima");
    }
});
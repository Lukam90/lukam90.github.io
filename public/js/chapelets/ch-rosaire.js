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

    if (numKey == 0)   selectDizaine();

    if (numKey >= 1 && numKey <= 5) {
        goTo("#mysteres");

        selectMystere(numKey - 1);
    }
});
/* Eléments */

const grains = $name("dz_rondes");

const basePremier = $("#base_trio_1");
const btnPremier = $("#dz_grains_1");
const finPremier = $("#fin_trio_1");

let grain;

/* Fonctions */

// Réinitialisation des boutons

function resetButtons()
{
    basePremier.click();
    btnPremier.click();
    finPremier.click();
}

// Sélection d'une ronde (raccourci)

function selectRonde(index)
{
    goTo("#rondes");

    checkFirst();

    grain = grains[index];

    grain.select();
    grain.click();
}

// Réinitialisation du chapelet

function resetAll()
{
    resetButtons();

    selectRonde(0);

    goTo("#");
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    numKey = parseInt(e.key);

    if (numKey == 0)    resetAll();

    if (numKey >= 1 && numKey <= 5) selectRonde(numKey - 1);
});
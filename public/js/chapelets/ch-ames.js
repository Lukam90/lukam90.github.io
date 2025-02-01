/* Eléments */

const grains = $name("dz_rondes");

const basePremier = $("#base_trio_1");
const dzPremier = $("#dz_grains_1");
const finPremier = $("#fin_trio_1");

/* Variables */

let numKey = 0;

/* Fonctions */

selectRonde(0);

// Sélection de la ronde

function selectRonde(index) {
    grains[index].click();

    resetButtons();
}

// Réinitialisation des boutons

function resetButtons()
{
    checkButton(basePremier);
    checkButton(dzPremier);
    checkButton(finPremier);
}

// Réinitialisation du chapelet

function resetAll() {
    goTo("#");

    resetButtons();

    selectRonde(0);
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    numKey = parseInt(e.key);

    if (numKey == 0)   resetAll();

    if (numKey >= 1 && numKey <= 5) {
        goTo("#rondes");

        selectRonde(numKey - 1);
    }

    if (e.key == "c")   goTo("#b_credo");
    if (e.key == "p")   goTo("#b_pater");
    if (e.key == "a")   goTo("#b_ave");
    if (e.key == "g")   goTo("#b_gloria");

    if (e.key == "r")   goTo("#rondes");
    if (e.key == "f")   goTo("#final");
});
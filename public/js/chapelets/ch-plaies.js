/* Eléments */

const grains = $name("dz_rondes");

const paterN1 = $("#pater_trio_1");
const aveN1 = $("#ave_trio_1");
const gloriaN1 = $("#gloria_trio_1");

let grain;

/* Variables */

let numKey = 0;

/* Fonctions */

// Sélection d'une ronde (raccourci)

function selectRonde(index)
{
    grain = grains[index];

    grain.select();
    grain.click();
}

// Réinitialisation des boutons

function resetButtons()
{
    paterN1.click();
    aveN1.click();
    gloriaN1.click();
}

// Réinitialisation du rosaire

function resetAll()
{
    goTo("#");

    selectRonde(0);

    resetButtons();
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    numKey = parseInt(e.key);

    if (numKey == 0)   resetAll();

    if (numKey >= 1 && numKey <= 5) {
        goTo("#rondes");

        selectRonde(numKey - 1);
    }

    if (isMajKey(e)) {
        if (e.key == "R")   goTo("#rondes");
        if (e.key == "B")   goTo("#bonus");
        if (e.key == "X")   goTo("#ex_prieres");
    }
});
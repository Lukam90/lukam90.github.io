/* Eléments */

const grains = $name("dz_rondes");

const basePremier = $("#base_trio_1");
const btnPremier = $("#dz_grains_1");

let grain;

/* Fonctions */

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
    basePremier.click();

    selectRonde(0);

    goTo("#");
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    numKey = parseInt(e.key);

    if (numKey == 0)    resetAll();

    if (numKey >= 1 && numKey <= 5) selectRonde(numKey - 1);

    if (isMajKey(e)) {
        if (e.key == "P" || e.key == "R")   goTo("#rondes");
        
        if (e.key == "A")   goTo("#dz_ames");
        if (e.key == "C")   goTo("#dz_coeurs");
        if (e.key == "G")   goTo("#dz_gloria");
    }
});
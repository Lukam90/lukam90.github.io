/* Eléments */

const grains = $name("dz_rondes");

const basePremier = $("#base_trio_1");
const dzPremier = $("#dz_grains_1");

let grain;

/* Fonctions */

//resetAll();

// Sélection d'une ronde (raccourci)

function selectRonde(index)
{
    goTo("#rondes");

    grain = grains[index];

    grain.select();
    grain.click();
}

// Réinitialisation des boutons

function resetButtons()
{
    basePremier.click();
    dzPremier.click();
}

// Réinitialisation du chapelet

function resetAll()
{
    selectRonde(0);

    basePremier.click();

    goTo("#");
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    let numKey = parseInt(e.key);

    if (numKey == 0)   resetAll();

    if (numKey >= 1 && numKey <= 5) {
        selectRonde(numKey - 1);
    }

    if (isMajKey(e)) {
        if (e.key == "C")   goTo("#b_credo");
        if (e.key == "P")   goTo("#b_pater");
        if (e.key == "A")   goTo("#b_ave");
        if (e.key == "G")   goTo("#dz_gloria");

        if (e.key == "F")   goTo("#fin");
    }
});
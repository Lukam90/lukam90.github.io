/* Eléments */

const grains = $name("dz_rondes");

const trioPremier = $("#base_trio_1");
const btnPremier = $("#dz_grains_1");

let grain;

/* Fonctions */

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
    checkButton(trioPremier);
    checkButton(btnPremier);
}

// Réinitialisation du rosaire

function resetAll()
{
    goTo("#");

    selectRonde(0);
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    let numKey = parseInt(e.key);

    if (numKey == 0)   resetAll();

    if (numKey >= 1 && numKey <= 5) {
        selectRonde(numKey - 1);
    }

    if (isMajKey(e)) {
        if (e.key == "C")   goTo("#credo");
        if (e.key == "A")   goTo("#acte");
        if (e.key == "R")   goTo("#rondes");

        if (e.key == "D")   goTo("#dz_priere");
        if (e.key == "F")   goTo("#dz_fatima");
    }
});
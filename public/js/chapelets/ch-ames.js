/* Eléments */

const grains = $name("dz_rondes");

const dzPremier = grains[0];

const basePremier = $("#base_trio_1");
const finPremier = $("#fin_trio_1");

let grain;

/* Fonctions */

// Sélection d'une ronde

function selectRonde(index)
{
    goTo("#rondes");

    grain = grains[index];
    grain.select();
    grain.click();
}

// Réinitialisation du rosaire

function resetAll()
{
    selectRonde(0);

    basePremier.click();
    finPremier.click();

    goTo("#");
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    let numKey = parseInt(e.key);

    if (numKey == 0)   resetAll();

    if (numKey >= 1 && numKey <= 5)   selectRonde(numKey - 1);
});
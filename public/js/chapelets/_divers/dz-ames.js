/* Eléments */

const grains = $name("rondes");

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

// Réinitialisation du rosaire

function resetAll()
{
    selectRonde(0);

    goTo("#");
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    let numKey = parseInt(e.key);

    if (numKey == 0)   resetAll();

    if (numKey >= 1 && numKey <= 5) selectRonde(numKey - 1);
});

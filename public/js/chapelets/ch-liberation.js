/* Eléments */

const grains = $name("dz_rondes");

const btnPremier = $("#dz_grains_1");

let grain;

/* Fonctions */

resetAll();

// Sélection d'une ronde (raccourci)

function selectRonde(index)
{
    grain = grains[index];

    grain.select();
    grain.click();
}

// Réinitialisation du chapelet

function resetAll()
{
    goTo("#");

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
});
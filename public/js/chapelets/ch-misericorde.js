/* Eléments */

const grains = $name("dz_rondes");

const btnPremier = grains[0];

/* Variables */

let numKey = 0;

/* Fonctions */

// Sélection d'une ronde

function selectRonde(index)
{
    grains[index].click();
}

// Réinitialisation du rosaire

function resetAll()
{
    goTo("#");

    btnPremier.click();
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    numKey = parseInt(e.key);

    if (numKey == 0)   resetAll();

    if (numKey >= 1 && numKey <= 5)   selectRonde(numKey - 1);
});
/* Eléments */

const grains = $name("dz_rondes");

let grain;

/* Variables */

let numKey = 0;

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

    goTo("#");
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    let numKey = parseInt(e.key);

    if (numKey == 0)   resetAll();

    if (numKey >= 1 && numKey <= 5)   selectRonde(numKey - 1);

    if (isMajKey(e)) {
        if (e.key == "P")   goTo("#pater");
        if (e.key == "A")   goTo("#ave");
        if (e.key == "C")   goTo("#credo");
    }
});
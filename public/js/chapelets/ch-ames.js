/* Eléments */

const grains = $name("dz_grains");

/* Fonctions */

// Sélection d'une ronde (raccourci)

function selectRonde(index)
{
    goTo("#base");

    grain = grains[index];

    grain.select();
    grain.click();
}

function resetAll()
{
    selectRonde(0);
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    numKey = parseInt(e.key);

    if (numKey >= 0 && numKey <= 9) selectRonde(numKey);

    if (e.key == "f")   selectRonde(10);
});
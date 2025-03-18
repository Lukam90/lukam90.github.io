/* Eléments */

const grains = $name("dz_grains");

/* Fonctions */

// Sélection d'une ronde (raccourci)

function selectRonde(index)
{
    goTo("#ave");

    grain = grains[index];
    grain.select();
    grain.click();
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    let numKey = parseInt(e.key);

    if (numKey >= 0 && numKey <= 9) selectRonde(numKey);

    if (isMajKey(e)) {
        if (e.key == "P")   goTo("#pater");
        if (e.key == "A")   goTo("#ave");
        if (e.key == "G")   goTo("#gloria");
    }

    if (e.key == ".")   selectRonde(10);
});
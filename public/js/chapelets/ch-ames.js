/* Eléments */

const grains = $name("dz_grains");

let grain;

/* Fonctions */

// Sélection d'un grain

function selectNum(index)
{
    grain = grains[index];

    grain.click();
    grain.select();
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    numKey = parseInt(e.key);

    if (numKey >= 0 && numKey <= 9) selectNum(numKey);
    
    if (e.key == "f")   selectNum(10);
});
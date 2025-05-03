/* Eléments */

const grains = $name("dz_rondes");

const trioPremier = $("#base_trio_1");
const dzPremier = $("#dz_grains_1");

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

// Sélection de la dizaine

function selectDizaine()
{
    goTo("#dz_priere");

    dzPremier.select();
    dzPremier.click();
}

// Réinitialisation des boutons

function resetButtons()
{
    checkButton(trioPremier);
    checkButton(dzPremier);
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

    if (numKey == 0)   selectDizaine();

    if (numKey >= 1 && numKey <= 5) {
        selectRonde(numKey - 1);
    }
});
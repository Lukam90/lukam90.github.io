/* Eléments */

const rondes = $name("dz_rondes");

const btnPremier = $("#dz_grains_1");

let radioBtn;

/* Fonctions */

// Sélection d'une ronde

function selectRonde(index)
{
    radioBtn = rondes[index];

    radioBtn.click();
    radioBtn.focus();

    majNombre(index);
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

    if (numKey >= 1 && numKey <= 5) selectRonde(numKey - 1);
});
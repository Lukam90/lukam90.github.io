/* Eléments */

const rondes = $name("dz_rondes");

const btnPremier = $("#dz_grains_1");

let radioBtn;

/* Variables */

let numKey = 0;

/* Evénement de clic */

for (let i = 0 ; i < 5 ; i++)
{
    rondes[i].addEventListener("click", () => checkFirst());
}

/* Fonctions */

// Sélection d'une ronde

function selectRonde(index)
{
    radioBtn = rondes[index];

    radioBtn.click();
    radioBtn.focus();
}

// Réinitialisation du rosaire

function resetAll()
{
    goTo("#");

    selectRonde(0);
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    numKey = parseInt(e.key);

    if (numKey == 0)   resetAll();

    if (numKey >= 1 && numKey <= 5) selectRonde(numKey - 1);
});
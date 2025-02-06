/* Eléments */

const dzRondes = $name("dz_rondes");

const trioPremier = $("#base_trio_1");
const btnPremier = $("#dz_grains_1");

/* Variables */

let numKey = 0;

/* Evénement de clic */

for (let i = 0 ; i < 5 ; i++)
{
    dzRondes[i].addEventListener("click", () => resetButtons());
}

/* Fonctions */

// Sélection d'une ronde

function selectRonde(index)
{
    dzRondes[index].click();
}

// Réinitialisation des boutons

function resetButtons()
{
    checkButton(trioPremier);
    checkButton(btnPremier);
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

    if (numKey >= 1 && numKey <= 5) {
        goTo("#rondes");

        selectRonde(numKey - 1);
    }
});
/* Eléments */

const grains = $name("dz_rondes");

const divTrio = $("#trio");
const divDizaines = $("#dizaines");

const basePremier = $("#base_trio_1");
const dzPremier = $("#dz_grains_1");

/* Variables */

let numKey = 0;

/* Evénement de clic */

for (let i = 0 ; i <= 5 ; i++)
{
    grains[i].addEventListener("click", () => setBlock(i));
}

/* Fonctions */

resetAll();

// Sélection d'une ronde

function selectRonde(index)
{
    grains[index].click();
}

// MAJ du bloc

function setBlock(index)
{
    if (index == 0) {
        switchBlocks(divTrio, divDizaines);

        checkButton(basePremier);
    } else {
        switchBlocks(divDizaines, divTrio);

        checkButton(dzPremier);
    }
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

        selectRonde(numKey);
    }

    if (isMajKey(e)) {
        if (e.key == "C")   goTo("#credo");
        if (e.key == "R")   goTo("#rondes");
        if (e.key == "F")   goTo("#fin");
    }
});
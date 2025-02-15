/* Eléments */

const buttons = $name("mysteres");

const divPremiers = $("#premiers");
const divDernier = $("#dernier");

const qntPremier = $("#quintes_1");
const basePremier = $("#base_trio_1");
const finPremier = $("#fin_trio_1");

/* Variables */

let numKey = 0;

/* Evénements de clic */

for (let i = 0 ; i < 7 ; i++)
{
    buttons[i].addEventListener("click", () => setBlock(i));
}

/* Fonctions */

resetAll();

// MAJ du bloc

function setBlock(index)
{
    buttons[index].click();

    if (index < 6) {
        switchBlocks(divPremiers, divDernier);

        qntPremier.click();
    } else {
        switchBlocks(divDernier, divPremiers);

        finPremier.click();
    }
}

// Réinitialisation du chapelet

function resetAll()
{
    goTo("#");

    setBlock(0);

    basePremier.click();
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    numKey = parseInt(e.key);

    if (numKey == 0)   resetAll();

    if (numKey >= 1 && numKey <= 7) {
        goTo("#mysteres");

        setBlock(numKey - 1);
    }

    if (isMajKey(e)) {
        if (e.key == "C")   goTo("#base");
        if (e.key == "A")   goTo("#ave");
        if (e.key == "M")   goTo("#mysteres");
        if (e.key == "P")   goTo("#serie");
        if (e.key == "G")   goTo("#suite");
        if (e.key == "F")   goTo("#fin");
    }
});
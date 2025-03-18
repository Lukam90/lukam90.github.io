/* Eléments */

const grains = $name("dz_rondes");

const pMystere = $("#mystere");

let grain;

/* Variables */

const mysteres = [
    "1. la prophétie de Siméon",
    "2. la fuite en Égypte",
    "3. la perte de Jésus",
    "4. la passion du Christ",
    "5. l’agonie et la mort de Jésus",
    "6. la descente de la croix",
    "7. Jésus déposé au tombeau"
];

/* Evénements de clic */

for (let index = 0 ; index < 7 ; index++)
{
    grains[index].addEventListener("click", () => majMystere(index));
}

/* Fonctions */

resetAll();

// MAJ du mystère

function majMystere(index)
{
    pMystere.textContent = mysteres[index];
}

// Sélection d'une ronde (raccourci)

function selectRonde(index)
{
    majMystere(index);

    grain = grains[index];

    grain.select();
    grain.click();
}

// Réinitialisation du chapelet

function resetAll()
{
    goTo("#");

    selectRonde(0);
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    numKey = parseInt(e.key);

    if (numKey == 0)   resetAll();

    if (numKey >= 1 && numKey <= 7) {
        goTo("#rondes");

        selectRonde(numKey - 1);
    }

    if (isMajKey(e)) {
        if (e.key == "B")   goTo("#base");

        if (e.key == "C")   goTo("#credo");
        if (e.key == "P")   goTo("#pater");
        if (e.key == "A")   goTo("#ave");
        if (e.key == "G")   goTo("#gloria");

        if (e.key == "I")   goTo("#intro");
        if (e.key == "R")   goTo("#rondes");
        if (e.key == "F")   goTo("#fin");
    }
});
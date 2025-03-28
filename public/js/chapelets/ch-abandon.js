/* Eléments */

const grains = $name("dz_rondes");

const spanNom = $("#nom");

/* Variables */

let index = 0;
let nom = "Jésus";

/* Evénements de clic */

for (let index = 0 ; index < 5 ; index++)
{
    grains[index].addEventListener("click", () => setNom(index + 1));
}

/* Fonctions */

// MAJ du nom

function setNom(index)
{
    nom = (index % 2 == 0) ? "Maman Marie" : "Jésus";

    spanNom.textContent = nom;
}

// Sélection d'une ronde (raccourci)

function selectRonde(index)
{
    goTo("#rondes");

    grain = grains[index];

    grain.select();
    grain.click();
}

// Réinitialisation du chapelet

function resetAll()
{
    selectRonde(0);

    goTo("#");
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    numKey = parseInt(e.key);

    if (numKey == 0)    resetAll();

    if (numKey >= 1 && numKey <= 5) selectRonde(numKey - 1);
});
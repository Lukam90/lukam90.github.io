/* Données texte */

const mysteres = [
    "Enfoncement du clou dans la main droite",
    "Enfoncement du clou dans la main gauche",
    "Enfoncement du clou dans le pied droit",
    "Enfoncement du clou dans le pied gauche",
    "Percement du Côté Sacré"
];

/* Eléments */

const grains = $name("dz_rondes");

const pMystere = $("#mystere");

const intros = $all(".intro");

let intro, mystere;

/* Variables */

let numKey = 0;

/* Evénement de clic */

for (let i = 0 ; i < 5 ; i++)
{
    grains[i].addEventListener("click", () => setIntro(i));
}

/* Fonctions */

resetAll();

// MAJ de l'intro

function setIntro(index)
{
    mystere = mysteres[index];
    intro = intros[index];

    pMystere.textContent = mystere;

    hideAll(intros);

    showBlock(intro);
}

// Sélection d'une ronde

function selectRonde(index)
{
    goTo("#dizaines");

    grains[index].click();
}

// Réinitialisation du rosaire

function resetAll()
{
    selectRonde(0);

    goTo("#");
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    numKey = parseInt(e.key);

    if (numKey == 0)   resetAll();

    if (numKey >= 1 && numKey <= 5)   selectRonde(numKey - 1);
});
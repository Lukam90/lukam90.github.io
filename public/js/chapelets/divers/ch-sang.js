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

const checkboxes = $all("input[type='checkbox']");

const pMystere = $("#mystere");
const pDernier = $("#dernier");

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

selectRonde(0);

// Changement d'intro

function switchIntro()
{
    hideAll(intros);

    showBlock(intro);
}

// MAJ de l'intro

function setIntro(index)
{
    mystere = mysteres[index];
    intro = intros[index];

    pMystere.textContent = mystere;

    switchIntro();

    uncheckAll(checkboxes);

    hideBlock(pDernier);

    if (index == 4) showBlock(pDernier);
}

// Sélection d'une ronde

function selectRonde(index)
{
    grains[index].click();
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
        goTo("#dizaines");

        selectRonde(numKey - 1);
    }
});
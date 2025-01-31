/* Données texte */

const mysteres = [
    "1. la main droite", "2. la main gauche", 
    "3. le pied droit", "4. le pied gauche", 
    "5. le cœur"
];

/* Eléments */

const dzRondes = $name("dz_rondes");

const pMystere = $("#mystere");
const pIntro = $("#intro");

let intro;

/* Variables */

let index = 0;
let numKey = 0;

/* Evénement de clic */

for (let i = 0 ; i < 5 ; i++) {
    dzRondes[i].addEventListener("click", () => setText(i));
}

/* Fonctions */

selectRonde(0);
//setText(0);

// Sélection de la ronde

function selectRonde(index) {
    dzRondes[index].click();
}

// MAJ du mystère et de l'intro

function setText(index) {
    pMystere.textContent = mysteres[index];
    pIntro.innerText = intros[index];
}

// Réinitialisation du chapelet

function resetAll() {
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

    if (e.key == "c")   goTo("#b_credo");
    if (e.key == "r")   goTo("#rondes");
    if (e.key == "f")   goTo("#final");

    if (e.key == "p")   goTo("#dz_pater");
    if (e.key == "a")   goTo("#dz_ave");
    if (e.key == "d")   goTo("#dz_priere");
    if (e.key == "g")   goTo("#dz_gloria");
    if (e.key == "t")   goTo("#dz_tabernacle");
});
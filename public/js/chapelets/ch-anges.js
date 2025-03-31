/* Données texte */

const suites = [
    "nous rende dignes de brûler du feu de la charité parfaite",
    "nous fasse la grâce d'abandonner la voie du péché\net de courir dans celle de la perfection chrétienne",
    "insuffle dans nos cœurs un véritable et sincère esprit d'humilité",
    "nous donne la grâce de dominer nos sens\net de soumettre nos passions indisciplinées",
    "daigne protéger nos âmes contre les embûches et les tentations du démon",
    "nous préserve du mal et nous préserve de la tentation",
    "remplisse nos âmes d'un véritable esprit d'obéissance",
    "nous donne la persévérance dans la foi et dans toutes les bonnes œuvres,\nafin que nous gagnions la gloire du paradis",
    "nous accorde d'être protégés par eux dans cette vie mortelle\net conduits ensuite à la gloire éternelle",
];

/* Eléments */

const selChoeur = $("#sel_choeur");

const spanSuite = $("#suite");

const baseN1 = $("#base_anges_1");
const choeurN1 = $("#choeur_trio_1");

/* Variables */

let suite, index;

/* Fonctions */

// Sélection du choeur (Raccourci)

function selectChoeur(index)
{
    selChoeur.selectedIndex = index;

    resetButtons();
}

// MAJ de la suite

function majSuite()
{
    index = selChoeur.selectedIndex;

    suite = suites[index];

    spanSuite.innerText = suite;

    resetButtons();
}

// Réinitialisation des boutons

function resetButtons()
{
    checkButton(baseN1);
    checkButton(choeurN1);
}

// Réinitialisation du rosaire

function resetAll()
{
    goTo("#");

    selChoeur.selectedIndex = 0;

    majSuite();
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    let numKey = parseInt(e.key);

    if (numKey == 0)   resetAll();

    if (numKey >= 1 && numKey <= 9) {
        goTo("#choeurs");

        selectChoeur(numKey - 1);
    }

    if (e.key == "f")   goTo("#fin");
    if (e.key == "o")   goTo("#oraison");
    if (e.key == "m")   goTo("#st_michel");
});

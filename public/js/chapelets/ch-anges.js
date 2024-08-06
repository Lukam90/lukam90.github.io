// Constantes de texte

const suites = [
    "nous rende dignes de brûler du feu de la charité parfaite",
    "nous fasse la grâce d'abandonner la voie du péché et de courir dans celle de la perfection chrétienne",
    "insuffle dans nos cœurs un véritable et sincère esprit d'humilité",
    "nous donne la grâce de dominer nos sens et de soumettre nos passions indisciplinées",
    "daigne protéger nos âmes contre les embûches et les tentations du démon",
    "nous préserve du mal et nous préserve de la tentation",
    "remplisse nos âmes d'un véritable esprit d'obéissance",
    "nous donne la persévérance dans la foi et dans toutes les bonnes œuvres, afin que nous gagnions la gloire du paradis",
    "nous accorde d'être protégés par eux dans cette vie mortelle et conduits ensuite à la gloire éternelle",
];

// Eléments

const selChoeurs = $("#sel_choeurs");

const spanChoeur = $("#choeur");
const spanSuite = $("#suite");

const btnPremier = $("#trio_ste_marie_1");

// Variables

let index;
let choeur, suite;

// MAJ du texte

function updateText() {
    index = selChoeurs.selectedIndex;
    choeur = selChoeurs.value.replace(/\d\.\s/, "");

    suite = suites[index];

    spanChoeur.innerText = choeur;
    spanSuite.innerText = suite;

    checkFirst();
}

const selAnges = document.getElementById("sel_anges");
const selChoeurs = document.getElementById("sel_choeurs");

const spanAnge = document.getElementById("ange");
const spanChoeur = document.getElementById("choeur");
const spanSuite = document.getElementById("suite");

const firstRadioBtn = document.getElementById('n1');

const suites = {
    "séraphins" : "nous rende dignes de brûler du feu de la charité parfaite",
    "chérubins" : "nous fasse la grâce d'abandonner la voie du péché et de courir dans celle de la perfection chrétienne",
    "trônes" : "insuffle dans nos cœurs un véritable et sincère esprit d'humilité",
    "dominations" : "nous donne la grâce de dominer nos sens et de soumettre nos passions indisciplinées",
    "puissances" : "daigne protéger nos âmes contre les embûches et les tentations du démon",
    "vertus" : "nous préserve du mal et nous préserve de la tentation",
    "principautés" : "remplisse nos âmes d'un véritable esprit d'obéissance",
    "archanges" : "nous donne la persévérance dans la foi et dans toutes les bonnes œuvres, afin que nous gagnions la gloire du paradis",
    "anges" : "nous accorde d'être protégés par eux dans cette vie mortelle et conduits ensuite à la gloire éternelle",
};

let choeur, suite;

function updateText() {
    choeur = selChoeurs.value;
    suite = suites[choeur];

    spanChoeur.innerText = choeur;
    spanSuite.innerText = suite;

    resetFirst();
}

function updateAngel()
{
    spanAnge.innerText = selAnges.value;
    selChoeurs.selectedIndex = 0;
    
    resetFirst();
}

function resetFirst()
{
    firstRadioBtn.checked = true;
}
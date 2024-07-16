const selAnges = document.getElementById("sel_anges");
const selChoeurs = document.getElementById("sel_choeurs");

const spanAnge = document.getElementById("ange");
const spanChoeur = document.getElementById("choeur");
const spanSuite = document.getElementById("suite");

let choeurs, suites;
let choeur, suite;
let index;
let option;

initOptions();

function initOptions()
{
    index = 1;

    choeurs = [];
    suites = [];

    selChoeurs.innerHTML = "";

    for (let ligne of d_choeurs)
    {
        choeur = ligne.nom;
        suite = ligne.suite;

        choeurs.push(choeur);
        suites.push(suite);

        option = document.createElement("option");
        option.innerText = `${index++}. ${choeur}`;
        option.value = choeur;

        selChoeurs.appendChild(option);
    }
}

function updateText() {
    index = selChoeurs.selectedIndex;
    choeur = selChoeurs.value;

    suite = suites[index];

    spanChoeur.innerText = choeur;
    spanSuite.innerText = suite;

    checkFirst();
}

function updateAngel()
{
    spanAnge.innerText = selAnges.value;
    selChoeurs.selectedIndex = 0;

    checkFirst();
}

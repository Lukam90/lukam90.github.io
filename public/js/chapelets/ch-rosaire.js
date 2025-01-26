/* Eléments */

const selTypes = $("#sel_types");

const trioPremier = $("#base_trio_1");
const dzPremier = $("#dz_grains_1");

const mRadios = $name("rd_mystere");
const mLabels = $all(".txt_mystere");

let radioBtn, label;

/* Variables */

let index = 0, numKey = 0;
let type = "joyeux";
let mysteres = [];

/* Fonctions */

// MAJ des mystères

function majMysteres()
{
    index = selTypes.selectedIndex;

    type = types[index];
    mysteres = rosaire[type];

    for (let i = 0 ; i < 5 ; i++)
    {
        mLabels[i].textContent = mysteres[i];
    }

    selectMystere(0);

    resetButtons();
}

// Sélection d'un mystère

function selectMystere(index)
{
    goTo("#rondes");

    radioBtn = mRadios[index];
    radioBtn.click();
}

// Réinitialisation des cases à cocher et des boutons radio

function resetButtons()
{
    trioPremier.checked = true;
    dzPremier.checked = true;
}

// Réinitialisation du chapelet

function resetAll()
{
    selTypes.selectedIndex = 0;

    majMysteres();

    goTo("#");
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    numKey = parseInt(e.key);

    if (numKey == 0)   resetAll();

    if (numKey >= 1 && numKey <= 5) selectMystere(numKey - 1);

    if (e.key == "a") {
        goTo("#dz_ave");

        dzPremier.focus();
        dzPremier.click();
    }

    if (e.key == "p")   goTo("#dizaines");
    if (e.key == "g")   goTo("#dz_gloria");
    if (e.key == "f")   goTo("#dz_fatima");
});
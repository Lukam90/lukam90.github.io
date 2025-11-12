/* Eléments */

const grains = $name("dz_rondes");

const intros = $all(".intro");

const basePremier = $("#base_trio_1");

const divDernier = $("#dernier");

let grain, intro;

/* Variables */

let numKey = 0;

/* Evénements de clic */

for (let i = 0 ; i < 5 ; i++)
{
    grains[i].addEventListener("click", () => setIntro(i));
}

/* Fonctions */

resetAll();

// Sélection d'une ronde (raccourci)

function selectRonde(index)
{
    setIntro(index);

    grain = grains[index];

    grain.select();
    grain.click();
}

// MAJ de l'intro

function setIntro(index)
{
    let intro = intros[index];

    hideAll(intros);
    showBlock(intro);

    switchLast(index);
}

// Affichage du dernier bloc

function switchLast(index)
{
    hideBlock(divDernier);

    if (index == 4) {
        showBlock(divDernier);
    }
}
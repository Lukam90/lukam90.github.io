/* Eléments */

const grains = $name("mysteres");

const intros = $all(".intro");

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

setIntro(0);

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
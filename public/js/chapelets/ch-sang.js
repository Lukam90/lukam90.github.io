const selMysteres = $("#sel_mysteres");
const pRappel = $("#rappel");
const btnPremier = $("#dz_grains_1");

const intros = $all(".intro");

let elIntro = $("#mystere_1");

let index = 0;
let mystere = "";

switchBlocks(intros, elIntro);

function updateText()
{
    index = selMysteres.selectedIndex + 1;
    mystere = selMysteres.value;

    pRappel.innerText = mystere;

    elIntro = $("#mystere_" + index);

    switchBlocks(intros, elIntro);
}
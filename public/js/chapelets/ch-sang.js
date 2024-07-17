const selMysteres = $("#sel_mysteres");
const pRappel = $("#rappel");
const btnPremier = $("#dz_grains_1");

const intros = $all(".intro");

let index = 0;
let mystere = "";

switchBlocks("#mystere_1");

function switchBlocks(id)
{
    hideAll(intros);
    showBlock(id);
    checkFirst();
}

function updateText()
{
    index = selMysteres.selectedIndex + 1;
    mystere = selMysteres.value;

    pRappel.innerText = mystere;

    switchBlocks("#mystere_" + index);
}
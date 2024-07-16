const selMysteres = $("#sel_mysteres");
const btnPremier = $("#dz_grains_1");

const intros = $all(".intro");

let index = 0;

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

    switchBlocks("#mystere_" + index);
}
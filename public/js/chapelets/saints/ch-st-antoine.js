const intros = $all(".intro");

const selRondes = $('#sel_rondes');

let index = 0;

switchBlocks("#st_antoine_1");

function switchBlocks(id)
{
    hideAll(intros);
    showBlock(id);
}

function setIntro()
{
    index = selRondes.selectedIndex + 1;

    switchBlocks("#st_antoine_" + index)
}

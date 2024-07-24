const blocs = $all(".grains");

const selRondes = $("#sel_rondes");

const btnPremier = $("#dz_grains_1");

let index = 0;

switchBlocks("#base_trio");

function switchBlocks(id)
{
    hideAll(blocs);
    showBlock(id);

    checkFirst();
}

function setSuite()
{
    index = selRondes.selectedIndex;

    if (index == 0)
    {
        switchBlocks("#base_trio");
    }
    else
    {
        switchBlocks("#dz_grains");
    }
}
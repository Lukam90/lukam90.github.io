const blocs = $all(".grains");
const trio = $("#base_trio");
const dizaine = $("#dz_grains");

const selRondes = $("#sel_rondes");

const btnPremier = $("#dz_grains_1");

let index = 0;

switchBlocks(blocs, trio);

function setSuite()
{
    index = selRondes.selectedIndex;

    if (index == 0)
    {
        switchBlocks(blocs, trio);
    }
    else
    {
        switchBlocks(blocs, dizaine);
    }
}
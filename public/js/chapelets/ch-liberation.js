const blocs = $all(".blocs");

const selRondes = $("#sel_rondes");
const btnPremier = $("#dz_grains_1");
const spanClausule = $("#clausule");

const clausules = ["aie pitié de", "guéris", "sauve", "libère", "aide"];

let index = 0;

switchBlocks("#bloc_trio");

function switchBlocks(id)
{
    hideAll(blocs);
    showBlock(id);

    checkFirst();
}

function setClausule(index)
{
    spanClausule.textContent = clausules[index];
}

function setSuite()
{
    index = selRondes.selectedIndex;

    if (index == 0)
    {
        switchBlocks("#bloc_trio");
    }
    else
    {
        switchBlocks("#bloc_dizaine");

        setClausule(index - 1);
    }
}
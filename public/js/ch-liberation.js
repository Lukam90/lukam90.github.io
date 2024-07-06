const selRondes = document.getElementById("sel_rondes");
const spanClausule = document.getElementById("clausule");

const firstRadioBtn = document.getElementById('n1');

const clausules = ["aie pitié de", "guéris", "sauve", "libère", "convertis"];

let index = 0;

function updateText()
{
    index = selRondes.selectedIndex;

    spanClausule.innerText = clausules[index];

    resetFirst();
}

function resetFirst()
{
    firstRadioBtn.checked = true;
    firstRadioBtn.focus();
}
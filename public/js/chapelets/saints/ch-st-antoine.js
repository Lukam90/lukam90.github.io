const intros = document.getElementsByClassName("intro");
const spanIntro = document.getElementById('intro');

const selRonde = document.getElementById('sel_ronde');

let index = 0;
let intro = "";
let id = "";

hideAll(intros);
showBlock("st_antoine_1");

function setIntro()
{
    index = selRonde.selectedIndex + 1;

    id = "st_antoine_" + index;

    hideAll(intros);
    showBlock(id);
}

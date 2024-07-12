const selDons = document.getElementById('sel_dons');

const intros = document.getElementsByClassName("intro");
const spanIntro = document.getElementById('intro');

const dzPremier = document.getElementById('n1');

let index = 0;
let intro = "";
let id = "";

hideAll(intros);
showBlock("st_esprit_1");

function setSuite()
{
    index = selDons.selectedIndex + 1;

    id = "st_esprit_" + index;

    hideAll(intros);
    showBlock(id);

    resetFirst();
}

const btnPremier = $("#sept_1");
const selRondes = $("#sel_rondes");
const spanClausule = $("#clausule");

const strDebut = "qui veuille nous "
const strFin = "\n par l'intercession de Sainte Rita";

const clausules = [
    strDebut + "accorder le pardon de nos péchés" + strFin,
    strDebut + "délivrer de tous les maux du corps et de l'âme" + strFin,
    strDebut + "aider dans tous nos besoins et nos inquiétudes" + strFin
];

let index;

setClausule(0);

function setClausule(index)
{
    checkFirst();

    spanClausule.innerText = clausules[index];
}

function updateText()
{
    index = selRondes.selectedIndex

    setClausule(index);
}
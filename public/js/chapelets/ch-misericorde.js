const selRang = $("#sel_rang");
const selRondes = $("#sel_rondes");

const btnPremier = $("#dz_grains_1");

const nombres = {
    "1-5" : [1,5],
    "6-10" : [6,10],
    "11-15" : [11,15],
    "16-20" : [16,20]
};

let rangs, debut, fin;
let option;

checkFirst();

function selectRange()
{
    rangs = nombres[selRang.value];

    debut = rangs[0];
    fin = rangs[1];

    selRondes.textContent = "";

    for (let index = debut ; index <= fin ; index++)
    {
        option = document.createElement("option");
        option.innerText = "Ronde n°" + index;

        selRondes.appendChild(option);
    }

    checkFirst();
}
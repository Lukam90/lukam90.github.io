// Mystères

const ch_mysteres = {
    "joyeux" : [
        "1. L'annonciation à Joseph",
        "2. La naissance de Jésus",
        "3. La circoncision et l’attribution du nom de Jésus",
        "4. La présentation de Jésus au temple",
        "5. Le recouvrement de Jésus au temple"
    ],
    "douloureux" : [
        "1. Joseph veut répudier Marie dans le secret",
        "2. Absence de place dans l’auberge à Bethléem",
        "3. La fuite en Egypte",
        "4. Jésus perdu à Jérusalem",
        "5. La mort de Joseph"
    ],
    "glorieux" : [
        "1. La glorification de Joseph",
        "2. St Joseph, patron de l’Eglise Universelle",
        "3. St Joseph, protecteur des familles",
        "4. St Joseph, patron de la bonne mort",
        "5. St Joseph, patron des mourants et des souffrants",
    ]
};

// Eléments

const selType = $("#sel_type");
const selMysteres = $("#sel_mysteres");

const btnPremier = $('#dz_grains_1');

// Variables

let chapelet;

let index = 0;
let type = "joyeux";

initData("joyeux");

// Initialisation des données

function initData(type)
{
    chapelet = ch_mysteres[type];
}

// MAJ des données d'un chapelet selon le type

function majChapelet() 
{
    index = 0;

    type = selType.value;

    initData(type);

    for (let optMystere of selMysteres.children) {
        optMystere.innerText = chapelet[index++];
    }

    selMysteres.selectedIndex = 0;
}
// Données texte

const themes = [
    "des pécheurs du monde entier",
    "sacerdotales et religieuses",
    "pieuses et fidèles",
    "des païens",
    "des hérétiques et des apostats",
    "douces, humbles et des petits enfants",
    "qui honorent et glorifient particulièrement la miséricorde de Jésus",
    "du purgatoire",
    "froides"
];

// Eléments

const selRondes = $("#sel_rondes");
const selJours = $("#sel_jours");

const pAmes = $("#ames");
const spanTheme = $("#theme");

const trioPremier = $("#fin_trio_1");
const dzPremier = $("#dz_grains_1");

// Variables

let index = 0;
let theme = themes[0];

//debugHideAll();

hideBlock(pAmes);

// Maj du thème

function majTheme()
{
    index = selJours.selectedIndex;

    if (index == 0) {
        hideBlock(pAmes);
    } else {
        showBlock(pAmes);

        theme = themes[index--];

        spanTheme.textContent = theme;
    }

    resetAll();
}

// Réinitialisation des boutons radio

function checkButtons()
{
    checkButton(trioPremier);
    checkButton(dzPremier);
}

// Réinitialisation des rondes

function resetAll()
{
    selRondes.selectedIndex = 0;

    checkButtons();
}

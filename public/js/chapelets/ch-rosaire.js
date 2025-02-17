/* Données texte */

const rosaire = {
    joyeux : [
        "1. L'annonciation",
        "2. La visitation",
        "3. la naissance de Jésus",
        "4. la présentation de Jésus au temple de Jérusalem",
        "5. le recouvrement de Jésus au temple de Jérusalem"
    ],
    lumineux : [
        "1. Le baptême de Jésus",
        "2. Les noces de Cana",
        "3. L'annonce du Royaume de Dieu",
        "4. La transfiguration au Mont Thabor",
        "5. L'institution de l'eucharistie"
    ],
    douloureux : [
        "1. L'agonie au jardin de Gethsémani",
        "2. La flagellation",
        "3. Le couronnement d'épines",
        "4. Le portement de croix jusqu'au Golgotha",
        "5. La crucifixion"
    ],
    glorieux : [
        "1. La résurrection de Jésus",
        "2. L'ascension de Jésus",
        "3. La Pentecôte",
        "4. L'Assomption de Marie",
        "5. Le couronnement de Marie"
    ]
};

/* Eléments */

const selType = $("#sel_type");

const mGrains = $name("mysteres");
const mLabels = $all(".mysteres");

const basePremier = $("#base_trio_1");
const dzPremier = $("#dz_grains_1");

/* Variables */

let type = "joyeux";
let mysteres = [];

/* Evénement de clic */

for (let radioBtn of mGrains)
{
    radioBtn.addEventListener("click", () => resetDizaine());
}

/* Fonctions */

// Sélection d'un type

function selectType()
{
    type = selType.value;

    mysteres = rosaire[type];

    for (let i = 0 ; i < 5 ; i++)
    {
        mLabels[i].textContent = mysteres[i];
    }

    selectMystere(0);
}

// Sélection d'un mystère (raccourci)

function selectMystere(index)
{
    mGrains[index].click();

    resetDizaine();
}

// Réinitialisation de la dizaine

function resetDizaine()
{
    dzPremier.click();
}

// Réinitialisation du rosaire

function resetAll()
{
    goTo("#");

    selType.selectedIndex = 0;

    basePremier.click();

    selectType();
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    numKey = parseInt(e.key);

    if (numKey == 0)   resetAll();

    if (numKey >= 1 && numKey <= 5) {
        goTo("#mysteres");

        selectMystere(numKey - 1);
    }

    if (isMajKey(e)) {
        if (e.key == "P")   goTo("#dz_pater");
        if (e.key == "D")   goTo("#dz_ave");
        if (e.key == "G")   goTo("#dz_gloria");
        if (e.key == "F")   goTo("#dz_fatima");

        if (e.key == "S")   cbAmes.click();
    }
});
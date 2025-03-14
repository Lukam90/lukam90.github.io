/* Données texte */

const rosaire = {
    joyeux : [
        "1. L'Annonciation à Joseph",
        "2. La naissance de Jésus ",
        "3. La circoncision et l’attribution du nom de Jésus",
        "4. La présentation au temple",
        "5. Le recouvrement"
    ],
    douloureux : [
        "1. Joseph envisage de répudier Marie dans le secret",
        "2. L'absence de place à l'auberge de Bethléem",
        "3. La fuite en Égypte",
        "4. Jésus perdu à Jérusalem",
        "5. La mort de Joseph"
    ],
    glorieux : [
        "1. La glorification de Joseph",
        "2. St Joseph, protecteur de l’Église Universelle",
        "3. St Joseph, patron des familles",
        "4. St Joseph, patron de la bonne mort",
        "5. St Joseph, protecteur des mourants et des souffrants"
    ]
};

/* Eléments */

const selType = $("#sel_type");

const mGrains = $name("mysteres");
const mLabels = $all(".mysteres");

const basePremier = $("#base_trio_1");
const dzPremier = $("#dz_grains_1");

let grain;

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
    grain = mGrains[index];
    
    grain.select();
    grain.click();

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
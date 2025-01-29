/* Données texte */

const niveaux = [
    "1. Crainte de Dieu", "2. Charité", "3. Foi",
    "4. Espérance", "5. Obéissance", "6. Patience",
    "7. Piété", "8. Chasteté", "9. Prudence",
    "10. Force", "11. Tempérance", "12. Pureté",
    "13. Justice",
];

/* Eléments */

const nvGrains = $name("nv_grains");
const nvPremier = nvGrains[0];

const basePremier = $("#base_trio_1");
const trioPremier = $("#nv_trio_1");

const pRonde = $("#niveau");

let radioBtn;

/* Evénement de clic */

for (let i = 0 ; i < 13 ; i++) {
    radioBtn = nvGrains[i];
    radioBtn.addEventListener("click", () => majNiveau(i));
}

/* Fonctions */

// MAJ du niveau

function majNiveau(index) {
    goTo("#rondes");

    pRonde.textContent = niveaux[index];

    resetButtons();
}

// Réinitialisation des boutons

function resetButtons()
{
    checkButton(basePremier);
    checkButton(trioPremier);
}

// Réinitialisation du chapelet

function resetAll() {
    goTo("#");

    resetButtons();
    checkButton(nvPremier);

    majNiveau(0);
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    if (e.key == "0")   resetAll();

    if (e.key == "1")   goTo("#credo");
    if (e.key == "2")   goTo("#pater");
    if (e.key == "3")   goTo("#gloria");
    if (e.key == "4")   goTo("#ave");
    if (e.key == "5")   goTo("#medaille");
    if (e.key == "6")   goTo("#niveaux");
});
/* Eléments */

const grains = $name("sel_niveaux");

const pNiveau = $("#niveau");

const basePremier = $("#base_trio_1");
const finPremier = $("#fin_trio_1");

let grain;

/* Variables */

const vertus = [
    "1. Crainte de Dieu", "2. Charité", "3. Foi",
    "4. Espérance", "5. Obéissance", "6. Patience",
    "7. Piété", "8. Chasteté", "9. Prudence",
    "10. Force", "11. Tempérance", "12. Pureté",
    "13. Justice"
];

let index = 0;

/* Evénements de clic */

for (let index = 0 ; index < 13 ; index++)
{
    grains[index].addEventListener("click", () => majNiveau(index));
}

/* Fonctions */

// Sélection du niveau (raccourci)

function selectNiveau(index)
{
    goTo("#niveaux");

    grain = grains[index];
    grain.select();
    grain.click();
}

// MAJ du niveau

function majNiveau(index)
{
    pNiveau.textContent = vertus[index];

    resetTrio();
}

// Réinitialisation du trio

function resetTrio()
{
    basePremier.click();
    finPremier.click();
}

// Réinitialisation du rosaire

function resetAll()
{
    selectNiveau(0);

    goTo("#");
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    numKey = parseInt(e.key);

    if (numKey == 0)   resetAll();

    if (numKey >= 1 && numKey <= 9) {
        goTo("#niveaux");

        selectNiveau(numKey - 1);
    }

    if (isMajKey(e)) {
        if (e.key == "C")   goTo("#base");
        if (e.key == "P")   goTo("#pater");
        if (e.key == "G")   goTo("#gloria");
        if (e.key == "A")   goTo("#ave");

        if (e.key == "M")   goTo("#medaille");
    }
});
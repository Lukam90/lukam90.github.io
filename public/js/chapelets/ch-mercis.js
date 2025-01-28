/* Eléments */

const grains = $name("dz_rondes");

let radioBtn;

/* Variables */

let numKey = 0;

/* Fonctions */

// Sélection de la ronde

function selectRonde(index) {
    radioBtn = grains[index];
    radioBtn.checked = true;
    radioBtn.select();
}

// Réinitialisation du chapelet

function resetAll() {
    goTo("#");

    selectRonde(0);
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    numKey = parseInt(e.key);

    if (numKey == 0)   resetAll();

    if (numKey >= 1 && numKey <= 5) {
        goTo("#rondes");

        selectRonde(numKey - 1);
    }
});
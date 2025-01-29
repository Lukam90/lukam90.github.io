/* Données texte */

const plaies = ["1. les mains", "2. les pieds", "3. le dos", "4. la tête", "5. le cœur"];

/* Eléments */

const grains = $name("dz_rondes");

const pRonde = $("#plaie");

let radioBtn;

/* Variables */

let index = 0;
let numKey = 0;

/* Evénement de clic */

for (let i = 0 ; i < 5 ; i++) {
    radioBtn = grains[i];
    radioBtn.addEventListener("click", () => selectRonde(i));
}

/* Fonctions */

// Sélection de la ronde

function selectRonde(index) {
    radioBtn = grains[index];
    radioBtn.checked = true;
    radioBtn.select();

    pRonde.textContent = plaies[index];
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
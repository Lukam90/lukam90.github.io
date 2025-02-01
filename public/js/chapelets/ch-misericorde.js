/* Eléments */

const dzRondes = $name("dz_rondes");

/* Variables */

let numKey = 0;

/* Fonctions */

selectRonde(0);

// Sélection de la ronde

function selectRonde(index) {
    dzRondes[index].click();
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
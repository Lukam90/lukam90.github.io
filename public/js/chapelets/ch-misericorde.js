/* Eléments */

const dzRondes = $name("dz_rondes");

const txtIntention = $("#intention");

/* Variables */

let numKey = 0;

/* Evénement de clic */

for (let i = 0 ; i < 5 ; i++) {
    dzRondes[i].addEventListener("click", () => resetText());
}

/* Fonctions */

selectRonde(0);

// Sélection de la ronde

function selectRonde(index) {
    dzRondes[index].click();
}

// Réinitialisation du texte de l'intention

function resetText() {
    txtIntention.value = "";
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
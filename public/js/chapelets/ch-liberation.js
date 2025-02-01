/* Eléments */

const dzRondes = $name("dz_rondes");

const spanNombre = $("#nombre");

/* Variables */

let numKey = 0;

/* Evénement de clic */

for (let i = 0 ; i < 6 ; i++) {
    dzRondes[i].addEventListener("click", () => setNumber(i));
}

/* Fonctions */

selectRonde(0);

// Sélection de la ronde

function selectRonde(index) {
    dzRondes[index].click();

    setNumber(index);
}

// MAJ du nombre

function setNumber(index) {
    spanNombre.textContent = (index == 0) ? 3 : 10;
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

        selectRonde(numKey);
    }

    if (e.key == "c")   goTo("#credo");
    if (e.key == "r")   goTo("#rondes");
    if (e.key == "f")   goTo("#final");
});
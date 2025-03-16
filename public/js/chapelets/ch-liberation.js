/* Eléments */

const rondes = $name("dz_rondes");

let radioBtn;

/* Fonctions */

// Sélection d'une ronde (raccourci)

function selectRonde(index)
{
    goTo("#rondes");

    radioBtn = rondes[index];

    radioBtn.click();
    radioBtn.focus();
}

// Réinitialisation du chapelet

function resetAll()
{
    selectRonde(0);

    goTo("#");
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    let numKey = parseInt(e.key);

    if (numKey >= 0 && numKey <= 5) {
        selectRonde(numKey);
    }

    if (isMajKey(e)) {
        if (e.key == "C")   goTo("#credo");
        if (e.key == "R")   goTo("#rondes");
        if (e.key == "F")   goTo("#fin");
    }
});
/* Eléments */

const rondes = $name("dz_rondes");

let radioBtn;

/* Fonctions */

// Sélection d'une ronde

function selectRonde(index)
{
    radioBtn = rondes[index];

    radioBtn.click();
    radioBtn.focus();
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    let numKey = parseInt(e.key);

    if (numKey >= 1 && numKey <= 5) {
        goTo("#rondes");

        selectRonde(numKey - 1);
    }
});
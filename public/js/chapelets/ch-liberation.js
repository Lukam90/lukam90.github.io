/* Eléments */

const rondes = $name("dz_rondes");

const spanNombre = $("#nombre");

let radioBtn;

/* Evénement de clic */

for (let index = 0 ; index < 5 ; index++)
{
    rondes[index].addEventListener("click", () => majNombre(index));
}

// MAJ du nombre

function majNombre(index)
{
    spanNombre.textContent = (index == 0) ? "3" : "10";
}

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

    if (numKey >= 0 && numKey <= 5) {
        goTo("#rondes");

        selectRonde(numKey);
    }

    if (isMajKey(e)) {
        if (e.key == "B")   goTo("#base");
        if (e.key == "R")   goTo("#rondes");
        if (e.key == "F")   goTo("#fin");
    }
});
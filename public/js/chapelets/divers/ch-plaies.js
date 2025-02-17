/* Eléments */

const grains = $name("dz_rondes");

const btnPremier = grains[0];

const cbAmes = $("#v_ames");
const divAmes = $("#ames");

let grain;

/* Variables */

let numKey = 0;

/* Fonctions */

switchPrayer();

// Affichage de la prière des âmes

function switchPrayer()
{
    if (cbAmes.checked) {
        showBlock(divAmes);
    } else {
        hideBlock(divAmes);
    }
}

// Sélection d'une ronde (raccourci)

function selectRonde(index)
{
    grain = grains[index];

    grain.select();
    grain.click();
}

// Réinitialisation du rosaire

function resetAll()
{
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

    if (isMajKey(e)) {
        if (e.key == "I")   goTo("#dz_intro");

        if (e.key == "S")   cbAmes.click();
    }
});
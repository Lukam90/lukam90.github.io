/* Eléments */

const selRondes = $("#sel_rondes");

const btnPremier = $("#dz_grains_1");
const btnDernier = $("#dz_grains_11");

/* Fonctions */

// Sélection d'une ronde (raccourci)

function selectRonde(index)
{
    selRondes.selectedIndex = index;

    checkFirst();
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

    if (numKey >= 1 && numKey <= 5) selectMystere(numKey - 1);
    
    if (isMajKey(e)) {
        if (e.key == "A")   btnPremier.click();
        if (e.key == "F")   btnDernier.click();
    }
});
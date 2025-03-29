/* Eléments */

const paterN1 = $("#pater_trio_1");
const aveN1 = $("#ave_trio_1");
const gloriaN1 = $("#gloria_trio_1");

/* Fonctions */

// Réinitialisation du rosaire

function resetAll()
{
    goTo("#");

    checkButton(paterN1);
    checkButton(aveN1);
    checkButton(gloriaN1);
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    if (e.key == "0")   resetAll();
});
/* Eléments */

const paterBtn = $("#pater_trio_1");
const aveBtn = $("#ave_trio_1");
const gloriaBtn = $("#gloria_trio_1");

/* Fonctions */

// Sélection d'une partie

function selectPart(radioBtn, anchor) {
    radioBtn.click();

    goTo(anchor);
}

// Réinitialisation du chapelet

function resetAll() {
    goTo("#");

    paterBtn.click();
    aveBtn.click();
    gloriaBtn.click();
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    if (e.key == "0")   resetAll();

    if (e.key == "1")   selectPart(paterBtn, "#pater");
    if (e.key == "2")   selectPart(aveBtn, "#ave");
    if (e.key == "3")   selectPart(gloriaBtn, "#gloria");
});
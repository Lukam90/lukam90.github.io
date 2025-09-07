/* Eléments */

const frBlocks = $all(".fr");
const latinBlocks = $all(".latin");

const cbLatin = $("#v_latine");

/* Fonctions */

window.addEventListener("load", (event) => {
    switchLang();
});

// Changement de langue (FR - Latin)

function switchLang()
{
    if (cbLatin.checked) {
        showAll(latinBlocks);
        hideAll(frBlocks);
    } else {
        showAll(frBlocks);
        hideAll(latinBlocks);
    }
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    if (isMajKey(e) && e.key == "L")    cbLatin.click();
});
/* Eléments */

const frBlocks = $all(".fr");
const latinBlocks = $all(".latin");

const cbLatin = $("#v_latine");

/* Fonctions */

// Changement de version FR / Latin

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
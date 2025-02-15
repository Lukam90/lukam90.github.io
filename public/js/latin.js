/* Eléments */

const frBlocks = $all(".fr");
const latinBlocks = $all(".latin");

const cbLatin = $("#v_latine");

console.log(frBlocks, latinBlocks);

/* Fonctions */

switchLang();

// Changement de langue (FR - Latin)

function switchLang()
{
    console.log(frBlocks, latinBlocks);

    if (cbLatin.checked) {
        showAll(latinBlocks);
        hideAll(frBlocks);
    } else {
        showAll(frBlocks);
        hideAll(latinBlocks);
    }
}
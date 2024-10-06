/* Eléments */

const maskable = $all(".maskable");

const cbShort = $("#v_resumee");

/* Fonctions */

// Changement de version courte / longue

function switchVersion()
{
    if (cbShort.checked) {
        hideAll(maskable);
    } else {
        showAll(maskable);
    }
}
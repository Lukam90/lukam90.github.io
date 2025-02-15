/* Fonctions en mode "jQuery" */

const $ = (selector) => document.querySelector(selector);
const $all = (selector) => document.querySelectorAll(selector);

const $name = (name) => document.getElementsByName(name);

// Eléments

const maskable = $all(".maskable");

/* Fonctions utilitaires */

/* Blocs */

// Masquage d'un bloc

function hideBlock(element)
{
    element.style.display = "none";
}

// Masquage de l'ensemble des blocs

function hideAll(blocks)
{
    for (let block of blocks)
    {
        block.style.display = "none";
    }
}

// Affichage d'un bloc

function showBlock(element)
{
    element.style.display = "block";
}

// Affichage de l'ensemble des blocs

function showAll(blocks)
{
    for (let block of blocks)
    {
        block.style.display = "block";
    }
}

// Changement de blocs

function switchBlocks(bShow, bHide)
{
    showBlock(bShow);
    hideBlock(bHide);
}

/* Cases à cocher */

// Cocher une case

function checkButton(radioBtn)
{
    radioBtn.checked = true;
}

// Retour à la 1ère case

function checkFirst()
{
    btnPremier.checked = true;
}

// Décochage de toutes les cases

function uncheckAll(checkboxes)
{
    for (let cb of checkboxes)
    {
        cb.checked = false;
    }
}

/* Ancres */

function goTo(anchor) {
    window.location.href = anchor;
}

/* Clavier */

function isMajKey(event)
{
    return event.shiftKey || event.getModifierState("CapsLock");
}
// Fonctions en mode "jQuery"

const $ = (selector) => document.querySelector(selector);
const $all = (selector) => document.querySelectorAll(selector);

const $name = (name) => document.getElementsByName(name);

// Masquage d'un bloc

function hideBlock(id)
{
    const block = $("#" + id);

    block.style.display = "none";
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

function showBlock(id)
{
    const block = $("#" + id);

    block.style.display = "block";
}

// Affichage de l'ensemble des blocs

function showAll(blocks)
{
    for (let block of blocks)
    {
        block.style.display = "block";
    }
}

// Retour à la 1ère case

function checkFirst()
{
    btnPremier.checked = true;
    btnPremier.focus();
}
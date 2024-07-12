// Masquage d'un bloc

function hideBlock(id)
{
    const block = document.getElementById(id);

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
    const block = document.getElementById(id);

    block.style.display = "block";
}

// Retour à la 1ère case

function checkFirst()
{
    btnPremier.checked = true;
}
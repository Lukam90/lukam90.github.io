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

// Retour à la 1ère case (dizaine)

function resetFirst()
{
    dzPremier.checked = true;
}
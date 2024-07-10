const spanClausule = document.getElementById("clausule");

const dzPremier = document.getElementById("n1");

const clausules = ["aie pitié de nous", "guéris-nous", "sauve-nous", "libère-nous", "aide-nous"];

// Ajout de l'événement de clic sur les boutons radio

let btnRadio;

for (let i = 0 ; i < 5 ; i++)
{
    btnRadio = document.getElementById("rondes_" + (i + 1));
    btnRadio.addEventListener("click", () => updateText(i));
}

// MAJ des clausules

function updateText(index)
{
    spanClausule.innerText = clausules[index];

    resetFirst();
}

// Retour au 1er bouton radio de la dizaine

function resetFirst()
{
    dzPremier.checked = true;
}
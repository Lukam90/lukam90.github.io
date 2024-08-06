// Eléments

const selChoeurs = $("#sel_choeurs");

const spanChoeur = $("#choeur");

const btnPremier = $("#trio_ste_marie_1");

// Variables

let choeur;

// MAJ du texte

function updateText() {
    choeur = selChoeurs.value.replace(/\d\.\s/, "");

    spanChoeur.textContent = choeur;

    checkFirst();
}

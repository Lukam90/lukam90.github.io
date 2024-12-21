// Eléments

const basePremier = $("#base_trio_1");
const trioPremier = $("#dz_trio_1");

const divMedaille = $("#dz_medaille");
const divRepos = $("#dz_repos");

const selNiveaux = $("#sel_niveaux");

const maskable = $all(".maskable");

// Variables

let index = 0;

/* Fonctions */

setBlock();

// Debug

//hideAll(maskable);

// MAJ du bloc et réinitialisation des boutons radio

function setBlock()
{
    index = selNiveaux.selectedIndex;

    if (index == 0) {
        switchBlocks(divMedaille, divRepos);
    } else {
        switchBlocks(divRepos, divMedaille);
    }

    checkButton(basePremier);
    checkButton(trioPremier);
}

// Réinitialiser du chapelet

function resetAll()
{
    selNiveaux.selectedIndex = 0;

    setBlock();
}
// Eléments

const basePremier = $("#base_trio_1");
const dzPremier = $("#dz_trio_1");
const trzPremier = $("#trz_niveaux_1");

const divMedaille = $("#dz_medaille");
const divRepos = $("#dz_repos");

const spanNiveau = $("#niveau");

const treizaine = $name("trz_niveaux");

const maskable = $all(".maskable");

// Variables

const niveaux = [
    "1. Crainte de Dieu", "2. Charité", "3. Foi", "4. Espérance",
    "5. Obéissance", "6. Patience", "7. Piété", "8. Chasteté",
    "9. Prudence", "10. Force", "11. Tempérance", "12. Pureté",
    "13. Justice",
];

let index = 0;
let niveau = "Médaille";

// Evénements

for (let radioBtn of treizaine)
{   
    radioBtn.addEventListener("click", () => setBlock(radioBtn.value));
}

/* Fonctions */

resetAll();

// Debug

//hideAll(maskable);

// MAJ du niveau

function setLevel(text)
{
    spanNiveau.innerText = text;
}

// MAJ du bloc et réinitialisation des boutons radio

function setBlock(index)
{
    if (index == 0) {
        switchBlocks(divMedaille, divRepos);

        setLevel("Médaille");
    } else {
        niveau = niveaux[index - 1];

        switchBlocks(divRepos, divMedaille);

        setLevel(niveau);
    }

    checkButton(basePremier);
    checkButton(dzPremier);
}

// Réinitialisation du chapelet

function resetAll()
{
    setBlock(0);

    checkButton(trzPremier);
}
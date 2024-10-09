// Eléments

const selRondes = $("#sel_rondes");

const txtIntention = $("#txt_intention");

const spanPrefixe = $("#prefixe");
const spanSuffixe = $("#suffixe");

const spanPronom = $("#pronom");
const spanVerbe = $("#verbe");

const lignes = $all("li .gras");

const divTrio = $("#trio");
const divDizaines = $("#dizaines");

const trioPremier = $("#base_trio_1");
const dzPremier = $("#dz_grains_1");

// Variables

let index = 0;
let numLigne = 0;

let nom = "";

/* Fonctions */

//hideAll(maskable);
resetAll();

// Changement de bloc

function setBlock()
{
    index = selRondes.selectedIndex;

    if (index == 0) {
        switchBlocks(divTrio, divDizaines);
    } else {
        switchBlocks(divDizaines, divTrio);
    }

    checkButton(trioPremier);
    checkButton(dzPremier);
}

// MAJ du verset

function setVerset(prefixe, suffixe, pronom, verbe)
{
    spanPrefixe.textContent = prefixe;
    spanSuffixe.textContent = suffixe;

    spanPronom.textContent = pronom;
    spanVerbe.textContent = verbe;
}

// MAJ du texte

function updateText()
{
    nom = txtIntention.value;

    if (nom) {
        // Verset

        setVerset("", nom, nom, "sera");

        // Lignes

        for (let ligne of lignes) {
            ligne.textContent = " " + nom;
        }
    } else {
        // Verset

        setVerset("me", "", "je", "serai");

        // Lignes

        numLigne = 0;
        nom = "moi";

        for (let ligne of lignes) {
            if (numLigne > 0)   nom = "-moi";

            ligne.textContent = nom;
            
            numLigne++;
        }
    }
}

// Réinitialisation du chapelet

function resetAll()
{
    selRondes.selectedIndex = 0;
    txtIntention.value = "";

    setBlock();
    updateText();
}
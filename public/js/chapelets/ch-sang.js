/* Eléments */

const grains = $name("rondes");

const intros = $all(".intro");

const divDernier = $("#dernier");

let grain, intro;

/* Variables */

let numKey = 0;

/* Evénements de clic */

for (let i = 0 ; i < 5 ; i++)
{
    grains[i].addEventListener("click", () => setIntro(i));
}

/* Fonctions */

resetAll();

// Sélection d'une ronde (raccourci)

function selectRonde(index)
{
    setIntro(index);

    grain = grains[index];

    grain.select();
    grain.click();
}

// MAJ de l'intro

function setIntro(index)
{
    let intro = intros[index];

    hideAll(intros);
    showBlock(intro);

    switchLast(index);
}

// MAJ du dernier bloc

function switchLast(index)
{
    if (index == 4) {
        showBlock(divDernier);
    } else {
        hideBlock(divDernier);
    }
}

// Réinitialisation du chapelet

function resetAll()
{
    goTo("#");

    setIntro(0);
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    numKey = parseInt(e.key);

    if (numKey == 0)   resetAll();

    if (numKey >= 1 && numKey <= 5) {
        goTo("#rondes");

        selectRonde(numKey - 1);
    }

    if (isMajKey(e)) {
        if (e.key == "C")   goTo("#base");
        if (e.key == "D")   goTo("#douzaines");
        if (e.key == "F")   goTo("#fin");
    }
});
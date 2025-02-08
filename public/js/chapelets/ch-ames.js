/* Eléments */

const checkboxes = $all("input[type='checkbox']");

const selNiveaux = $("#sel_niveaux");

/* Evénement de sélection */

selNiveaux.addEventListener("change", () => uncheckAll(checkboxes));

/* Fonctions */

// Réinitialisation du chapelet

function resetAll()
{
    goTo("#");

    selNiveaux.selectedIndex = 0;

    uncheckAll(checkboxes);
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    if (e.key == "0")   resetAll();

    if (e.key == "1")   goTo("#medaille");
    if (e.key == "2")   goTo("#niveaux");
});
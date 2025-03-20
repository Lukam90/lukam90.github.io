/* Raccourcis */

document.addEventListener("keydown", e => {
    let numKey = parseInt(e.key);

    if (numKey == 0)   resetDizaine();

    if (numKey >= 1 && numKey <= 5) {
        goTo("#mysteres");

        selectMystere(numKey - 1);
    }

    if (isMajKey(e)) {
        if (e.key == "C")   goTo("#dz_coeurs");
        if (e.key == "A")   goTo("#dz_ames");
    }
});

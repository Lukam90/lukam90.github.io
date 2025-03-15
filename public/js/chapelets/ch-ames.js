/* Raccourcis */

document.addEventListener("keydown", e => {
    if (isMajKey(e)) {
        if (e.key == "A")   goTo("#dz_ames");
        if (e.key == "C")   goTo("#dz_coeurs");
    }
});
/* Raccourcis */

document.addEventListener("keydown", e => {
    let numKey = parseInt(e.key);

    if (numKey >= 0 && numKey <= 6) goTo("#sg" + numKey);

    if (e.key == "a")   goTo("#sg_agnus");
    if (e.key == "f")   goTo("#sg_fin");
});
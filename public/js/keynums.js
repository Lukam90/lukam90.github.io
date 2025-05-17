/* Raccourcis */

document.addEventListener("keydown", e => {
    let numKey = parseInt(e.key);

    if (numKey == 0) goTo("#");
    if (numKey >= 1 && numKey <= 9) goTo("#n" + numKey);

    if (e.key == "a")   goTo("#agnus");
    if (e.key == "f")   goTo("#fin");
});
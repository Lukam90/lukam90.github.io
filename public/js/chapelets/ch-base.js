/* Variables */

let numKey = 0;

/* Raccourcis */

document.addEventListener("keydown", e => {
    numKey = parseInt(e.key);

    if (e.key == "0")   goTo("#");

    if (numKey >= 1 && numKey <= 9) goTo("#" + e.key);
});
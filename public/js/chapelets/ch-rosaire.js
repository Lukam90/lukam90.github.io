/* Eléments */

const btnPremier = $("#j1");

/* Fonctions */

// Réinitialisation du rosaire

function resetAll()
{
    goTo("#");

    btnPremier.click();
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    if (e.key == "0")   resetAll();

    if (e.key == "1")   goTo("#m_joyeux");
    if (e.key == "2")   goTo("#m_lumineux");
    if (e.key == "3")   goTo("#m_douloureux");
    if (e.key == "4")   goTo("#m_glorieux");
});
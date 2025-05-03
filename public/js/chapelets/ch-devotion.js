/* Eléments */

const npBtn = $("#np_trio_1");
const mBtn = $("#m_trio_1");
const gBtn = $("#g_trio_1");

/* Fonctions */

// Réinitialisation du rosaire

function resetAll()
{
    goTo("#");

    npBtn.click();
    mBtn.click();
    gBtn.click();
}

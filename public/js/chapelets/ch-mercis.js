// Eléments

const selRondes = $("#sel_rondes");

const btnPremier = $("#dz_grains_1");

// Réinitialisation du chapelet

function resetAll()
{
    selRondes.selectedIndex = 0;

    checkFirst();
}
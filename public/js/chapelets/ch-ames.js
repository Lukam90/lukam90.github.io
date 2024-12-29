// Eléments

const vertusPremier = $("#ste_marie_vertus_1");
const finPremier = $("#fin_trio_1");

/* Fonctions */

//hideAll(maskable);

// Réinitialisation du chapelet

function resetAll()
{
    selType.selectedIndex = 0;
    selMysteres.selectedIndex = 0;

    checkButton(vertusPremier);
    checkButton(finPremier);

    majMysteres();
}

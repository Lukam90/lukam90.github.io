const spanSuite = document.getElementById('suite');

const selRonde = document.getElementById('sel_ronde');

const suites = [
    "qui avez ressuscité les morts,\n priez pour ces chrétiens maintenant à l'agonie,\n et pour nos chers défunts",
    "prédicateur zélé de l'Évangile,\n fortifiez-nous contre les erreurs des ennemis de Dieu,\n et priez pour le Saint-Père et l'Église",
    "puissant du Cœur de Jésus,\n préservez-nous des calamités qui nous menacent à cause de nos péchés",
    "qui chassiez les démons,\n faites-nous triompher de leurs pièges",
    "lys de la pureté céleste,\n purifie-nous des souillures de l'âme\n et préserve notre corps de tous les dangers",
    "guérisseur des malades,\n guéris nos maladies \n et conserve-nous la santé",
    "guide des voyageurs,\n ramène à bon port ceux qui sont en danger de périr\n et calme les ondes troubles de la passion qui agitent nos âmes",
    "libérateur des captifs,\n délivre-nous de la captivité du mal",
    "qui restituez aux personnes jeunes et âgées l'usage de leurs membres,\n obtenez-nous l'usage parfait des sens de notre corps \n et des facultés de notre âme",
    "découvreur des choses perdues,\n aide-nous à retrouver tout ce que nous avons perdu \n dans l'ordre spirituel et temporel",
    "protégé par Marie,\n préviens les dangers qui menacent notre corps et notre âme",
    "aide les pauvres,\n aide-nous dans nos besoins \n et donne du pain et du travail à ceux qui le demandent",
    "nous proclamons avec reconnaissance ta puissance miraculeuse,\n et nous te supplions de nous protéger tous les jours de notre vie",
];

let index = 0;

function setSuite()
{
    index = selRonde.selectedIndex;

    spanSuite.innerText = suites[index];
}
const spanSuite = document.getElementById('suite');

const selRonde = document.getElementById('sel_ronde');

const suites = [
    // 0 : bref
    `Voici la croix du Seigneur ! 
    Fuyez, puissances ennemis ! 
    Le lion de la tribu de Juda, le rejeton de David, a vaincu ! 
    Alléluia !`, 
    // 1
    `qui avez ressuscité les morts, 
    priez pour ces chrétiens maintenant à l'agonie, 
    et pour nos chers défunts.`, 
    // 2
    `prédicateur zélé de l'Évangile, 
    fortifiez-nous contre les erreurs des ennemis de Dieu, 
    et priez pour le Saint-Père et l'Église.`, 
    // 3
    `puissant du Cœur de Jésus, 
    préservez-nous des calamités qui nous menacent 
    à cause de nos péchés.`, 
    // 4
    `qui chassiez les démons, 
    faites-nous triompher de leurs pièges.`, 
    // 5
    `lys de la pureté céleste, 
    purifie-nous des souillures de l'âme  
    et préserve notre corps de tous les dangers.`, 
    // 6
    `guérisseur des malades, 
    guéris nos maladies  
    et conserve-nous la santé.`, 
    // 7
    `guide des voyageurs, 
    ramène à bon port ceux qui sont en danger de périr  
    et calme les ondes troubles de la passion qui agitent nos âmes.`, 
    // 8
    `libérateur des captifs, 
    délivre-nous de la captivité du mal.`, 
    // 9
    `qui restituez aux personnes jeunes et âgées l'usage de leurs membres, 
    obtenez-nous l'usage parfait des sens de notre corps  
    et des facultés de notre âme.`,
    // 10
    `découvreur des choses perdues, 
    aide-nous à retrouver tout ce que nous avons perdu  
    dans l'ordre spirituel et temporel.`,
    // 11
    `protégé par Marie, 
    préviens les dangers qui menacent notre corps et notre âme.`,
    // 12
    `aide les pauvres, 
    aide-nous dans nos besoins  
    et donne du pain et du travail à ceux qui le demandent.`,
    // 13
    `nous proclamons avec reconnaissance ta puissance miraculeuse, 
    et nous te supplions de nous protéger tous les jours de notre vie.`,
];

let index = 0;
let suite = "";

function setSuite()
{
    index = selRonde.selectedIndex;
    suite = suites[index];

    if (index > 0)  spanSuite.innerText = "Saint Antoine,\n" + suite;
    else            spanSuite.innerText = suite;
}
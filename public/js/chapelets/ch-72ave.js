// Descriptions

const suites = [
    "d'enfanter Jésus, le Fils du Très Haut",
    `de visiter sa cousine Élisabeth, 
    elle-même enceinte de Jean, 
    le dernier grand prophète du Messie de Dieu`,
    "de mettre au monde Jésus Christ, le Sauveur",
    "d'adorer le Fils de Dieu avec les Rois Mages",
    `et de Joseph de retrouver au temple, 
    leur fils qui est aussi le Fils du Père`,
    `de communier à la joie de tous les siens 
    qui ont vu le Seigneur sortir vivant de la mort par sa résurrection`,
    `de partager avec son Fils ressuscité la vie nouvelle
    et la gloire des élus`,
];

// Eléments

const selMysteres = $("#sel_mysteres");

const spanSuite = $("#suite");

const btnPremier = $('#dz_grains_1');

// Variables

let index = 0;
let suite = "";

// MAJ de la description

function majSuite()
{
    index = selMysteres.selectedIndex;

    suite = suites[index];

    spanSuite.innerText = suite;

    checkFirst();
}

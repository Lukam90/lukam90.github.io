const intros = [
    // 1
    `Par la précieuse plaie de ta main droite
    et par la douleur causée par le clou qui l’a transpercée,
    que le Précieux Sang qui en jaillit
    convertisse de nombreuses âmes
    et sauve les pécheurs du monde entier.
    Amen.`,
    // 2
    `Par la précieuse plaie de ta main gauche
    et par la douleur causée par le clou qui l’a transpercée,
    que le Précieux Sang qui en jaillit
    délivre les âmes du purgatoire et protège les mourants
    contre les attaques des esprits du mal.
    Amen.`,
    // 3
    `Par la précieuse plaie de ton pied droit
    et par la douleur causée par le clou qui l’a transpercé,
    que le Précieux Sang qui en jaillit
    protège les fondations de l’Église catholique
    contre les plans du malin et des ennemis de la foi.
    Amen.`,
    // 4
    `Par la précieuse plaie de ton pied gauche
    et par la douleur causée par le clou qui l’a transpercé,
    que le Précieux Sang qui en jaillit
    nous protège sur tous nos chemins de vie
    contre les plans et les attaques des esprits mauvais
    et de ceux qui les suivent.
    Amen.`,
    // 5
    `Par la précieuse plaie de ton côté sacré,
    transpercé par la lance,
    que le Précieux Sang et Eau qui en jaillit,
    guérissent les malades,
    apportent les repentir aux mourants
    et nous amènent au bonheur éternel avec Dieu.
    Amen.`,
];

const selMysteres = $("#sel_mysteres");

const btnPremier = $("#dz_grains_1");

const pIntro = $("#intro");
const pRappel = $("#rappel");

let index = 0;
let intro, mystere;

function updateText()
{
    index = selMysteres.selectedIndex;
    mystere = selMysteres.value;

    intro = intros[index];

    pIntro.innerText = intro;
    pRappel.innerText = mystere;

    checkFirst();
}
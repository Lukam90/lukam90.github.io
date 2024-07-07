const selDons = document.getElementById('sel_dons');

const spanSuite = document.getElementById('suite');

const firstRadioBtn = document.getElementById('n1');

const suites = [
    // 1
    `Esprit Saint, accorde-nous le don de la sagesse, 
    que nous sachions reconnaître Dieu présent et manifesté dans le monde, 
    considérant toutes choses dans sa lumière 
    et dans le souvenir permanent de la vie éternelle.`, 
    // 2
    `Esprit Saint, accorde-nous le don de conseil, 
    que nous sachions toujours discerner la volonté de Dieu, 
    même dans les moments les plus difficiles,
    et garde-nous de toute décision inconsidérée, 
    nous dirigeant toujours et en tout par ta prudence.`, 
    // 3
    `Esprit Saint, accorde-nous le don de force, 
    qu’il nous donne le courage de dépasser les épreuves 
    sur le chemin qui nous conduit au salut.`, 
    // 4
    `Esprit Saint, accorde-nous le don d’intelligence 
    qui nous fera comprendre les vérités de la foi, 
    entrer dans leur sens et contempler leur harmonie intérieure. 
    Mets en nous l’amour et l’intelligence des vérités enseignées par l’Église.`, 
    // 5
    `Esprit Saint, accorde-nous le don de science, 
    que nous nous laissions guider par la foi, jour après jour, 
    et que nous sachions discerner ce qui nous conduit vers toi.`, 
    // 6
    `Esprit Saint, accorde-nous le don de piété, 
    que nous demeurions dans la confiance 
    sous le regard aimant de notre Père 
    et que nous soyons les témoins sa tendresse 
    auprès de tous les hommes.`, 
    // 7
    `Viens Esprit de crainte, 
    rends-nous suffisamment conscients de la toute-puissance 
    et de la majesté de Dieu pour ne point pécher envers elle.`,
];

let index = 0;
let suite = "";

function setSuite()
{
    index = selDons.selectedIndex;
    suite = suites[index];

    spanSuite.innerText = suite;

    resetFirst();
}

function resetFirst()
{
    firstRadioBtn.checked = true;
}
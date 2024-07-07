const rosaire = {
    "joyeux" : {
        "mysteres" : ["1. L'annonciation", "2. La visitation", "3. La nativité", "4. La présentation de Jésus au temple", "5. Le recouvrement de Jésus au temple"],
        "clausules" : ["incarné", "le fruit de vos entrailles", "né à Bethléem", "présenté au temple", "perdu et retrouvé"],
    },
    "lumineux" : {
        "mysteres" : ["1. Le baptême de Jésus", "2. Les noces de Cana", "3. L'annonce du royaume", "4. La transfiguration", "5. L'institution de l'eucharistie"],
        "clausules" : ["baptisé dans le Jourdain", "vous exauçant à Cana", "annonçant la Bonne Nouvelle", "manifestant sa gloire aux apôtres", "nous donnant le sacrement de son amour"],
    },
    "douloureux" : {
        "mysteres" : ["1. L'agonie de Jésus", "2. La flagellation", "3. Le couronnement d'épines", "4. Le portement de croix", "5. La crucifixion"],
        "clausules" : ["agonisant au jardin de Gethsémani", "flagellé", "couronné d'épines", "portant sa croix jusqu'au Golgotha", "cloué et mort sur la croix"],
    },
    "glorieux" : {
        "mysteres" : ["1. La résurrection", "2. L'ascension", "3. La Pentecôte", "4. L'assomption", "5. Le couronnement de Marie"],
        "clausules" : ["ressuscité", "qui est monté aux cieux", "dont le Père envoya le Saint-Esprit sur les apôtres", "qui vous éleva au ciel", "qui vous a couronnée reine du ciel"],
    },
};

const selType = document.getElementById("s_type");
const selMysteres = document.getElementById("s_mysteres");

const spanClausule = document.getElementById("clausule");
const firstBtn = document.getElementById('n1');

let mysteres = rosaire["joyeux"]["mysteres"];
let clausules = rosaire["joyeux"]["clausules"];

let index = 0; 
let type, clausule;

function resetFirstButton()
{
    firstBtn.checked = true;
}

function majListes() 
{
    index = 0;

    type = selType.value;

    mysteres = rosaire[type]["mysteres"];
    clausules = rosaire[type]["clausules"];

    for (let optMystere of selMysteres.children) {
        optMystere.innerText = mysteres[index++];
    }

    selMysteres.selectedIndex = 0;

    majInfo();
}

function majInfo() 
{
    if (lang == "fr")
    {
        index = selMysteres.selectedIndex;

        clausule = clausules[index];
        spanClausule.textContent = clausule;
    }

    resetFirstButton();
}
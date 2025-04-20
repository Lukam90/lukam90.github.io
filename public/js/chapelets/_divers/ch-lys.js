/* Données texte */

rosaire = {
    joyeux : [
        "1. L'annonciation",
        "2. La naissance de Jésus",
        "3. L'attribution du nom de Jésus",
        "4. La présentation de Jésus au temple de Jérusalem",
        "5. Le recouvrement de Jésus au temple de Jérusalem"
    ],
    douloureux : [
        "1. Joseph envisage de répudier Marie dans le secret",
        "2. L'absence de place à l'auberge de Bethléem",
        "3. La fuite en Egypte",
        "4. Jésus perdu à Jérusalem",
        "5. La mort de Joseph"
    ],
    glorieux : [
        "1. La glorification de Joseph",
        "2. St Joseph, protecteur de l'Eglise Universelle",
        "3. St Joseph, patron des familles",
        "4. St Joseph, patron de la bonne mort",
        "5. St Joseph, protecteur des mourants et des souffrants"
    ]
};

/* Raccourcis */

document.addEventListener("keydown", e => {
    let numKey = parseInt(e.key);

    if (numKey == 0)   selectDizaine();

    if (numKey >= 1 && numKey <= 5) {
        goTo("#mysteres");

        selectMystere(numKey - 1);
    }

    if (isMajKey(e)) {
        if (e.key == "P")   goTo("#dz_pater");
        if (e.key == "D")   goTo("#dizaine");
        if (e.key == "G")   goTo("#dz_gloria");
        if (e.key == "F")   goTo("#dz_fatima");
    }
});

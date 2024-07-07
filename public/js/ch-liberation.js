const spanClausule = document.getElementById("clausule");

const firstRadioBtn = document.getElementById('n1');

const clausules = ["aie pitié de nous", "guéris-nous", "sauve-nous", "libère-nous", "aide-nous"];

let index = 0;

function updateText(value)
{
    index = parseInt(value) - 1;

    spanClausule.innerText = clausules[index];

    resetFirst();
}

function resetFirst()
{
    firstRadioBtn.checked = true;
    firstRadioBtn.focus();
}
const latinCheckBox = document.getElementById("vlatine");

const frParts = document.querySelectorAll("p[lang='fr']");
const latinParts = document.querySelectorAll("p[lang='latin']");

let lang = "fr";

function hideParts(parts)
{
    for (let part of parts)
    {
        part.style.display = "none";
    }
}

function showParts(parts)
{
    for (let part of parts)
    {
        part.style.display = "block";
    }
}

function switchLang() 
{
    if (latinCheckBox.checked)
    {
        lang = "latin";

        hideParts(frParts);
        showParts(latinParts);
    }
    else
    {
        lang = "fr";

        hideParts(latinParts);
        showParts(frParts);
    }
}
const latinCheckBox = document.getElementById("vlatine");

const frParts = document.querySelectorAll("p[lang='fr']");
const latinParts = document.querySelectorAll("p[lang='latin']");

let lang = "fr";

function hideParts(parts)
{
    for (let part of parts)
    {
        part.style.display = "none";

        console.log(part);
    }
}

function showParts(parts)
{
    for (let part of parts)
    {
        part.style.display = "inline-block";

        console.log(part);
    }
}

function switchLang() 
{
    console.log(frParts, latinParts, latinCheckBox.checked)

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
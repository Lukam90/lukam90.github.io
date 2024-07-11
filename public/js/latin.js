const listFr = document.querySelectorAll("p[lang='fr']");
const listLatin = document.querySelectorAll("p[lang='latin']");

function hideAll(list)
{
    for (let block of list)
    {
        block.style.display = "none";
    }
}

function showAll(list)
{
    for (let block of list)
    {
        block.style.display = "block";
    }
}

function switchLang(code)
{
    if (code == "latin")
    {
        hideAll(listFr);
        showAll(listLatin);
    }
    else
    {
        hideAll(listLatin);
        showAll(listFr);
    }
}
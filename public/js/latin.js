const tradSpans = $all(".traduction");
const frBlocks = $all("ul[lang='fr']");
const latinBlocks = $all("ul[lang='latin']");

let lang;

function setLangSpans()
{
    for (let span of tradSpans)
    {
        span.textContent = lang;
    }
}

function switchLang (event) 
{
    lang = event.target.textContent;

    if (lang == "Latin")
    {
        hideAll(frBlocks);
        showAll(latinBlocks);

        lang = "FR";
    }
    else
    {
        hideAll(latinBlocks);
        showAll(frBlocks);

        lang = "Latin";
    }

    setLangSpans();
}
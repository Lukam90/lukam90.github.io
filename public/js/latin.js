const cbLatin = $("#vlatine");

const frBlocks = $all("ul[lang='fr']");
const latinBlocks = $all("ul[lang='latin']");

console.log(frBlocks, latinBlocks);

function switchLang () 
{
    if (cbLatin.checked)
    {
        hideAll(frBlocks);
        showAll(latinBlocks);
    }
    else
    {
        hideAll(latinBlocks);
        showAll(frBlocks);
    }
}
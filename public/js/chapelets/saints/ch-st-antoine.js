const intros = $all(".intro");

const selRondes = $('#sel_rondes');

let index = 0;

let elIntro = $("#st_antoine_1");

showIntro(elIntro);

function showIntro(element)
{
    hideAll(intros);
    showBlock(element);
}

function setIntro()
{
    index = selRondes.selectedIndex + 1;

    elIntro = $("#st_antoine_" + index);

    showIntro(elIntro);
}

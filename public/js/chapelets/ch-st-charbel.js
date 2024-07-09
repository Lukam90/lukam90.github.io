const bref = document.getElementById('bref');
const suite = document.getElementById('suite');

const selRondes = document.getElementById('sel_rondes');

const firstRadioBtn = document.getElementById('n1');

let index = 0;

hide(suite);

function hide(element)
{
    element.style.display = "none";
}

function show(element)
{
    element.style.display = "block";
}

function setSuites()
{
    index = selRondes.selectedIndex;

    if (index == 0)
    {
        show(bref);
        hide(suite);
    }
    else
    {
        hide(bref);
        show(suite);
    }
}

function resetFirst()
{
    firstRadioBtn.checked = true;
    firstRadioBtn.focus();
}
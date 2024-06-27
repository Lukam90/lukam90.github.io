const divChapelet = document.getElementById('m_chapelet');
const divRosaire = document.getElementById('m_rosaire');

const firstRadioBtn = document.getElementById('n1');

function showBlock(div)
{
    div.style.display = "block";
}

function hideBlock(div)
{
    div.style.display = "none";
}

function changeType(type)
{
    if (type == "chapelet") 
    {
        showBlock(divChapelet);
        hideBlock(divRosaire);
    }
    else
    {
        showBlock(divRosaire);
        hideBlock(divChapelet);
    }

    resetFirst();
}

function resetFirst()
{
    firstRadioBtn.checked = true;
    firstRadioBtn.focus();
}
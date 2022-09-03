$(document).ready
(
function()
{
    
    borders=document.getElementsByClassName("boundary");
    for(i=0;i<borders.length-1;i++)
    {
    borders[i].onmouseover = function(){mouseOver()};
    }

    function mouseOver()
    {
        borders=document.getElementsByClassName("boundary");
        for(i=0;i<borders.length-1;i++)
        {
        borders[i].style.backgroundColor="red";
        }
    }
}
)
 
 

               
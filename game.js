$(document).ready
(
function()
{
    // The game resets upon pressing the starting point S
    starting_point=document.getElementById("start");
    starting_point.onclick=function(){reset()}

    // The borders turn red if they are touched, if we touch any element they will become red,i.e. we loop over all them, because 1 is enough
    //  to achieve the condition.
    borders=document.getElementsByClassName("boundary");
    for(i=0;i<borders.length-1;i++)
    {
    borders[i].onmouseover = function(){mouseOver()};
    }

    // Functions Section

    // If the the elements were hovered over all the list becomes red
    function mouseOver()
    {
        borders=document.getElementsByClassName("boundary");
        for(i=0;i<borders.length-1;i++)
        {
        borders[i].style.backgroundColor="red";
        }
    }

    // If the start button is pressed the boundaries return to their original color
    function reset()
    {
        orders=document.getElementsByClassName("boundary");
        for(i=0;i<borders.length-1;i++)
        {
        borders[i].style.backgroundColor="#eeeeee";
        }
    }
}
)
 
 

               
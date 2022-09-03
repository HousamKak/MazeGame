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

    // Add restart button
    // borders[5].textContent='Restart';
    restart=document.createTextNode("Restart");
    borders[5].appendChild(restart);
    borders[5].style.display="flex";
    borders[5].style.justifyContent="center"
    borders[5].style.alignItems="center"
    borders[5].onclick=function(){restart()}
    // Add functionality to the restart button
    

    // Functions Section

    // If the the elements were hovered over all the list becomes red
    // A lost message appears
    function mouseOver()
    {
        // becoming red
        borders=document.getElementsByClassName("boundary");
        for(i=0;i<borders.length-1;i++)
        {
        borders[i].style.backgroundColor="red";
        }

        // loss message
        document.getElementById("status").textContent='You lost :(';
        
    }

    // If the start button is pressed the boundaries return to their original color
    function reset()
    {
        // reseting color
        orders=document.getElementsByClassName("boundary");
        for(i=0;i<borders.length-1;i++)
        {
        borders[i].style.backgroundColor="#eeeeee";
        }
    
        // reseting message
        document.getElementById("status").textContent='Begin by moving your mouse over the "S"';
    }

    function restart()
    {
        reset();

    }
}
)
 
 

               
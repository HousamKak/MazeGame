$(document).ready
(
function()
{
    
    borders=document.getElementsByClassName("boundary");
    // borders[0].style.backgroundColor="red"
    console.log(borders.length)
    borders[0].onmouseover = function(){mouseOver(0)};
    // for(i=0;i<borders.length;i++)
    // {
    // borders[i].onmouseover = function(){mouseOver(i)};
    // borders[i].onmouseout = function() {mouseOut(i)};
    // }

    function mouseOver(i)
    {
        borders=document.getElementsByClassName("boundary");
        borders[i].style.backgroundColor="red";

    }
    function mouseOut(i)
    {
        borders=document.getElementsByClassName("boundary");
        borders[i].style.backgroundColor="#eeeeee";
    }
}
)
 
 

               
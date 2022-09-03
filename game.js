$(document).ready
(
function()
{
    
    borders=document.getElementsByClassName("boundary");
    words=document.getElementById("helo")
    console.log(words)
    words.onmouseover = function(){mouseOver()};
    words.onmouseout = function() {mouseOut()};
    

    function mouseOver()
    {
        document.getElementById("helo").style.color="red"
    }
    function mouseOut()
    {
        document.getElementById("helo").style.color="black"
    }
}
)
 
 

               
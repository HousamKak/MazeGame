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
    // Score Count
    x=0;
    lis=document.createElement("ul");
    para1=document.createElement("p");
    para2=document.createElement("p");
    borders[2].appendChild(lis);
    lis.appendChild(para2)
    lis.insertBefore(para1,para2)
    lis.style.display="flex";
    lis.style.flexDirection="column";
    lis.style.fontSize="xx-large";
    lis.style.marginLeft="12rem";
    para1.style.margimBottom="0px";
    para2.style.marginTop="0rem";
    para2.style.marginLeft="4rem";
    para1.appendChild(document.createTextNode("Your score:"));
    para2.appendChild(document.createTextNode(x));
    console.log(borders[2])
    
    // <div class="boundary">
	// 			<ul style="display:flex;flex-direction: column;font-size:xx-large;margin-left: 12rem;">
	// 				<p style="margin-bottom:0">Your score:</p>
	// 				<p style="margin-top:0;margin-left: 4rem;">7</p>
	// 			</ul>
	// 		</div>
    

    // Wining condition
    ending_point=document.getElementById("end");
    ending_point.onmouseover = function(){document.getElementById("status").textContent='You Won :)';x+=5};

    // Add restart button
    // borders[5].textContent='Restart';
    restart=document.createTextNode("Restart");
    borders[5].appendChild(restart);
    borders[5].style.display="flex";
    borders[5].style.justifyContent="center"
    borders[5].style.alignItems="center"
    // Add functionality to the restart button
    borders[5].onclick=function(){restart()}

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
 
 

               
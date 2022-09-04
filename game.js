$(document).ready
(
function()
{
    // In this part I am trying to solve the cheating by going from outside. The idea is finding the coordinates of the mouse, and by knowing
    // The dimensions of the block It can be done somehow

    // var mousePos;
    // document.onmousemove = handleMouseMove;
    // setInterval(getMousePosition, 100); // setInterval repeats every X ms
    // function handleMouseMove(event) {
    //     var dot, eventDoc, doc, body, pageX, pageY;

    //     event = event || window.event; // IE-ism

    //     // If pageX/Y aren't available and clientX/Y are,
    //     // calculate pageX/Y - logic taken from jQuery.
    //     // (This is to support old IE)
    //     if (event.pageX == null && event.clientX != null) {
    //         eventDoc = (event.target && event.target.ownerDocument) || document;
    //         doc = eventDoc.documentElement;
    //         body = eventDoc.body;

    //         event.pageX = event.clientX +
    //           (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
    //           (doc && doc.clientLeft || body && body.clientLeft || 0);
    //         event.pageY = event.clientY +
    //           (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
    //           (doc && doc.clientTop  || body && body.clientTop  || 0 );
    //     }

    //     mousePos = {
    //         x: event.pageX,
    //         y: event.pageY
    //     };
    // }
    // function getMousePosition() {
    //     var pos = mousePos;
    //     if (!pos) {
    //         // We haven't seen any movement yet
    //     }
    //     else {
    //         X=pos.x
    //         Y=pos.y
    //         // console.log(X,Y)
    //         return [X, Y]
    //     }
    // }
    // up-left 654,331
    // up-right 695,331
    // down-left 654,373
    // down-right 695,373
    // function diag1(x,p1,p2){
    //     y=((373-331)/(695-654))*(x-695)+373;
    //     return y
    // }

    // function diag2(x,p1,p2){
    //     y=((373-331)/(654-695))*(x-654)+373
    //     return y
    // }

    
    // The game resets upon pressing the starting point S
    starting_point=document.getElementById("start");
    // Here everything in the game starts once the start is clicked
    starting_point.onclick=function()
    {

    starting_point.onclick=function(){reset()}

    
    // The borders turn red if they are touched, if we touch any element they will become red,i.e. we loop over all them, because 1 is enough
    //  to achieve the condition.
    borders=document.getElementsByClassName("boundary");
    for(i=0;i<borders.length-1;i++)
    {
    borders[i].onmouseover = function()
    {
        if(document.getElementById("status").textContent!='You Won :)')
        {
        mouseOver()
        }
    
    };

    }    

    // Wining condition
    ending_point=document.getElementById("end");     
    // getMousePosition()
    ending_point.onmouseover = function(e){
        condition=false;
        // Coord=getMousePosition()
        // console.log(Coord[0],Coord[1])
        // R1=diag1(Coord[0])-Coord[1];
        // R2=diag2(Coord[0])-Coord[1];
        // console.log(R1,R2)
        // if(R2>0 && R1<0)
        // {
        //     condition=true;
        // }
        if(document.getElementById("status").textContent!='You Won :)' && document.getElementById("status").textContent!='You lost :(')
        {
            increaseScore();
        }

        if(document.getElementById("status").textContent!='You lost :(')
        {
        document.getElementById("status").textContent='You Won :)';
        }
        
        
    }

    
    // Score Counter
    lis=document.createElement("ul");
    para1=document.createElement("p");
    para2=document.createElement("p");
    starting_point.appendChild(lis);
    lis.appendChild(para2)
    lis.insertBefore(para1,para2)
    lis.style.display="flex";
    lis.style.flexDirection="column";
    lis.style.fontSize="xx-large";
    lis.style.marginLeft="18rem";
    lis.style.marginTop="-12rem";
    para1.style.margimBottom="0px";
    para2.style.marginTop="-1rem";
    para2.id="targetScore";
    Textscore=document.createTextNode("Your score:")
    score=document.createTextNode("0")
    para1.appendChild(Textscore);
    para2.appendChild(score);

    // Add restart button
    // borders[5].textContent='Restart';
    restart=document.createTextNode("Restart");
    borders[5].appendChild(restart);
    borders[5].style.display="flex";
    borders[5].style.justifyContent="center"
    borders[5].style.alignItems="center"
    // Add functionality to the restart button
    borders[5].onclick=function()
    {
        reset();
        document.getElementById("targetScore").textContent="0";
    
    }

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


        //decrease score
        if(document.getElementById("status").textContent!='You lost :(' && document.getElementById("status").textContent!='You Won :)')
        {
        decreaseScore()
        }

        // loss message
        if(document.getElementById("status").textContent!='You Won :(')
        {
        document.getElementById("status").textContent='You lost :(';
        }
        
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

    // Increasing the score if the End is reached
    function increaseScore()
    {
        element=document.getElementById("targetScore");
        text=element.textContent;
        text=parseInt(text,10)
        text=text+5;
        document.getElementById("targetScore").textContent=text

    }

    function decreaseScore()
    {
        element=document.getElementById("targetScore");
        text=element.textContent;
        text=parseInt(text,10)
        text=text-5;
        document.getElementById("targetScore").textContent=text

    } 
}
}
)
 
 

               
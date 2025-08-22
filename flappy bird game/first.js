

let cartoon=document.querySelector("#cartoon");

let dis=document.querySelector(".dis")

let scoree=document.querySelector(".score")




let horizontalposition=50;            // starts from the start

let vertical=window.innerHeight/3;               // starts from th center thats why divide by 3

let pipeposition=420;                       //position of pipe


let pipeheight=0;

let lowerpipeheight=0;


let speed=8;

let sco=0;



function score(){
    sco+=2;

    scoree.textContent=`SCORE:${sco}`

}




function creatpipe(){


    pipeposition -= 130; 



    

    pipeheight=Math.floor(Math.random() * (300 - 200 + 1)) + 100;

    lowerpipeheight=Math.floor(Math.random() * (300 - 150 + 1)) + 200;

    let pipe=document.createElement("div");

     pipe.style.right=pipeposition+ 'px'

   
  
   
   

    console.log(pipe)

    pipe.className="upperpipe"
    

    let img=document.createElement("img")

    img.src="pipe-green.png"

    img.style.height=pipeheight+'px'
    img.style.width="50px"

  

    pipe.appendChild(img)

     dis.appendChild(pipe);




let lowerpipe=document.createElement("div");

 lowerpipe.style.right=pipeposition+ 'px'

    console.log(lowerpipe)

    lowerpipe.className="lowerpipe"

    let img1=document.createElement("img")

    img1.src="pipe-green.png"

    img1.style.height=lowerpipeheight+'px'
    img1.style.width="50px"



    lowerpipe.appendChild(img1)


 dis.appendChild(lowerpipe);




    console.log("called")



    
}


function movePipes() {
    const upperPipes = document.querySelectorAll('.upperpipe');
    const lowerPipes = document.querySelectorAll('.lowerpipe');

    upperPipes.forEach(pipe => {
        const currentRight = parseInt(pipe.style.right);
        pipe.style.right = (currentRight + speed) + 'px'; // Move right
    });

    lowerPipes.forEach(pipe => {
        const currentRight = parseInt(pipe.style.right);
        pipe.style.right = (currentRight + speed) + 'px'; // Move right
    });
}


function checkCollision() {
    const cartoonRect = cartoon.getBoundingClientRect();
    const upperPipes = document.querySelectorAll('.upperpipe');
    const lowerPipes = document.querySelectorAll('.lowerpipe');

    upperPipes.forEach(pipe => {
        const pipeRect = pipe.getBoundingClientRect();
        if (
            cartoonRect.right > pipeRect.left &&
            cartoonRect.left < pipeRect.right &&
            cartoonRect.bottom > pipeRect.top &&
            cartoonRect.top < pipeRect.bottom
        ) {
            alert("Game Over: Collision with upper pipe!");
           
        }
    });

    lowerPipes.forEach(pipe => {
        const pipeRect = pipe.getBoundingClientRect();
        if (
            cartoonRect.right > pipeRect.left &&
            cartoonRect.left < pipeRect.right &&
            cartoonRect.top < pipeRect.bottom &&
            cartoonRect.bottom > pipeRect.top
        ) {
            alert("Game Over: Collision with lower pipe!");
        
        }
    });
}



   


function gameloop(){

    horizontalposition+=1.5;

    vertical+=10;


cartoon.style.left =horizontalposition+ 'px';

cartoon.style.top =vertical+ 'px';



 if (vertical > window.innerHeight/1.106) {
        alert("Gameover touched bottom")
    }


    movePipes()
    checkCollision()

    

}

gameloop()
creatpipe()

score()

setInterval(score,2000)
setInterval(creatpipe,500)


setInterval(gameloop,100)




window.addEventListener("keydown", function(event) {
    if (event.code === "ArrowUp") {
        vertical -= 50; // Move up by 10 pixels
    } else if (event.code === "ArrowDown") {
        vertical += 5; // Move down by 10 pixels (optional)
    }
});






    
    






let gameSeq = [];
let userSeq = [];


let btns = ["yellow","red","purple","green"];


let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 300);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 300);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randInx = Math.floor(Math.random()*3);
    let randColor = btns[randInx];
    let randBtn = document.querySelector( `.${randColor}`);

  /*  console.log(randInx);
    console.log(randColor);
    console.log(randBtn);
    */
   gameSeq.push(randColor);
   console.log(gameSeq);

    btnFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]) {
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 250);
        }
    }else{
        
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){
             document.querySelector("body").style.backgroundColor ="white";
        }, 500);

        document.querySelector("body").style.color ="white";
        setTimeout(function(){
             document.querySelector("body").style.color ="black";
        }, 500);

        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        reset();
    }
}

function btnPress(){
   // console.log(this);
   let btn = this;
   userFlash(btn);


   userColor = btn.getAttribute("id");
   userSeq.push(userColor);
   checkAns(userSeq.length-1);
   
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}


function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
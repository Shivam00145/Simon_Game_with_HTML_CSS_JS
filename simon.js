let gameseq=[];
let userseq=[];

let started=false;
let level=0;
let btn=["b1","b2","b3","b4"];

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        // console.log("Start");
        started=true;
        levelUp();
    }
});

function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let ran=Math.floor(Math.random()*3);
    let color=btn[ran];
    gameseq.push(color);
    // console.log(gameseq);
    let rbtn=document.querySelector(`.${color}`);
    flash(rbtn);
}

function check(index){
    if(userseq[index]===gameseq[index]){
        // console.log("Same");
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    let btn=this;
    flash(btn);

    ucolor=btn.getAttribute("id");
    // console.log(ucolor);
    userseq.push(ucolor);
    
    check(userseq.length-1);

 }

 let all=document.querySelectorAll(".btn");
 for(b of all){
    b.addEventListener("click",btnPress);
 }

 function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
 }
let gameseq=[];
let userseq=[];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");



document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game is started");
        started = true;
        levelup();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },250);
}



function levelup() {
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;

    let random = Math.floor(Math.random() * 3);
    let randcolor = btns[random];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnFlash(randbtn);
}

function checkans(index){
    if(userseq[index] === gameseq[index]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup, 1000);
        }
    }
    else{
        h2.innerHTML = `Game Over ! your score was <b>${level}</b> <br> Press any key to start .`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnpress() {
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length -1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnpress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;

}

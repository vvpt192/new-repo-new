
let userscore=0;
let compscore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let restbtn=document.querySelector("#restbtn");

   const userscorepara=document.querySelector("#userscore");
    const compscorepara=document.querySelector("#compscore");

const gencomputerchoice=()=>{
    const options =["rock","paper","scissors"];
    const randindx=Math.floor(Math.random()*3);
    return options[randindx];

};
const restgame =(restbtn) => {
    restbtn.addEventListener("click",() => {
        // Reset scores
        userscore = 0;
        compscore = 0;
        userscorepara.innerText = userscore;
        compscorepara.innerText = compscore;

        msg.innerText = "Game reset! Play again.";
        msg.style.backgroundColor = "blue";

    })
};

const drawgame=()=>{
    console.log("Game was draw.");
    msg.innerText="game was draw.play again"
    msg.style.backgroundColor="blue";
}

let showwinner=(userwin)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText="You win!";
        msg.style.backgroundColor="green";

    }else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText="You lose";
        msg.style.backgroundColor="Red";
    }
}

const playGame =(userchoice) =>{
    console.log("user choice",userchoice);
    //geeneret computer choice
    const compchoice=gencomputerchoice();
    console.log("computer choice",compchoice);

if(userchoice===compchoice){
    //draw game
    drawgame();
 } else{
    let userwin = true;
    if(userchoice ==="rock"){

        userwin = compchoice === "paper"?false: true;
    }
        else if(userchoice ==="paper"){
            userwin = compchoice === "scissors"?false: true;
        }
            else{
                userwin = compchoice==="rock"? false: true;
            }

showwinner(userwin)

    }

};


choices.forEach((choice)=>{
   // console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
                playGame(userchoice);
    })
});
restgame(restbtn);
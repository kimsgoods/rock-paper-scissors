const choices = document.querySelectorAll("button");
const status = document.getElementById("status");
const score = document.getElementById("score");
const final = document.getElementById("final");
let winCondition;
let win=0;
let lose=0;
let round=0;

function getComputerChoice(){
    let randomChoice=Math.floor(Math.random()*3)+1;
    let computerSelection="";
    switch (randomChoice){
        case 1:
            computerSelection="Rock";
            break;
        case 2:
            computerSelection="Paper"
            break;
        case 3:
            computerSelection="Scissors";
    }
    return computerSelection;
}

function playRound(playerSelection,computerSelection){
    let winCondition="";
    round++;

    if(playerSelection.toUpperCase()=="ROCK"){
        if(computerSelection.toUpperCase()=="ROCK"){
            winCondition="TIE";
        }else if(computerSelection.toUpperCase()=="PAPER"){
            winCondition="LOSE";
        }else{
            winCondition="WIN";
        }
    }else if(playerSelection.toUpperCase()=="PAPER"){
        if(computerSelection.toUpperCase()=="ROCK"){
            winCondition="WIN";
        }else if(computerSelection.toUpperCase()=="PAPER"){
            winCondition="TIE";
        }else{
            winCondition="LOSE";
        }

    }else if(playerSelection.toUpperCase()=="SCISSORS"){
        if(computerSelection.toUpperCase()=="ROCK"){
            winCondition="LOSE";
        }else if(computerSelection.toUpperCase()=="PAPER"){
            winCondition="WIN";
        }else{
            winCondition="TIE";
        }

    }else{
        console.log("Invalid input you idiot!")
        return;
    }
    console.log("You used "+playerSelection.toUpperCase()+" against the computer's "+computerSelection.toUpperCase());
    status.innerText=`You used ${playerSelection.toUpperCase()} against the computer's ${computerSelection.toUpperCase()}`;
    console.log(winCondition);
    final.innerText=`Round ${round}: ${winCondition}`;
    return winCondition;

}

function game(){    
    
    playerSelection=ps;
    computerSelection=getComputerChoice();
    winCondition=playRound(playerSelection,computerSelection);
    if(winCondition=="WIN"){
        win++;
    }else if(winCondition=="LOSE"){
        lose++;
    }
    console.log(`You:${win} | Computer: ${lose}`);
    score.innerText=`You: ${win} | Computer: ${lose}`;
    if(win == 5 || lose == 5){
        choices.forEach(choice => choice.disabled=true);
        if(win>lose){
            console.log("YOU WIN!");
            final.innerText = "YOU WIN!";
        }else{
            console.log("YOU LOSE :(");
            final.innerText = "YOU LOSE!";
        }
    }
}


function getChoice(e){
    console.log(e.target.id);
    ps =  e.target.id;
    game();
}


choices.forEach(choice => choice.addEventListener("click",getChoice)); 
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
    console.log(winCondition);
    return winCondition;

}

function game(){

    let winCondition;
    let win=0;
    let lose=0;
    for (let i = 1; i <= 5; i++) {
        console.log("Round "+i);
        playerSelection=prompt("Rock Paper Scissors!");
        computerSelection=getComputerChoice();
        winCondition=playRound(playerSelection,computerSelection);
        if(winCondition=="WIN"){
            win++;
        }
        else if(winCondition=="LOSE"){
            lose++;
        }
        console.log(`You:${win} | Computer: ${lose}`);
     }
     if(win>lose){
        console.log("YOU WIN!");
     }else{
        console.log("YOU LOSE :(");
     }
}
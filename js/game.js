playGame();


function playGame(){
let playerScore = 0;
let computerScore = 0;
while(playerScore <= 2 && computerScore <= 2){
    console.log (`(${playerScore} - ${computerScore})`)
    let playerSelection = getPlayerSelection();
    let computerSelection = getComputerSelection();
    let winner = playRound(playerSelection, computerSelection);
    if(+winner == 0){
        ++computerScore;
    }else if (+winner == 1){
        ++playerScore;
    }
}

if (playerScore > computerScore){
    alert(`You win the game! (${playerScore} - ${computerScore})`);
}else{
    alert(`You lost the game! (${playerScore} - ${computerScore})`);
}

}

function playRound(playerSelection, computerSelection){
    // Parameters: player selection, computer selection
    // Returns: 0 -  computer wins, 1 - player wins, 2 - draw
    let selections = playerSelection.concat(",",computerSelection);

    if(selections.includes("rock") && selections.includes("paper")){
        if(playerSelection === "paper"){
            alert("You win! ("+playerSelection+") vs ("+computerSelection+")");
            return 1;
        }else{
            alert("You lose ("+playerSelection+") vs ("+computerSelection+")");
            return 0;
        }
    }else if(selections.includes("paper") && selections.includes("scissors")){
        if(playerSelection === "scissors"){
            alert("You win! ("+playerSelection+") vs ("+computerSelection+")");
            return 1;
        }else{
            alert("You lose ("+playerSelection+") vs ("+computerSelection+")");
            return 0;
        }
    }else if(selections.includes("rock") && selections.includes("scissors")){
        if(playerSelection === "rock"){
            alert("You win! ("+playerSelection+") vs ("+computerSelection+")");
            return 1;
        }else{
            alert("You lose ("+playerSelection+") vs ("+computerSelection+")");
            return 0;
        }
    }else{
        alert("Draw!  ("+playerSelection+") vs ("+computerSelection+")");
        return 2;
    }

}
function getPlayerSelection(entry = ""){
    if (!entry && entry !== null){
        entry = prompt("Rock, paper or scissors?");
        entry = entry.trim().toLowerCase();
        
    }
    console.log("Entry: "+entry);
    switch(entry){
        case "rock":
            return entry;
        case "paper":
            return entry;
        case "scissors":
            return entry;
        default:
            getPlayerSelection(prompt("Invalid selection, choose again:"));
    }
}

function getComputerSelection(){
    let selection = getRandomInt(1,3);
    switch(+selection){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function getRandomInt(min, max){
    //Min and max included
    return Math.floor(Math.random() * (++max - min) ) + min;
}
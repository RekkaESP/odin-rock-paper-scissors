//playGame();

const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;
let winScore = 3;
let gameFinished = false;

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(!gameFinished){
        let winner = playRound(button.textContent.toLocaleLowerCase(), getComputerSelection());
        if(winner == 1){
            ++playerScore;
            document.getElementById('player-score').textContent = playerScore;
        }else if (winner == 0){
            ++computerScore;
            document.getElementById('computer-score').textContent = computerScore;
        }
        if(playerScore >= winScore){
            document.getElementById('span-gameinfo').textContent = 'You won!';
            gameFinished = true;

        }else if (computerScore >= winScore){
            document.getElementById('span-gameinfo').textContent = 'You lost!';
            gameFinished = true;
        }
    }
    else if (gameFinished){
        window.location.reload();
    }
    });
});


function playGame(){
let playerScore = 0;
let computerScore = 0;
while(playerScore <= 2 && computerScore <= 2){
    console.log (`(${playerScore} - ${computerScore})`)
    let playerSelection = getPlayerSelection();
    while(!(typeof playerSelection === "string")){
        alert("Invalid input, please choose correctly")
        playerSelection = getPlayerSelection();
    }
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
    let infoPanel = document.getElementById('span-gameinfo');
    let result = -1;

    if(selections.includes("rock") && selections.includes("paper")){
        if(playerSelection === "paper"){
            result = 1;
        }else{
            result = 0;
        }
    }else if(selections.includes("paper") && selections.includes("scissors")){
        if(playerSelection === "scissors"){
            result = 1;
        }else{
            result = 0;
        }
    }else if(selections.includes("rock") && selections.includes("scissors")){
        if(playerSelection === "rock"){
            result = 1;
        }else{
            result = 0;
        }
    }else{
        result = 2;
    }
    if (result == 1){

        infoPanel.textContent = "You win! ("+playerSelection+" vs "+computerSelection+")";
        infoPanel.style.color = 'green';
    }else if ( result == 0){
        infoPanel.textContent = "You lose ("+playerSelection+" vs "+computerSelection+")";
        infoPanel.style.color = 'red';
    }else{
        infoPanel.textContent = "Draw!  ("+playerSelection+" vs "+computerSelection+")";
        infoPanel.style.color = '#222831';
    }
    return result;

}
function getPlayerSelection(entry = ""){
    console.log("Entry "+entry)
    if (!entry && entry !== null){
        entry = prompt("Rock, paper or scissors?");
        entry = entry.trim().toLowerCase();
        
    }
    switch(entry){
        case "rock":
            return entry;
        case "paper":
            return entry;
        case "scissors":
            return entry;
        default:
            return null;
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
console.log("Hello World")


function getComputerChoice() {
    const randomNumber = (Math.floor(Math.random() * 3));
    switch (randomNumber) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScoreCount += 1;
        playerScoreDiv.textContent = `Player Score: ${playerScoreCount}`;
        return "You win! Rock beats Scissors!";
        
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScoreCount += 1;
        playerScoreDiv.textContent = `Player Score: ${playerScoreCount}`;
        return "You win! Scissors beat Paper!";
        
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScoreCount += 1;
        playerScoreDiv.textContent = `Player Score: ${playerScoreCount}`;
        return "You win! Paper beats Rock!";
        
    }
    else {
        computerScoreCount += 1;
        computerScoreDiv.textContent = `Computer Score: ${computerScoreCount}`;
        return "You lose!";
        
    }
}



const btn1 = document.querySelector("#but1");
btn1.addEventListener("click", () => {
    computerSelection = getComputerChoice().toLowerCase();
    return console.log(playRound("rock", computerSelection));
});

const btn2 = document.querySelector("#but2");
btn2.addEventListener("click", () => {
    computerSelection = getComputerChoice().toLowerCase();
    return console.log(playRound("paper", computerSelection));
});

const btn3 = document.querySelector("#but3");
btn3.addEventListener("click", () => {
    computerSelection = getComputerChoice().toLowerCase();
    return console.log(playRound("scissors", computerSelection));
});

const resultDiv = document.getElementById("result");
//resultDiv.textContent = `Player: ${playerSelection} vs Computer: ${computerSelection}`;

let playerScoreCount = 0;
let computerScoreCount = 0;

const playerScoreDiv = document.getElementById("playerScore");
const computerScoreDiv = document.getElementById("computerScore");

function checkForGameWinner() {
    if (playerScoreCount >= 5 || computerScoreCount >= 5) {
        resultDiv.textContent = playerScoreCount >= 5 ? "Player wins the game!" : "Computer wins the game!";
        playerScoreCount = 0;
        computerScoreCount = 0;
        playerScoreDiv.textContent = `Player Score: 0`;
        computerScoreDiv.textContent = `Computer Score: 0`;
    }
}
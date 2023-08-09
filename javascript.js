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
        return "You win! Rock beats Scissors!";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beat Paper!";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock!";
    }
    else {
        return "You lose!";
    }
}

//let playerSelection = prompt("What is your move? Rock, Paper or Scissors?").toLowerCase();
let playerSelection = "Rock".toLowerCase();
let computerSelection = getComputerChoice().toLowerCase();

console.log(playRound(playerSelection, computerSelection));

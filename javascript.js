console.log("Hello World")


function getComputerChoice() {
    const randomNumber = (Math.floor(Math.random() * 3));
    if (randomNumber === 0) {
        return "Rock";
    }
    else if (randomNumber === 1) {
        return "Paper";
    }
    else if (randomNumber === 2) {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    }
    else if (playerSelection === "rock" && computerSelection === 2) {
        return "You win! Rock beats Scissors"
    }

    else if (playerSelection === "paper" && computerSelection === 0) {
        return "You win! Paper beats Rock!"
    }

    else if (playerSelection === "scissors" && computerSelection === 1) {
        return "You win! Scissors beat Paper!"
    }

    else {
        return "You lose!"
    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

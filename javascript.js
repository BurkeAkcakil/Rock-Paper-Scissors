console.log("Hello World")


let playerSelection = prompt("What is your move?");
let playerScore = 0;
let computerScore = 0;

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
        return "It's a tie!";
    }
    else if (playerSelection === "rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors!";
    }

    else if (playerSelection === "paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock!";
    }

    else if (playerSelection === "scissors" && computerSelection === "Paper") {
        return "You win! Scissors beat Paper!";
    }

    else {
        return "You lose!";
    }
}


let computerSelection = getComputerChoice();

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log(playerSelection);
        let result = playRound(playerSelection.toLowerCase(), computerSelection);
        console.log(result);
        const score = "Player Score: " + playerScore + " CPU Score: " + computerScore
        console.log(score);
    }
}

game();
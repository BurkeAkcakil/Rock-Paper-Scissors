console.log("Hello World")

let userScore = 0
let computerScore = 0



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
        userScore += 1;
        return "You win! Rock beats Scissors!";
        
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        userScore += 1;
        return "You win! Scissors beat Paper!";
        
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        userScore += 1;
        return "You win! Paper beats Rock!";
        
    }
    else {
        computerScore += 1;
        return "You lose!";
        
    }
}

//let playerSelection = .toLowerCase();
//let computerSelection = getComputerChoice().toLowerCase();


// LOGIC THAT PLAYS 5 ROUNDS //

/* function game() {
    for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("What is your move? Rock, Paper or Scissors?").toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
    console.log("Player: " + userScore);
    console.log("Computer: " +computerScore);

    }
}

*/ 
// LOGIC CONSOLE LOG //
/*
game();

if (userScore == computerScore) {
    console.log(`Game Result: Ugh it's a Tie! ${userScore} to ${computerScore}`);
}
else if (userScore > computerScore) {
    console.log(`Game Result: Congrats! You win! ${userScore} to ${computerScore}`);
}
else {
    console.log(`Game Result: You lose! ${computerScore} to ${userScore}`);
}
*/ 



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

const container = document.querySelector("#container");
const content = document.createElement("div");
const buttons = document.querySelectorAll('button');


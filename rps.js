const choice = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

const resultDisplay = document.getElementById("result");
const scoreDisplay = document.getElementById("score");

function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    let log = "";

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            log = "You Lose! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            log = " You Win! Rock beats Scissors";
        } else {
            log = "It's a tie";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            log = "You Win! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            log = "You Lose! Scissors beats Paper";
        } else {
            log = "It's a tie";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            log = "You Lose! Rock beats Scissors";
        } else if (computerSelection === "paper") {
            log = "You Win! Scissors beats Paper";
        } else {
            log = "It's a tie";
        }
    } else {
        log = "Invalid input. Try again";
    }
    resultDisplay.textContent = log;

    if (log.includes("You Win!")) {
        playerScore += 1;
    } else if (log.includes("You Lose!")) {
        computerScore += 1;
    }
    scoreDisplay.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

document.getElementById("rock-btn").addEventListener("click", () => playRound("rock"));
document.getElementById("paper-btn").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors-btn").addEventListener("click", () => playRound("scissors"));
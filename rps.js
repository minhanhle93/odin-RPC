const choice = ["rock", "paper", "scissors"];
const choicesString = choice.join(", ");

function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound() {
    const playerSelection = prompt("Enter your choice ("+choicesString+")", "").toLowerCase();;
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
    console.log(log)
    return log;
}

function game() {
    let totalRounds = 5;
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 0; round < totalRounds; round++) {
        let result = playRound(); 

        if (result.includes("You Win!")) {
            playerScore += 1;
        } else if (result.includes("You Lose!")) {
            computerScore += 1;
        }
    }
    let winner = Math.max(playerScore, computerScore);
    if (winner === playerScore) {
        alert("You Won the Game");
    } else if (winner === computerScore) {
        alert("You Lost the Game");
    } else {
        alert("It's a Tie Game");
    }
}

game();
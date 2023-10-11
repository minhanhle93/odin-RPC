# Rock, Paper, Scissors Game

Live: https://minhanhle93.github.io/odin-RPS/

Welcome to the "Rock, Paper, Scissors" game! This is a simple JavaScript project that allows you to play the classic game against the computer.

## Project Description

This project is a JavaScript implementation of the classic "Rock, Paper, Scissors" game. It provides a fun and interactive way to play the game against a computer opponent.

## How to Play

To play the game, follow these steps:

- Open the JavaScript file in your browser or click on the Live link.
- The game will prompt you to enter your choice, which can be "rock," "paper," or "scissors." Type your choice and press Enter.
- The computer will randomly select its choice.
- The game will determine the winner of the round based on your and the computer's choices.
- The game consists of 5 rounds, and at the end, it will announce whether you won, lost, or tied the game.

## Project Structure

The project consists of the following main components:

- **choice**: An array containing the available choices for the game.
- **getComputerChoice()**: A function that randomly selects a choice for the computer.
- **playRound()**: A function that plays a single round of the game. It prompts the player for their choice, compares it with the computer's choice, and logs the result to the console.
- **game()**: The main game function that plays a total of 5 rounds, keeps track of scores, and announces the winner at the end.
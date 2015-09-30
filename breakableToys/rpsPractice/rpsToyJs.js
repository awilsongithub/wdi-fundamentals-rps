////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    move = getInput();
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    move = randomPlay();
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'. The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (getComputerMove() == getPlayerMove()) {
    winner = 'tie';
    } else if ( (getPlayerMove() == 'rock') && (getComputerMove() == 'scissors') ) {
        winner = 'player';
    } else if ((getPlayerMove() == 'paper') && (getComputerMove() == 'rock') ) {
        winner = 'player'
    } else if ((getPlayerMove() == 'scissors') && (getComputerMove() == 'paper')) {
        winner = 'player';
    } else if ( (getPlayerMove() == 'rock') && (getComputerMove() == 'paper') ) {
        winner = 'computer';
    } else if ((getPlayerMove() == 'paper') && (getComputerMove() == 'scissors') ) {
        winner = 'computer'
    } else if ((getPlayerMove() == 'scissors') && (getComputerMove() == 'rock')) {
        winner = 'computer';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    getWinner();
    // while (playerWins <= 5 && computerWins <= 5) {
    //     getWinner();
        
    //     console.log('You played ' + getPlayerMove() + ' and the computer randomly played ' + getComputerMove() + '.' + getWinner() + 'wins this round.');
        
    // }

    // return [playerWins, computerWins];
}






















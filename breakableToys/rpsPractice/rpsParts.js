// alert("Hello from rpsParts.js");

////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

//works alerts to get my input and displays it in red like randomPlay does
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
//works returns a play
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
/*               My Code                      */
////////////////////////////////////////////////

//works, alert displays the value of move
function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    // move = getInput();
    // alert(move); 
    return move || getInput();
}
//works, alert displays the value of move
function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    move = randomPlay();
    // alert(move);
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    playerMove = getPlayerMove(); //puts result of function into this variable
    computerMove = getComputerMove();
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'. The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    // alert(playerMove);
    // alert(computerMove);

    if (playerMove == computerMove) {
    winner = 'tie';
    } else if ( (playerMove == 'rock') && (computerMove == 'scissors') ) {
        winner = 'player';
    } else if ((playerMove == 'paper') && (computerMove == 'rock') ) {
        winner = 'player'
    } else if ((playerMove == 'scissors') && (computerMove == 'paper')) {
        winner = 'player';
    } else if ( (playerMove == 'rock') && (computerMove == 'paper') ) {
        winner = 'computer';
    } else if ((playerMove == 'paper') && (computerMove == 'scissors') ) {
        winner = 'computer'
    } else if ((playerMove == 'scissors') && (computerMove == 'rock')) {
        winner = 'computer';
    }
    console.log('You chose ' + playerMove + ' and computer selected ' + computerMove + '. ' + winner + ' wins this round.');
    return winner;   
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors. First player to win 5 rounds wins.");
    var playerWins = 0;
    var computerWins = 0;
    var winner;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < 2 && computerWins < 2) {
        winner = getWinner();
        if (winner == 'player') {
        	playerWins++;
        } else if (winner == 'computer') {
        	computerWins++;
        }
        console.log('The score is player: ' + playerWins + ', computer: ' + computerWins + '.'); //leave round results output to user to getWinner() howerver getWinner() has no counter variable so playToFive has to track cumulative scores   
    }
    if (playerWins > computerWins) {
    	console.log('Nice game! You beat the computer!');
    } else {
    	console.log('Valiant effort! The Computer wins this game.');
    }
   
    return [playerWins, computerWins];
}










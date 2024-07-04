// Now lets plan out the javascript infrastructure 

// buttons defined
/**
 * This section declairs the constants for DOM elements
 * that can be used throughout the functions. 
 */
let playerText = document.querySelector("#player-text");
let computerText = document.querySelector("#computer-text");
let resultsText = document.querySelector("#result-text");
let choiceButtons = document.querySelectorAll(".choice-buttons");
let resetButton = document.querySelector("#reset-button");
    
let player;
let computer;

/**
 * This section is where the event listeners live. 
 */
//button event listener
choiceButtons.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultsText.textContent = checkWinner();
    trackScore();
    calculatePercentage();
}));

resetButton.addEventListener("click", terminateGame);

/**
 * This function when called calculats the computer players option. 
 */
//computer player function 
function computerTurn() {

    let randomNumber = Math.floor(Math.random() * 4 ) + 1; 

    switch(randomNumber) {
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3: 
            computer = "SCISSORS";
            break;
        case 4:
            computer = "SCISSORS";
            break;
    }
}

/**
 * This section calculates which statement is posted 
 * in the results section. 
 */

// check the winner function 

function checkWinner() {
    
    if (player === computer) {
        return "draw";
    } 
    else if (computer === "ROCK") {
        return (player === "PAPER") ? "You Win" : "You Lose";
    }
    else if (computer === "PAPER") {
        return (player === "SCISSORS") ? "You Win" : "You Lose";
    }
    else if (computer === "SCISSORS") {
        return (player === "ROCK") ? "You Win" : "You Lose";
    }
}

/**
 * This function takes the the results from the check winner funtion 
 * and tracks the score of both sides.
 */
// function to add points to the players

function trackScore() {
    let result = resultsText.textContent;
    let totalGames = parseInt(document.querySelector("#total-games").innerText);
    let wonGames = parseInt(document.querySelector("#games-won").innerText);

    if (result === "You Win") {
        // Update player score
        let playerScore = parseInt(document.querySelector("#player-result").innerText);
        document.querySelector("#player-result").innerText = playerScore + 1;
        document.querySelector("#total-games").innerText = totalGames + 1;
        document.querySelector("#games-won").innerText = wonGames + 1;

    } else if (result === "You Lose") {
        // Update computer score
        let computerScore = parseInt(document.querySelector("#computer-result").innerText);
        document.querySelector("#computer-result").innerText = computerScore + 1;
        document.querySelector("#total-games").innerText = totalGames + 1;
    } else {
        document.querySelector("#total-games").innerText = totalGames + 1;
    }
}

/**
 * This function is some basic maths to calculate the 
 * winning percentage rate. 
 */
// function to calculate the winning percentage 

function calculatePercentage() {

    let totalGames = parseInt(document.querySelector("#total-games").innerText);
    let wonGames = parseInt(document.querySelector("#games-won").innerText);

    if (totalGames === 0) {
        // function to prevent the game from freezing due to dividing by 0
        document.querySelector("#percentage").innerText = "not enough games"; 
    } else {
        let finalPercentage = (wonGames / totalGames) * 100.0; // Using 100.0 because after hours of trying every other option, this somehow worked because of a floating integer? 
        document.querySelector("#percentage").innerText = parseInt(finalPercentage);
    }

    if (totalGames === 100) {
        terminateGame();
    }
}

/**
 * all about terminator. 
 */
//Terminate the game 
function terminateGame () {
    document.querySelector("#total-games").innerText = Number("0");
    document.querySelector("#games-won").innerText = Number("0");
    document.querySelector("#computer-result").innerText = Number("0");
    document.querySelector("#player-result").innerText = Number("0");
    document.querySelector("#percentage").innerText = Number("0");
    
}
// Now lets plan out the javascript infrastructure 

// buttons defined
let playerText = document.querySelector("#player-text");
let computerText = document.querySelector("#computer-text");
let resultsText = document.querySelector("#result-text");
let choiceButtons = document.querySelectorAll(".choice-buttons");
    
let player;
let computer;
let result;
//button event listener
choiceButtons.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultsText.textContent = checkWinner();
    trackScore();
    calculatePercentage();
}))

//computer player function 
function computerTurn() {

    let randomNumber = Math.floor(Math.random() * 3 ) + 1; 

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
    }
}

// check the winner function 

function checkWinner() {
    
    if (player === computer) {
        return "draw"
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

// function to calculate the winning percentage 

function calculatePercentage() {

    let totalGames = parseInt(document.querySelector("#total-games").innerText);
    let wonGames = parseInt(document.querySelector("#games-won").innerText);

    if (totalGames === 0) {
        // Handle the case where totalGames is zero (avoid division by zero)
        document.querySelector("#percentage").innerText = "not enough games"; 
    } else {
        let finalPercentage = (wonGames / totalGames) * 100.0; // Use 100.0 to force floating-point division
        document.querySelector("#percentage").innerText = parseInt(finalPercentage);
    }
}

function terminateGame () {
    let marker = parseInt(document.querySelector("#percentage").innerText);
    let computerPlayer = parseInt(document.querySelector("#computer-result").innerText);
    let playerPlayer = parseInt(document.querySelector("#player-results").innerText);

    if (marker === 99) {
        alert(`Your score is ${marker}!! You have pleased me.`)
        alert(`Game ends now <3`)

        marker = 0;
        computerPlayer = 0;
        playerPlayer = 0;
    }
}
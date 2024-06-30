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
    trackScore()
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
// function to track the score

function trackScore() {
    let userAnswer = document.getElementById("result-text");
    let playerScore = parseInt(document.getElementsByClassName("player-result").innerText);
    let computerScore = parseInt(document.getElementByClassName("computer-result").innerText);

    if (userAnswer.textContent === "You Win") {
        document.getElementById("player-score").innerText = ++playerScore;
    } else if (userAnswer.textContent === "You Lose") {
        document.getElementById("computer-score").innerText = ++computerScore;
    } else {
        
    }
}
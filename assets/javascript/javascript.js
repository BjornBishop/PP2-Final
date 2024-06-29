// Now lets plan out the javascript infrastructure 

//global javascript code 
document.addEventListener("DOMContentLoaded", function() {
    runGame();
    let controlButtons = document.getElementsByTagName("control-button");

    for (let contButton of controlButtons) {
        contButton.addEventListener("click", function()) {
            if (this.getAttribute("data-type") === "higher") {
                checkAnswerHigher()
                alert(`Feeling High?`)
            } else if (this.getAttribute("data-type") === "lower") {
                checkAnswerLower()
            }
        }
    }
}

// randomely renerage some numbers 
function runGame() {
    let num1 = Math.floor(Math.random() * 25) +1;
    let num2 = Math.floor(Math.random() * 25) +1;
    console.log(num1);
}
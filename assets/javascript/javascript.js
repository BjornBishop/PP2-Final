// Now lets plan out the javascript infrastructure 

//global javascript code 
document.addEventListener("DOMContentLoaded", function() {
    let controlButtons = document.getElementsByClassName("control-button")

    for (let conButton of controlButtons) {
        conButton.addEventListener('click', function() {
            if (this.getAttribute("data-type") === "higher") {
                alert(`On a High?`);
                let gameType = this.getAttribute("data-type");
                runGame();
            } else {
                alert(`Feeling low?`);
                runGame();
            }
        })
    }
    runGame();

})
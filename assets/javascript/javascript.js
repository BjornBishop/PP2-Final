// Now lets plan out the javascript infrastructure 

//global javascript code 
document.addEventListener("DOMContentLoaded", function() {
    let higherButton = document.getElementById("higher-button");
    let lowerButton = document.getElementById("lower-button");
    
    clearBoard();

    higherButton.addEventListener("click", function() {
        checkAnswerHigher(num1, num2);
        alert(`higher button picked`);
    })
    lowerButton.addEventListener("click", function() {
        checkAnswerLower(num1, num2);
        alert(`lower button picked`);
    })

})
// clear the board 

// randomly generate some numbers 


// Check if the number is higher 
function checkAnswerHigher(num1, num2) {

}
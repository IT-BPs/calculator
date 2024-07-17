const display = document.getElementById('display');
let resultDisplayed = false; 

function appendToDisplay(input) {
    if (resultDisplayed) {
        // Jeśli wynik jest wyświetlany i użytkownik wprowadza operator
        if (['+', '-', '*', '/'].includes(input)) {
            display.value += input;
        } else {
            // Jeśli wynik jest wyświetlany i użytkownik wprowadza cyfrę
            display.value = input;
        }
        resultDisplayed = false; 
    } else {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "";
    resultDisplayed = false; 
}

function calculate() {
    try {
        display.value = eval(display.value);
        resultDisplayed = true; 
    } catch (error) {
        display.value = "Error";
        resultDisplayed = false;
    }
}

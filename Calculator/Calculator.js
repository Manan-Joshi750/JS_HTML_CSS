document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('result');
    let currentInput = ''; // Initialize as empty string to store full expression
    let resultDisplayed = false; //To keep track of whether the result is displayed or not...
    // Function to update the display
    function updateDisplay() {
        display.textContent = currentInput || '0'; // Display currentInput or '0' if empty
    }
    // Function to handle number and decimal button clicks
    function handleValue(value) {
        if (resultDisplayed) {
            // If result is displayed, start new expression
            currentInput = '';
            resultDisplayed = false;
        }
        currentInput += value;
        updateDisplay();
    }
    // Function to handle operator button clicks
    function handleOperator(op) {
        if (resultDisplayed) {
            // If result is displayed, start new expression with the result
            currentInput = result + op;
            resultDisplayed = false;
        } else {
            currentInput += op;
        }
        updateDisplay();
    }
    // Function to calculate the result
    function calculate() {
        try {
            result = eval(currentInput);
            display.textContent = result;
            currentInput = result.toString();
            resultDisplayed = true;
        } catch (error) {
            display.textContent = 'Error';
            currentInput = '';
        }
    }
    // Function to clear the calculator
    function clearCalculator() {
        currentInput = '';
        updateDisplay();
    }
    // Event listeners for number and decimal buttons
    const valueButtons = document.querySelectorAll('.value');
    valueButtons.forEach(button => {
        button.addEventListener('click', () => {
            handleValue(button.textContent);
        });
    });
    // Event listeners for operator buttons
    const operatorButtons = document.querySelectorAll('.operator');
    operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            handleOperator(button.textContent);
        });
    });
    // Event listener for the equals button
    const calculateButton = document.getElementById('calculate');
    calculateButton.addEventListener('click', calculate);
    // Event listener for the clear button
    const clearButton = document.getElementById('cancel');
    clearButton.addEventListener('click', clearCalculator);
});
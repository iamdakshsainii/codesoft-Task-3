let currentInput = '';
let operator = '';
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = null;
    updateDisplay();
}

function setOperator(op) {
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
        operator = op;
        currentInput = '';
    } else {
        calculateResult();
        operator = op;
    }
}

function calculateResult() {
    if (firstOperand === null || currentInput === '') return;

    const secondOperand = parseFloat(currentInput);
    let result;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand === 0) {
                result = 'Error';
            } else {
                result = firstOperand / secondOperand;
            }
            break;
        default:
            return;
    }

    currentInput = result.toString();
    firstOperand = null;
    operator = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

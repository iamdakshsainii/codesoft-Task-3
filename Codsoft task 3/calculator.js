let answer = '';
let operator = '';
let first = null;

function AddNumber(number) {
    answer += number;
    show();
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    first = null;
    show();
}

function setOperator(op) {
    if (first === null) {
        first = parseFloat(answer);
        operator = op;
        currentInput = '';
    } else {
        calculateResult();
        operator = op;
    }
}

function calculateResult() {
    if (first === null || answer === '') return;

    const second = parseFloat(answer);
    let result;

    switch (operator) {
        case '+':
            result = first + second;
            break;
        case '-':
            result = first - second;
            break;
        case '*':
            result = first * second;
            break;
        case '/':
            if (second === 0) {
                result = 'Error';
            } else {
                result = first / second;
            }
            break;
        default:
            return;
    }

    answer = result.toString();
    first = null;
    operator = '';
    show();
}

function show() {
    document.getElementById('display').value = answer;
}

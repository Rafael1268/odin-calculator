let displayValue = "";
let num1 = "";
let num2 = "";
let operator = "";
let operatorUsed = false;
const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
};

function clickHandler(button) {
    if (button === "equals") {
        if (operator === "") return;
        if (num2 === "") return;
        const unroundedAnswer = operate(operator, num1, num2);
        const answer = Math.round(unroundedAnswer * 10) / 10;
        display.textContent = answer;
        displayValue = answer;
        num1 = answer;
        num2 = "";
        operatorUsed = false;
    } else if (button === "clear") {
        displayValue = "";
        num1 = "";
        num2 = "";
        operator = "";
        operatorUsed = false;
        display.textContent = "";
    } else {
        if (display.clientWidth > 380) return;
        if (isNaN(button)) {
            if (operatorUsed === true) return;
            display.textContent = displayValue + ` ${button} `;
            displayValue = display.textContent;
            operator = button;
            operatorUsed = true;
        } else {
            display.textContent = displayValue + button;
            displayValue = display.textContent;
            if (operatorUsed === false) {
                num1 = num1 + button;
            } else {
                num2 = num2 + button;
            }
        }
    }
};

buttons.forEach(button => button.addEventListener('click', () => clickHandler(button.id)));
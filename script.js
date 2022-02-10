"use strict";

let inputNumber;
let storedNumber;
let storedOperator = "none";
console.log(inputNumber);
console.log(typeof storedNumber);

const displayInputNum = document.querySelector("#display-input");
const displayStoredNum = document.querySelector("#display-stored div:first-child");
const displayStoredOperator = document.querySelector("#display-stored div:last-child")
const numpadButtons = document.querySelectorAll("#numpad button");
const functionButtons = document.querySelectorAll("#functions button")
const clearButton = document.querySelector("#clear");

const populateInputNumber = function(buttonId) {
    if(inputNumber === undefined) {
        inputNumber = buttonId;
    } else {
        inputNumber = `${inputNumber}${buttonId}`;
    };
    displayInputNum.textContent = inputNumber;
};

const populateStoredNumber = function(num) {
    if(num === undefined) {
        storedNumber = undefined;
    } else {
        storedNumber = parseFloat(num);
    };
    displayStoredNum.textContent = storedNumber;
};

const populateStoredOperator = function(operator) {
    storedOperator = operator;
    switch (operator) {
        case "add":
            displayStoredOperator.textContent = "+";
            break;
        case "subtract":
            displayStoredOperator.textContent = "-";
            break;
        case "multiply":
            displayStoredOperator.textContent = "x";
            break;
        case "divide":
            displayStoredOperator.textContent = "%";
            break;
        case "equals":
            displayStoredOperator.textContent = "=";
            break;
        default:
            displayStoredOperator.textContent = undefined;
            break;
    }
};

const clearInputNumber = function() {
    inputNumber = undefined;
    displayInputNum.textContent = inputNumber;
};

const clearStoredNumber = function() {
    storedNumber = undefined;
    displayInputNum.textContent = storedNumber;
};

// EXTRA CREDIT: Users can get floating point numbers if they do the math 
// required to get one, but they can’t type them in yet. Add a . button and let 
// users input decimals! Make sure you don’t let them type more than one though: 
// 12.3.56.5. It is hard to do math on these numbers. (disable the 
// decimal button if there’s already one in the display)

// EXTRA CREDIT: Add a “backspace” button, so the user can undo 
// if they click the wrong number.

// EXTRA CREDIT: Add keyboard support!

clearButton.addEventListener("click", () => {
    calcClear();
})

functionButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if(storedNumber === undefined) {
            populateStoredNumber(inputNumber);
            populateStoredOperator(button.id);
            clearInputNumber();
        } else {
            populateStoredNumber(operate(storedOperator, storedNumber, parseFloat(inputNumber)));
            populateStoredOperator(button.id);
            clearInputNumber();
        }
        console.log(storedOperator);
        console.log(storedNumber);
        console.log(inputNumber);
    });
});

numpadButtons.forEach((button) => {
    button.addEventListener("click", () => {
        populateInputNumber(button.id);
    });
});

const calcAdd = function(num1, num2) {
    return num1 + num2;
};

const calcSubtract = function(num1, num2) {
    return num1 - num2;
};

const calcMultiply = function(num1, num2) {
    return num1 * num2;
};

const calcDivide = function(num1, num2) {
    return num1 / num2;
};

const calcEquals = function(num) {
    return num;
};

const calcClear = function() {
    clearStoredNumber();
    clearInputNumber();
};

const operate = function(operator, num1, num2) {
    switch (operator) {
        case "add":
            return calcAdd(num1, num2);
            break;
        case "subtract":
            return calcSubtract(num1, num2);
            break;
        case "multiply":
            return calcMultiply(num1, num2);
            break;
        case "divide":
            return calcDivide(num1, num2);
            break;
        case "equals":
            return calcEquals(num2);
            break;
        default:
            throw("Sorry, that didnt work!");
    }
};


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
        inputNumber = parseInt(buttonId);
    } else {
        inputNumber = parseInt(`${inputNumber}${buttonId}`);
    };
    displayInputNum.textContent = inputNumber;
};

const populateStoredNumber = function(num) {
    storedNumber = num;
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

// Need to add additional Display to show the operator for the next operation
// New order of executed functions --> store number and operator --> 
// after next input and click on operator --> execute the first choosen operation --> 
// store as storedNumber -->
// store the actual pressed operation --> repeat

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
            populateStoredNumber(operate(storedOperator, storedNumber, inputNumber));
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


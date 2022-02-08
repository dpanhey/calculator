"use strict";


const displayInputNum = document.querySelector("#display-num div:last-child");
let inputNumber = "";

const displayStoredNum = document.querySelector("#display-num div:first-child");
let storedNumber = "";
console.log(storedNumber);

const numpadButtons = document.querySelectorAll("#numpad button");
const functionButtons = document.querySelectorAll("#functions button")

numpadButtons.forEach((button) => {
    button.addEventListener("click", () => {
        showPressedNumber(button.id);
    });
});

const showPressedNumber = function(buttonId) {
    inputNumber = parseInt(`${inputNumber}${buttonId}`);
    displayInputNum.textContent = inputNumber;
};

const populateStoredNumber = function(num) {
        storedNumber = parseInt(num);
        displayStoredNum.textContent = storedNumber;
};

const clearInputNumber = function() {
    inputNumber = "";
    displayInputNum.textContent = inputNumber;
};

const clearStoredNumber = function() {
    storedNumber = "";
    displayInputNum.textContent = storedNumber;
};

functionButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if(typeof storedNumber !== undefined) {
            populateStoredNumber(operate(button.id, storedNumber, inputNumber))
            clearInputNumber();
        } else {
            populateStoredNumber(inputNumber);
        }
        
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

const calcEquals = function() {

};

const calcClear = function() {
    populateStoredNumber("1");
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
        case "multiplay":
            return calcMultiply(num1, num2);
            break;
        case "divide":
            return calcDivide(num1, num2);
            break;
        case "equals":
            calcEquals();
            break;
        case "clear":
            calcClear();
            break;
        default:
            throw("Sorry, that didnt work!");
    }
};


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

// EXTRA CREDIT: Add keyboard support!

clearButton.addEventListener("click", () => {
    calcClear();
})

const functionButtonClick = function(button) {
    if(storedNumber === undefined) {
        populateStoredNumber(inputNumber);
        populateStoredOperator(button.target.id);
        clearInputNumber();
    } else {
        populateStoredNumber(operate(storedOperator, storedNumber, parseFloat(inputNumber)));
        populateStoredOperator(button.target.id);
        clearInputNumber();
    }
    console.log(button.target.id);
    console.log(storedOperator);
    console.log(storedNumber);
    console.log(inputNumber);
};

const numpadButtonClick = function(button) {
    if(inputNumber === undefined) {
        populateInputNumber(button.target.id);
    } else {
        let decimalTest = (inputNumber.includes(".") && button.target.id == ".");
        if(!decimalTest) {populateInputNumber(button.target.id)};
    }
};

numpadButtons.forEach((button) => {
    button.addEventListener("click", numpadButtonClick);
});

functionButtons.forEach((button) => {
    button.addEventListener("click", functionButtonClick);
});

// const functionButtonKey = function(button) {
//     if(storedNumber === undefined) {
//         populateStoredNumber(inputNumber);
//         populateStoredOperator(button.key);
//         clearInputNumber();
//     } else {
//         populateStoredNumber(operate(storedOperator, storedNumber, parseFloat(inputNumber)));
//         populateStoredOperator(button.key);
//         clearInputNumber();
//     }
//     console.log(button.key);
//     console.log(storedOperator);
//     console.log(storedNumber);
//     console.log(inputNumber);
// };

// const numpadButtonKey = function(button) {
//     if(inputNumber === undefined) {
//         populateInputNumber(button.key);
//     } else {
//         let decimalTest = (inputNumber.includes(".") && button.key == ".");
//         if(!decimalTest) {populateInputNumber(button.key)};
//     }
// };

// document.addEventListener("keydown", (button) => {
//     const buttonSelector = document.querySelector("");
//     console.log(buttonSelector);
//     switch(button.key) {
//         case "-":
//         case "+":
//         case "Enter":
//         case "/":
//         case "*":
//             functionButtonKey(button.key);
//             break;
//         case "Delete":
//             calcClear();
//             break;
//         default:
//             numpadButtonKey(button.key);
//             break;
//     };
// });

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


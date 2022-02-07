"use strict";

const displayInputNum = document.querySelector("#display-num div:last-child");
let inputNumber = "";

const displayStoredNum = document.querySelector("#display-num div:first-child");
let storedNumber;

const numpadButtons = document.querySelectorAll("#numpad button");
const functionButtons = document.querySelectorAll("#functions button")

numpadButtons.forEach((button) => {
    button.addEventListener("click", () => {
        populateInputNumber(button.id);
    });
});

// ADD OPERATOR FUNCTION TO functionButtons!!!!!!!

functionButtons.forEach((button) => {
    button.addEventListener("click", () => {
        switch(button.id) {
            case "subtract":
            case "add":
            case "divide":
            case "multiply":
                storedNumber = inputNumber;
                inputNumber = "";
                displayStoredNum.textContent = storedNumber;
                displayInputNum.textContent = inputNumber;
                break;;
            case ("equals" && storedNumber === ""):
                break;
            case "equals":
                storedNumber = parseInt(storedNumber);
                inputNumber = parseInt(inputNumber);
                storedNumber += inputNumber;
                inputNumber = "";
                displayStoredNum.textContent = storedNumber;
                displayInputNum.textContent = inputNumber;
                break;
            case "clear":
                storedNumber = "";
                inputNumber = "";
                displayStoredNum.textContent = storedNumber;
                displayInputNum.textContent = inputNumber;
        }
    });
});

const populateInputNumber = function(buttonId) {
    inputNumber = `${inputNumber}${buttonId}`;
    displayInputNum.textContent = inputNumber;
}

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
        default:
            throw("Sorry, that didnt work!");
    }
};


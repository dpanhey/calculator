"use strict";

const calcAdd = function(num1, num2) {
    return num1 + num2;
};

console.log(calcAdd(2, 3))

const calcSubtract = function(num1, num2) {
    return num1 - num2;
};

console.log(calcSubtract(5, 2))

const calcMultiply = function(num1, num2) {
    return num1 * num2;
};

console.log(calcMultiply(2, 5))

const calcDivide = function(num1, num2) {
    return num1 / num2;
};

console.log(calcDivide(7, 3))

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

console.log(operate("add", 2, 5));
console.log(operate("subtract", 2, 5));
console.log(operate("multiplay", 2, 5));
console.log(operate("divide", 2, 5));
console.log(operate("test", 2, 5));
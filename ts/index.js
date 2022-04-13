"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var run = true;
    var runStr;
    while (run) {
        var firstStr = (0, readline_sync_1.question)("Enter the first number:\n");
        var operator = (0, readline_sync_1.question)("Enter the operator:\n");
        var secondStr = (0, readline_sync_1.question)("Enter the second number:\n");
        console.log(firstStr, operator, secondStr);
        console.log(calculate(firstStr, operator, secondStr));
        runStr = (0, readline_sync_1.question)("Say \"Y\" if you wish to continue.\n");
        run = decide(runStr);
    }
}
function isNumber(num) {
    return typeof parseInt(num) === "number";
}
function calculate(num1, operator, num2) {
    var operators = ["+", "-", "*", "/"];
    console.log("Index of operator: " + operators.indexOf(operator));
    if (isNumber(num1) && isNumber(num2) && (operators.indexOf(operator) + 1)) {
        var first = parseInt(num1);
        var second = parseInt(num2);
        console.log(first, second);
        switch (operator) {
            case "+":
                return num1 + " + " + num2 + " = " + (first + second);
            case "-":
                return num1 + " - " + num2 + " = " + (first - second);
            case "*":
                return num1 + " * " + num2 + " = " + (first * second);
            case "/":
                return num1 + " / " + num2 + " = " + (first / second);
        }
    }
    return "The input is not valid. Try once again.";
}
function decide(option) {
    return option === "Y";
}
main();

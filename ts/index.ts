import { question } from 'readline-sync';

function main(): void
{
    let run: boolean = true;
    let runStr: string;
    while (run){
        const firstStr: string = question("Enter the first number:\n");
        const operator: string = question("Enter the operator:\n");
        const secondStr: string = question("Enter the second number:\n");

        console.log(firstStr, operator, secondStr);
        console.log(calculate(firstStr, operator, secondStr));

        runStr = question("Say \"Y\" if you wish to continue.\n");
        run = decide(runStr);
    }

}

function isNumber(num: string): boolean
{
    return typeof parseInt(num) === "number";
}

function calculate(num1: string, operator: string, num2: string): string
{
    const operators: Array<string> = ["+", "-", "*", "/"];


    if (isNumber(num1) && isNumber(num2) && (operators.indexOf(operator) + 1)){

        const first: number = parseInt(num1);
        const second: number = parseInt(num2);

        switch (operator){
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

function decide(option: string): boolean
{
    return option === "Y";
}

main();
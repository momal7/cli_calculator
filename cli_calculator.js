// Assignment of calculator
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "Num_1",
        message: "Enter 1st Number: ",
        type: "number"
    },
    {
        name: "Num_2",
        message: "Enter 2nd number",
        type: "number"
    },
    {
        name: "operator",
        message: "select the operator",
        type: "list",
        choices: ['Add', 'subtract', 'Multiply', 'Divid']
    },
]);
let result;
switch (answer.operator) {
    case 'Add':
        result = answer.Num_1 + answer.Num_2;
        console.log("The answer of the addition is :", result);
        break;
    case 'subtract':
        result = answer.Num_1 - answer.Num_2;
        console.log("The answer of the subtraction is :", result);
        break;
    case 'Multiply':
        result = answer.Num_1 + answer.Num_2;
        console.log("The answer of the multiply is :", result);
        break;
    case 'Dived':
        result = answer.Num_1 * answer.Num_2;
        console.log("The answer of the divid is :", result);
        break;
}

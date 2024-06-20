#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //dollars
let myPin = 1234; // Pin code
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
// conditional statment
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code");
    let operationAns = await inquirer.prompt({
        message: "Select any Option Below",
        type: "list",
        name: "operation",
        choices: ["Withdraw", "CheckBalance"],
    });
    // conditional statement
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                message: "enter amount",
                type: "number",
                name: "amount",
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("your current balance is: " + myBalance);
    }
    else {
        console.log("your current balance is: " + myBalance);
    }
    // False condition starts from here 
}
else {
    console.log("Wrong Pin Code");
}

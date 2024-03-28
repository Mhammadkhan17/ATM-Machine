#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 80000;
let pin = 7952;
let pinAnswer = await inquirer.prompt([
    {
        name: "q1",
        message: "enter your pin",
        type: "number",
    },
]);
if (pinAnswer.q1 === pin) {
    console.log(`Your pin is correct`);
}
else {
    console.log(`Your pin is incorrect`);
}
if (pinAnswer.q1 === pin) {
    let Operationans = await inquirer.prompt([
        {
            name: "opt",
            message: "Select an option",
            type: "list",
            choices: ["Withdraw", "Check balance", "Fast cash"],
        },
    ]);
    if (Operationans.opt === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "select your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log(`Insufficient balance`);
        }
        if (isNaN(amountAns.amount)) {
            console.log(`${amountAns.amount} is not a number. Please select a valid number`);
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`You have sucessfully withdrawned ${amountAns.amount}`);
            console.log(`Your remaining balance is ${myBalance}`);
        }
    }
    if (Operationans.opt === "Check balance") {
        console.log(`Your balance is ${myBalance}`);
    }
    if (Operationans.opt === "Fast cash") {
        let fastCash = await inquirer.prompt([
            {
                name: "balance",
                message: "Select your amount",
                type: "rawlist",
                choices: ["500", "1000", "5000", "10000"],
            },
        ]);
        myBalance -= fastCash.balance;
        console.log(`You have withdrawn ${fastCash.balance}`);
        console.log(`Your remaining balance is ${myBalance}`);
    }
}

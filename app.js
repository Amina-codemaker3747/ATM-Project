import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Kindly Enter your Id:"
    },
    {
        type: "number",
        name: "userPin",
        message: "Kindly Enter your PIN:"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select your account type:",
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdrawal"],
        message: "Select your transaction",
        when(answers) {
            return answers.accountType === "Current";
        }
    },
    {
        type: "number",
        name: "amount",
        choices: [1000, 2000, 10000, 20000],
        message: "Select your amount",
        when(answers) {
            return answers.transactionType === "Fast Cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Enter the withdrawal amount:",
        when(answers) {
            return answers.transactionType === "Withdrawal";
        }
    }
]);
if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 1000000);
    console.log("Current balance:", balance);
    const enteredAmount = answers.amount;
    if (enteredAmount <= balance) {
        const remaining = balance - enteredAmount;
        console.log(`You have successfully submited/ withdraw! : ${enteredAmount} \n Now Your remaining Balance is : ${remaining}`);
    }
    else {
        console.log("Your present  Balance is Insufficient...");
    }
}

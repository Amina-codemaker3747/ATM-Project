import { faker } from "faker";
import inquirer from "inquirer";
import chalk from "chalk";

//customer class
class customer {
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    mobNumber: number;
    accNumber: number;

    constructor(
        fName: string,
        lName: string,
        age: number,
        gender: string,
        mob: number,
        acc: number
    ) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.gender = gender;
        this.mobNumber = mob;
        this.accNumber = acc;


    }
}
// Interface bankAccount
interface bankAccount {
    accNumber: number,
    balance: number,
}
// class Bank
class Bank {
    customer: customer[] = []
    account: bankAccount[] = []
    addCustomer(object: customer) {
        this.customer.push(object)
    }
    addAcountNumber(object: bankAccount) {
        this.account.push(object);
    }
}

let mybank = new Bank();

// customer create
for (let i: number = 1; i <= 3; i++) {
    let fName = faker.person.firstName("male")
    let lName = faker.person.lastName()
    let num = parseInt(faker.phone.number("3#########"));
    const cus = new customer(fName, lName, 25 * i, "male", num, 100 + 1)
    mybank.addCustomer(cus)
    mybank.addAcountNumber({ accNumber: cus.accNumber, balance: 100 * i })
}
//Bank functionality
async function bankService(bank: Bank) {
    let service = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "please select the services",
        choices: ["View Balance", "Cash Withdraw", "Cash Deposit"],
    });
    
    // View Balance
    if (service.select == "View Balance") {
        let res = await inquirer.prompt({
            type: "input",
            name: "num",
            message: "please Enter Your Account Number:",
        });
        let account = mybank.account.find((acc) => acc.accNumber == res.num)
        if (!account) {
            console.log(chalk.red.bold.italic("Invalid Account Number"))
        }if(account){
            let name = bank.customer.find((item)=>item.accNumber == account?.accNumber)
            // console.log(Dear ${chalk.green.italic("Account hay")})
        }
    }

    //view Withdraw
    if (service.select == "Cash Withdraw") {
        console.log("Cash Withdraw")
    }
    //view deposit
    if (service.select == "Cash Deposit") {
        console.log("Cash Deposit")
    }
}
bankService(mybank)

function acc(value: bankAccount, index: number, obj: bankAccount[]): value is bankAccount {
    throw new Error("Function not implemented.");
}
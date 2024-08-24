"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("faker");
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
//customer class
class customer {
    constructor(fName, lName, age, gender, mob, acc) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.gender = gender;
        this.mobNumber = mob;
        this.accNumber = acc;
    }
}
// class Bank
class Bank {
    constructor() {
        this.customer = [];
        this.account = [];
    }
    addCustomer(object) {
        this.customer.push(object);
    }
    addAcountNumber(object) {
        this.account.push(object);
    }
}
let mybank = new Bank();
// customer create
for (let i = 1; i <= 3; i++) {
    let fName = faker_1.faker.person.firstName("male");
    let lName = faker_1.faker.person.lastName();
    let num = parseInt(faker_1.faker.phone.number("3#########"));
    const cus = new customer(fName, lName, 25 * i, "male", num, 100 + 1);
    mybank.addCustomer(cus);
    mybank.addAcountNumber({ accNumber: cus.accNumber, balance: 100 * i });
}
//Bank functionality
function bankService(bank) {
    return __awaiter(this, void 0, void 0, function* () {
        let service = yield inquirer_1.default.prompt({
            type: "list",
            name: "select",
            message: "please select the services",
            choices: ["View Balance", "Cash Withdraw", "Cash Deposit"],
        });
        // View Balance
        if (service.select == "View Balance") {
            let res = yield inquirer_1.default.prompt({
                type: "input",
                name: "num",
                message: "please Enter Your Account Number:",
            });
            let account = mybank.account.find((acc) => acc.accNumber == res.num);
            if (!account) {
                console.log(chalk_1.default.red.bold.italic("Invalid Account Number"));
            }
            if (account) {
                let name = bank.customer.find((item) => item.accNumber == (account === null || account === void 0 ? void 0 : account.accNumber));
                // console.log(Dear ${chalk.green.italic("Account hay")})
            }
        }
        //view Withdraw
        if (service.select == "Cash Withdraw") {
            console.log("Cash Withdraw");
        }
        //view deposit
        if (service.select == "Cash Deposit") {
            console.log("Cash Deposit");
        }
    });
}
bankService(mybank);
function acc(value, index, obj) {
    throw new Error("Function not implemented.");
}

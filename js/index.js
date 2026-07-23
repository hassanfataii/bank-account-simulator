import { BankAccount } from "./bankAccount.js";

const user = new BankAccount("ACCT01", "Hassan", 300000);

console.log(user);

console.log(`Initial balance: ${user.checkBalance()}`);

console.log(user.deposit(2000));

console.log(`After first deposit: ${user.checkBalance()}`);

console.log(user.withdraw(100000));

console.log(`After first withdrawal: ${user.checkBalance()}`);

console.log(user.withdraw(3000000));

console.log(`After second withdrawal: ${user.checkBalance()}`);
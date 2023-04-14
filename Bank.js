class Bank {
  constructor(name, branch, ifsc) {
    this.name = name;
    this.branch = branch;
    this.ifsc = ifsc;
  }
  customers = [];

  addCustomer(customer) {
    this.customers.push(customer);
  }
}

class Customer {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  _transactions = [];
  deposit(amount) {
    if (amount < 0) throw new Error("Amount cannot be negative");

    console.log("Amount Rs " + amount + "deposited in " + this.name + " account");
    this._transactions.push(amount);
  }

  withdraw(amount) {
    if (amount < 0) throw new Error("Amount cannot be negative");
    if (this.balance - amount < 0) throw new Error("Insufficient Balance");

    console.log("Amount Rs " + amount + "withdrawn in " + this.name + "account");
    this._transactions.push(-amount);
  }

  get balance() {
    return this._transactions.reduce((acc, curr) => acc + curr, 0);
  }
}

let bank = new Bank("Axis Bank", "Koramangala", "AXIS0000001");
bank.addCustomer(new Customer("John", 25));
bank.addCustomer(new Customer("Jane", 25));

console.log(bank.customers[0].balance);

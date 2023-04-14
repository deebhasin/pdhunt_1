let person = { name: "Deepak", age: 40 };
let perSet = new Set(person.name);
console.log(perSet);

// function to find prime numbers
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(11));
console.log(isPrime(13));

// function to read an excel sheet
// const XLSX = require("xlsx");
// const workbook = XLSX.readFile("C:/Users/Deepak Bhasin/Desktop/Book1.xlsx");
// const sheet_name_list = workbook.SheetNames;
// console.log(XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]));

// write a function to convert roman numerals to integer
let num = (romanToInt) => {
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (let i = 0; i < romanToInt.length; i++) {
    if (roman[romanToInt[i]] < roman[romanToInt[i + 1]]) {
      sum -= roman[romanToInt[i]];
    } else {
      sum += roman[romanToInt[i]];
    }
  }
  return sum;
};
console.log(num("MCMXCIV"));

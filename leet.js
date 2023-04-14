const primaryRomanNum = {
  M: 1000,
  C: 100,
  X: 10,
  I: 1,
};

const secondaryRomanNum = {
  D: 500,
  L: 50,
  V: 5,
};

const compositeRomanNum = {
  CM: 900,
  CD: 400,
  XC: 90,
  XL: 40,
  IX: 9,
  IV: 4,
};

// function test(name, n1, ...others) {
//   console.log(name, n1);
//   console.log(others);
// }

// test("hello", 1, 2, 3, 4, 5);

const legend = { ...compositeRomanNum, ...primaryRomanNum, ...secondaryRomanNum };

// Get all the valid roman numerals in an array
const masterRomanNumerals = Object.keys(legend);

// The main method to convert a Roman Numeral String to an array
const romanToInt = (input) => {
  // check for valid characters
  if (!hasValidRomanChars(input)) {
    return "Invalid Input";
  }

  // Convert input Roman Numeral to an Array
  let romanNumArr = convertRomanStrToArr(input);
  console.log(romanNumArr);

  // Check for whether the input roman numeral a valid String or not
  let message = isValidRomanNumeral(romanNumArr);
  if (message) {
    return message;
  }

  // calculate the sum of the roman numerals
  let target = 0;
  for (let i = 0; i < romanNumArr.length; i++) {
    const element = legend[romanNumArr[i]];
    target += element;
  }
  return target;
};

//----- Validations ------ Check whether there are characters other than Roman Numerals
let hasValidRomanChars = (input) => {
  // Check for a valid String
  if (!input || typeof input !== "string") return false;

  for (let i = 0; i < input.length; i++) {
    const character = input[i];
    if (masterRomanNumerals.indexOf(character) < 0) return false;
  }
  return true;
};

let isCompositeNum = (num) => {
  return num in compositeRomanNum;
};

// Validate the roman numerals array to see whether it follows the validity rules.
function isValidRomanNumeral(romanNumArr) {
  let repeatCounter = 1;

  for (let i = 0; i < romanNumArr.length; i++) {
    const currNum = romanNumArr[i];
    let isPrimary = currNum in primaryRomanNum;
    let isSecondary = currNum in secondaryRomanNum;
    let isComposite = currNum in compositeRomanNum;
    let isSecondaryOrComposite = isSecondary || isComposite;

    let prevNum = romanNumArr[i - 1] ? romanNumArr[i - 1] : "";
    repeatCounter = currNum === prevNum ? repeatCounter + 1 : 1;
    if (prevNum && legend[currNum] > legend[prevNum]) {
      return "current greater than prev ";
    } else if (prevNum && isComposite && String(legend[currNum]).length === String(legend[prevNum]).length) {
      return "current len same as prev ";
    } else if (
      prevNum &&
      (isPrimary || isSecondary) &&
      isCompositeNum(prevNum) &&
      String(legend[currNum]).length === String(legend[prevNum]).length
    ) {
      return "current len same as prev composite";
    } else if (isSecondaryOrComposite && repeatCounter > 1) {
      return "only one Secondary or Composite";
    } else if (isPrimary && repeatCounter > 3) {
      return "only repeat 3 times";
    } else if ((currNum === "IV" || currNum === "IX") && i != romanNumArr.length - 1) {
      return "only repeat IV and IX last";
    }
  }
}

// Converts a Roman Numeral String to an Array of Roman Numerals
function convertRomanStrToArr(romanStr) {
  let romanNumArr = [];
  while (romanStr.trim()) {
    console.log(romanStr);
    for (let i = 0; i < masterRomanNumerals.length; i++) {
      const masterRomanNum = masterRomanNumerals[i];
      if (romanStr.includes(masterRomanNum)) {
        let ind = romanStr.indexOf(masterRomanNum);
        // console.log(romanStr, masterRomanNum);
        romanNumArr[ind] = masterRomanNum;
        romanStr = romanStr.replace(masterRomanNum, " ");
        break;
      }
    }
  }
  return romanNumArr;
}
// console.log(romanToInt(""));
// // console.log(romanToInt());
// console.log(romanToInt(true));
// // console.log(romanToInt("abmndsjdfdfj"));

console.log(romanToInt("CXL"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("IVIII"));
// // console.log(romanToInt("fsfdv09x8098"));
console.log(romanToInt("CDC"));
console.log(romanToInt("CDC"));

// function sub(a, b) {
//   return a - b;
// }
// function mul(a, b) {
//   return a * b;
// }
// function div(a, b) {
//   return a / b;
// }

function calculator(a, b) {
  console.log(a, b);
  let d = 9;
  // let c = 100;
  return function sum(c) {
    // console.log("Sum is: ", a + b);
    return a + b + c + d;
  };
}

let abc = calculator(10, 20);

abc(100);

abc(500);

abc(1);

function add(a, b) {
  console.log("Add is: ", a + b);
  return a + b;
}

function tryIt() {
  console.log("Try It");
  setTimeout(() => add(10, 20), 1000);
}

tryIt();

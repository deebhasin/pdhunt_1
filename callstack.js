"use strict";

let Person = function (name1, age1) {
  this.name1 = name1;
  this.age1 = age1;
};

function calc() {
  console.log(this.name1);
  return this.name1;
}

Person.prototype.calc = calc;

let john = new Person("John", 20);
let deep = new Person("deep", 25);

john.calc();
deep.calc();
console.log(john.__proto__);
console.log(john.__proto__ === Person.prototype);

class Person {
  constructor(name1, age2) {
    console.log("INside Person Constructor");
    this.name = name1;
    this.age = age2;
  }

  doSomething(input) {
    console.log("Inside doSomething");
  }
}

const ankur = new Person("Ankur", 21);
ankur.name;
ankur.doSomething();

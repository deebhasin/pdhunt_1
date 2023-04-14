// set functions
let myFriends = ["Ankit", "Deepak", "Ashwini", "Ankit", "Deepak", "Ashwini"];
let mySet = new Set(myFriends);

let myObjects = [{ name: "Ankit" }, { name: "Deepak" }, { name: "Ankit" }];

let mySet1 = new Set(myObjects);

console.log(mySet1);
mySet.add("Ankur");
console.log(mySet.size, mySet.has("Ankur"));
mySet.delete("Ankur");
console.log(mySet.size, mySet.has("Ankur"));
// mySet.clear();
// console.log(mySet.size);
for (let item of mySet) {
  console.log(item);
}

let mySetToArray = [...mySet];
console.log(mySetToArray);

// Map functions
let myMap = new Map();
myMap.set("name", "Amit");

myMap.set("age", 40).set(true, "This is true").set({ a: "b" }, "This is object").set("name", "Amit");

let age = myMap.get("age");
myMap.delete("age");
console.log(myMap);

for (const [key, value] of myMap) {
  console.log(key, value);
}
let arr = [...myMap];

//String functions
let myString = "   Hello World    ";
console.log(myString.length);
console.log(myString.trim().length);
console.log(myString.trimStart().length);
console.log(myString.trimEnd().length);
console.log(myString.replaceAll(" ", "-").trim().toUpperCase());
console.log(myString.replace(" ", "-").trim().toUpperCase());
console.log(myString.replace(/ /g, "-").trim().toUpperCase());
console.log(myString.trim().slice(1, 9));
console.log(myString.trim().substring(1, 9));
console.log(myString.trim().charAt(1));
console.log(myString.trim().charCodeAt(1));
// console.log(myString.trim().codePointAt(1));
console.log(myString.trim().concat("Deepak"));
console.log(myString.trim().indexOf("World"));
console.log(myString.trim().lastIndexOf("World"));
// console.log(myString.trim().localeCompare("Hello World"));
// console.log(myString.trim().match(/World/g));
console.log(myString.trim().replace("World", "Ankur"));
console.log(myString.trim().startsWith("Hello1"));
console.log(myString.trim().endsWith("World1"));
console.log(myString.trim().includes("World"));
console.log(myString.trim().padStart(20, "0"));
console.log(myString.trim().padEnd(20, "0"));
console.log(myString.trim().repeat(3));
console.log(myString.trim().split(""));
console.log(myString.trim().slice(0, 7));
console.log(myString.trim().slice(0, 7).toUpperCase());
console.log(myString.trim().slice(6));
console.log(myString.trim().slice(6, 7));

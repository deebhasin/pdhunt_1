import { getAllProduct, getProductById } from "./services/ProductsService";

const friends = ["Ankit", "Amit", "akshay"];
const friendDetails = {
  fname: "Ankit",
  lname: "Kumar",
  age: 40,
  gender: "M",
  address: { city: { name: "Pune" }, state: "MH" },
};

// 1 Array Deconstruction What is the value of friend1 and friend2?
const [friend1, friend2] = friends;
console.log(friend1, friend2);

//2 Object Deconstruction
const { fname } = friendDetails;
console.log(fname);

// 3 will this compile
{
  const { fname: firstName, lname: lastName } = friendDetails;
  console.log(firstName, lastName);
}

// 4 will this compile and what is the output
const { fname: firstName = "Deepak", lname: lastName, age: fage = 20 } = friendDetails;
console.log(fage, firstName);

// 5 will this compile and what is the output
const { fname: firstName2, lname: lastName2, ...rest } = friendDetails;
console.log(rest);

// 6 will this compile and what is the output
const [friend3, ...rest1] = friends;
console.log(rest1);

// 7 will this compile and what is the output
const [friend4, friend5, friend6 = "Deepak"] = friends;
console.log(friend6);

// 8 will this compile and what is the output
const printName = (fd) => {
  const { fname } = fd;
  console.log(fname);
};

printName(friendDetails);

// 9  what is the output
const printName2 = ([, , friend]) => {
  console.log(friend);
};
console.log(printName2(friends));

// 10 what is the output
const sum = (...rest) => {
  let sum = 0;
  for (let i = 0; i < rest.length; i++) {
    sum = rest[i] && !isNaN(rest[i]) && typeof rest[i] === "number" ? sum + +rest[i] : sum;
  }

  return sum;
};
console.log(sum(10, 20, 30, "DEE", "40", [111, 666], { a: 1 }, null, undefined, "", 0));

let request = { params: { id: 2 } };
let response = getProductById(request);
// let { status, data } = response;
// let data = response.data;
// saveProduct();
// console.log(status, data);

// 12 what is the output
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
const arr14 = [...arr1];

// 13 what is the output
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
// What is the value of obj3?

// 14 what is the output
const sum2 = (a, b, c, d) => {
  return a + b + c;
};
let unknown = 9;
const arr4 = [1, 2, 3];
unknown && sum2(unknown, 2, 4);

// 15 what is the output
const a = "";
const b = "Deepak";
const d = "Bhasin";
const c = a || b || d;

// 16 what is the output
const a1 = "nnnn";
const b1 = "Deepak";
const c1 = a1 && "" && b1 + "bhasin";

// 17 what is the output
const a2 = "";
const b2 = "Deepak";
const c2 = a2 ?? b2;

// let a = {a:1, b:2, c:3}
// let b = {a:1, b:2, c:3}
// console.log(a===b) // false

let arrFriends = ["Ankit", "Deepak", "Ashwini", "Ankit", "Deepak", "Ashwini"];
let set1 = new Set(arrFriends);

let person = { name: "Deepak", age: 40 };
let perSet = new Set(person.name);
console.log(perSet);

let newSet = new Set(["Deepak", "Ankit", "Deepak", "Ankit"]);
console.log(newSet.size, newSet.has("Deepak"));
newSet.add("Ankit1");

console.log(newSet.size, newSet.has("Deepak"));
newSet.delete("Ankit1");
console.log(newSet.size, newSet.has("Ankit1"));
perSet.clear();
console.log(perSet.size);
for (let item of perSet) {
  console.log(item);
}

let setToArray = [...newSet];
console.log(setToArray);
setToArray.push("Ankit");
console.log(setToArray);

// Check Unique Characters in a sentence
let sentence = "Lets be good today ";
console.log(new Set(sentence).size, sentence.length);

// Create a map with key value pairs

let map = new Map();

map.set("name", "Amit");
map.set("age", 40).set(true, "This is true").set({ a: "b" }, "This is object");
console.log(map);
console.log(map.get("name"), map.get("age"));

// Create a map with key value pairs
let newMap = new Map([
  ["a", "b"],
  ["c", "d"],
]);
console.log(newMap.get("a1"));
console.log(newMap.has("a1"));
for (const item of newMap.values()) {
  console.log(item);
}

console.log(newMap.size);
newMap.delete("a");
console.log(newMap.size);
newMap.clear();

// String functions
let str = "Hello World";
let str2 = "Life is Beautiful";
console.log(typeof str);
console.log(str.charAt(0));
console.log(str.slice(0, 7));
console.log(str.slice(0, 7).toUpperCase());
console.log(str.slice(6));
console.log(str.slice(6, 7));
console.log(str.split(""));
console.log(str.substr(0, 5));
console.log(str.substring(0, 5));

console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.includes("Wo"));
console.log(str.startsWith("He"));
console.log(str.endsWith("World"));

console.log(str.repeat(3));
console.log(str.padStart(20, "0"));
console.log(str.padEnd(20, "0"));
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());
console.log(str.trim().padStart(20, "0").padEnd(23, "1"));
console.log(str.length);
console.log(str.charAt(0));
console.log(str.charCodeAt(0));
console.log(str.codePointAt(0));
console.log(str.concat("Deepak"));
console.log(str.indexOf("World"));
console.log(str.lastIndexOf("World"));
console.log(str.localeCompare("Hello World"));
console.log(str.match(/World/g));
console.log(str.replace("World", "Ankur"));
console.log(str.replaceAll("o", "e"));
console.log(str.search("World"));

console.log(str.toLocaleLowerCase());
console.log(str.toLocaleUpperCase());

// // ES5
// var person = "Janak";

// console.log(person);

// //ES6
// //var
// //const(constant)
// //let(variable)

// const area=12;
// console.log(area);

// let people   = "Ram";
// people= "Sita";
// console.log(people);

/*
 */

// //alert
// alert("Hello World");

// //promt
// const age = prompt("How old are you?");
// console.log(Number(age));

// //confirm
// const isValid = confirm("Are you above 18?");
// console.log(isValid);

// //Write a js program that asks user for principle, rate and time and alerts the interest amount
// // formula: ptr/100 (r is in percentage)

// const p =prompt("Enter principle amount");
// console.log(Number(p));
// const t = prompt("Enter time in year");
// console.log(Number(t));
// const r = prompt("Enter rate of interest in percentage");
// console.log(Number(r));

// const interest = (p*t*r)/100;
// alert("Interest is "+ interest);

// alert(`The interest is ${interest}`);
// //string literal

// //Type conversion / Type coercion
// const num =String(12);
// const num1 = Number(num);

//statements
//syntax

//write as js program that asks user for their gender(m/f) and use if else and alert user about their gender
//m=> you are male

// //conditional statements

// const gender = prompt("Enter your gender(m/f): ");
// if(gender ==="m"){
//     alert("you are male")
// }
// else{
//     alert("you are female")
// }

/*
use of =
= assignment operator
== equality operator
=== strict equality operator

= assignment
== data type && data value
=== data type && data value && Boolean
*/

// //ternary operator
//const gender = prompt("Enter your gender(m/f): ");
//gender === "m" ? alert("you are male"): alert("you are female");

// const gender = prompt("Enter your gender(m/f/o): ");
// gender === "m"
//   ? alert("you are male")
//   : gender === "f"
//   ? alert("you are female")
//   : alert("you are other");

// // Switch case

// const gender = prompt("Enter your gender(m/f/o): ");

// switch (gender) {
//   case "m":
//     alert("you are male");
//     break;
//   case "f":
//     alert("you are female");
//     break;
//   case "o":
//     alert("you are other");
//     break;
//   default:
//     alert("Invalid Gender");
// }

// // Write a js program to calculate the grade
// // >80 A
// // 60 -80 b
// // 40-60 C
// // <40 D

// const marks = prompt("Enter your marks: ");

// switch (true) {
//   case marks > 80:
//     alert("A");
//     break;

//   case marks >= 60 && marks < 80:
//     alert("B");
//     break;

//   case marks >= 40 && marks < 60:
//     alert("C");
//     break;

//   case marks < 40:
//     alert("D");
//     break;

//   default:
//     alert("Invalid marks");
// }

// write a js program to ask user for username and password
// if username matches ur name and password matches ur name
// alert welcone "Your name"
// alert invalid credentials

// const myname = "janak";
// const username = prompt("Enter your username: ");
// const password = prompt("Enter your password: ");
// if (username === myname && password === myname) {
//   alert(`Welcome ${myname}`);
// } else {
//   alert("Invalid credentials");
// }

// const username = prompt("Enter your username: ");
// const password = prompt("Enter your password: ");
// username === "gagan" && password === "gagan"
//   ? alert(`Welcome ${username}`)
//   : alert(`Invalid credentials`);

// // multiplication table of 13 using do while
// let i = 1;
// do {
//   console.log(13 * i);
//   i++;
// } while (i <= 10);

// // multiplication table of 13 using while
// let j = 1;
// while (j <= 10) {
//   console.log(10 * j);
//   j++;
// }

// // multiplication table of 11 using for
// for (k = 1; k <= 10; k++) {
//   mul = 11 * k;
//   console.log(mul);
// }

// output: "Gagan Pradhan"  // Propercase
//indexAt
//slice
//toUpperCase
//concat
/*
this is wrong because i am printing the output in console.log. from console.log it will return undefined when i concat.
const fName = "gagan";
const lName = "pradhan";

const fl = fName.at(0);
const cfl = console.log(fl.toUpperCase());
const ll = lName.at(0);
const cll = console.log(ll.toUpperCase());

const rfl = console.log(fName.slice(1));
const rll = console.log(lName.slice(1));

console.log(cfl.concat(rfl) + " " + cll.concat(rll));
*/

/*
const fName = "gagan";
const lName = "pradhan";
const fl = fName.at(0);
const cfl = fl.toUpperCase();
const ll = lName.at(0);
const cll = ll.toUpperCase();

const rfl = fName.slice(1);
const rll = lName.slice(1);

console.log(cfl.concat(rfl) + " " + cll.concat(rll));
*/

/*

const fName ="gagan";
const lName ="pradhan";
// Output "Gagan Pradhan"

const firstName= fName
.slice(0,1)//r
.toUppercase()//R
.concat(fName.slice(1,fName.length));//aktim
console.log(firstName);//R+aktim=Raktim
*/

/*
//write as JS program that add number format
// 10000=> 10,000

const num = String(10000);
const num1 = num.slice(0, 2);
const num2 = num.slice(2);
const fnum = console.log(num1.concat(",", num2));
*/

/*

// write a ES6 function to sum 2 value a=110 b=200

const sum = (a, b) => {
  //parameters
  return a + b;
};

//fn execution
const result = sum(110, 200);
console.log(result);
alert(`sum is ${result}`);

*/

/*
default fn & parameterized function
//const paging = (num = 5)
const paging = (num) => {
  console.log(num);
};

paging(1);
//paging();
*/

/*
//IIFE immediately invoked function expression
// used in database seeding to store data in database initially by developer
(() => {
  console.log("hello");
})();

*/

/*
//write a js function that reverses a number. Example x=32243 / Expected outcome:34223
//chaining + array

const reverser = (num) => Number(String(num).split("").reverse().join(""));

const answer = reverser(32243);
console.log(answer);
*/

/*
// write a js program to convert temperatures to and from Celsius, Fahrenheit
// formula : c/5 = (f-32)/9


const converter = (value, temp = "c") =>
  temp === "f"
    ? console.log((value * 9) / 5 + 32)
    : console.log(((value - 32) / 9) * 5);

const insert = converter(60, "f");
*/

/*
//By Raktim Sir
const tempConverter = (temp, deg="c")=> 
    deg="c"? `${temp}F =${((temp - 32)*5)/9}C` : (temp/5)*9 +32;
const resp = tempConverter(140);
console.log(resp);
*/

//Object
//CRUD(create, read, update, delete)
//es6
/*
//create
const laptop = {
  model: "Ripple",
  name: "Nova",
  modelYear: 2021,
  age: () => {
    return 2024 - laptop.modelYear; //local
  },
  fullName: function () {
    return this.model + this.name; //global
  },
};

// Read( use . to access the property)
const laptopModel = laptop.model;
const laptopAge = laptop.age();
const laptopFullName = laptop.fullName();
console.log(laptopModel, laptopAge, laptopFullName);

//update

laptop.model = "Apple";
console.log(laptop);

//delete
delete laptop.model;
console.log(laptop);

//Destructure
const { model, fullName, ...rest } = laptop; // ...spread operator
console.log(rest);
*/

//practice
/*
let prod = {
  name: "headphones",
  price: 83.7,
  discount: "7%",
};

const newp = prod.price;
newp <= 100
  ? (np = prod.price - 0.07 * prod.price)
  : (np = prod.price - 0.1 * prod.price);

console.log(np);

//destructure
const { price, ...update } = prod;
update.price = np;
console.log(update);

*/

/* By Raktim Sir

let prod = {
  name: "headphones",
  price: 83.7,
  discount: "7%",
};


const getNewProduct = (product) => {
  const { price, discount, ...rest } = product;
  const discountAmount = price > 100 ? 0.1 * price : 0.07 * price;
  rest.price = price - discountAmount;
  rest.discount = price > 100 ? "10%" : "7%";
  return rest;
};
const newProd = getNewProduct(prod);
console.log(newProd);

*/

/*
//array
//CRUD

const classes = [];

//Update

classes[0] = "janak";
classes[1] = "chiru";
classes[0] = "anji";

console.log(classes);

//read
console.log(classes[0]);

//delete
//array method
classes.shift();
console.log(classes);

*/

/*
Raktim Sir 
let food1 = ["Noodle", "Pasta", "Ice-cream"];
let food2 = ["Fires", "Ice-cream", "Pizza"];
//compare two arrays and find common food if any


const getCommon = (arrA, arrB)=>{
    return arrA.filter((item)=> arrB.includes(item));
};

const result = getCommon(food1, food2);
console.log(result);
*/

/*
const classes=[
  {name: "Ram", age: 20},
  {name:"Sita", age: 15},
  {name:"Shyam", age:40},
];
// Sort this array using sort method in ascending order
//console.log(classes.sort((a, b) => a.age - b.age));

const ageSorter = (arr)=>{
  return arr.sort((a,b)=> a.age- b.age);
};
const res= ageSorter(classes);
console.log(res);
*/

/*
const countries = ["Japan", "Nepal", "USA", "Austarlia"];
//Find the largest country by length
// console.log(countries.sort((a, b) => a.length - b.length));
const largestCountry = (arr)=>{
    let largest = "";
    arr.map((country)=> {
    if (largest.length < country.length){
       largest = country;
    }  
});
return largest;
};
console.log(largestCountry(countries));
*/

/* BY ANJI

const sysRole = ["admin", "manager"];
const userRole = ["user", "receptionist", "manager"];
//compare two roles and return boolean if role matches

const getCommon = (arr1, arr2) => {
  return arr1.some((item) => arr2.includes(item));
};
const result = getCommon(sysRole, userRole);
console.log(result);
*/

const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

//get the total no. of characters by eye color
//(hint, a map of eye color to count)

//result{blue:2, brown :1, yellow:1}
//.reduce() .map()
//reports(graph chart)

const eyeColorCount = characters.reduce((acc, character) => {
  const color = character.eye_color;
  if (acc[color]) {
    acc[color]++;
  } else {
    acc[color] = 1;
  }
  return acc;
}, {});

console.log(eyeColorCount);

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

const fName = "gagan";
const lName = "pradhan";

// output: "Gagan Pradhan"  // Propercase
//indexAt
//slice
//toUpperCase
//concat
/*
this is wrong because i am printing the output in console.log. from console.log it will return undefined when i concat.
const fl = fName.at(0);
const cfl = console.log(fl.toUpperCase());
const ll = lName.at(0);
const cll = console.log(ll.toUpperCase());

const rfl = console.log(fName.slice(1));
const rll = console.log(lName.slice(1));

console.log(cfl.concat(rfl) + " " + cll.concat(rll));
*/

const fl = fName.at(0);
const cfl = fl.toUpperCase();
const ll = lName.at(0);
const cll = ll.toUpperCase();

const rfl = fName.slice(1);
const rll = lName.slice(1);

console.log(cfl.concat(rfl) + " " + cll.concat(rll));

// Expected output: "the lazy dog."
//write as JS program that add number format
// 10000=> 10,000

const num = String(10000);
const num1 = num.slice(0, 2);
const num2 = num.slice(2);
const fnum = console.log(num1.concat(",", num2));

// what is js

// Basic Declaration
// - variable
// always go with let
let name = "bhargav";
let surname = "purohit";
// console.log(`my name is ${name} ${surname}`);
// console.log(phone);
let phone = 799012.9;

// console.log(thisIsVar);
var thisIsVar = "hello";
thisIsVar = 2;
// console.log("2" - 2);
// console.log(2 + +"2");
// const PI = 3.14;
// PI = 34;
// const nums = ["a", "b", true, 2, 3];
// nums.push(4);
// nums.pop();

// nums[2] = false;

// console.log(nums[2]);
// const student = {
//   name: "bhargav",
//   tech: "react",
//   score: 20,
// };
// console.log(Object.values(student));
// student.name = "bhargav update";
// console.log(student);

// const stuarr = [student, student];

//undefined
//null
//NaN
//0
//false

// code here
// lexial structure
// - text case sens.
// - comments
// - literals
// let bhargav = 12;
// let Bhargav = 23;
// let bhaRgav = 45;
// let userName = ""
// let bhargavPurohit = ""

/*
askldjklasjd
kajsdhkjash

*/

// reserved keywords
// enum
// implements
// interface
// package
// private
// protected
// public
// More are there but these are future reserved keywords

// code here

// Loops
// - For, while, do while,
// let twoindex = [1, 2, 3, 4, 5, undefined];

// for (let index = 0; ; ) {
//   if (!twoindex[index]) {
//     break;
//   }
//   console.log(twoindex[index]);
//   index++;
// }
// let index = 0;
// while (false) {
//   console.log(index);
//   index += 2;
// }
// do {
//   console.log(index);
//   index += 2;
// } while (false);
// for in, for of

// Control flow
// - if else, switch case
// break; // contiune;
// if (index == 0) {
//   console.log("Monday");
// } else {
//   //
// }
let index = 1;
function nameHo(params) {
  return params;
}
switch (index) {
  case 1:
    console.log(nameHo("1do ho"));
  case 2:
    nameHo("2 ho");
  case 3:
    nameHo("3 ho");
  default:
    console.log("kai sachu nai");
    break;
}
// door open = 0
// door close = 1

const doors = [0, 1, 0, 1];

//[1, 0, 1, 0]
//[1, 1, 0, 1]
//[1, 1, 1, 0]
//[1, 1, 1, 1]

//4

//[1,0,1] => input

//[1,1,0]
//[1,1,1]

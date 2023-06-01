// functions
// purpose not repeat yourself or do some computation
function boring(params) {
  let name = "bhargav";
  return {
    name,
    callthis() {
      console.log(this);
    },
  };
}
console.log(boring());
const cooldude = (param) => "hi";

//anonymous/callbacks(with out name) function (){} , ()=>{}

setTimeout(() => {
  console.log("first");
}, 1000);

//=> Arrow Functions

//=>factory functions => just create object and return them
const bhargav = {
  name: "bhargav",
  talk() {
    console.log(`hi i am ${this.name}`);
  },
};
bhargav.name = "shubham";

const shubham = {
  name: "shubham",
  talk() {
    console.log(`hi i am ${this.name}`);
  },
};

//do not use find and replace bad very bad

function familyFactor(name) {
  return {
    talk() {
      console.log(name);
    },
  };
}

const bhargavFromFactory = familyFactor("bhargav");
bhargavFromFactory.talk = () => {
  console.log("biju");
};
familyFactor.prototype.talk = () => console.log("aa nai chale"); // this will not work only work in Constructor fun
const bhargavFromFactory2 = familyFactor("bhargav");
bhargavFromFactory.talk();
bhargavFromFactory2.talk();
//some nice example

// function createElement(type, text) {
//   const el = document.createElement(type);
//   el.text = text;
//   document.body.append(el);
//   return {
//     el,
//     setMyColor(color) {
//       el.style.color = color;
//     },
//   };
// }
// const h1 = createElement("h1", "hi my element");

//=> Constructor Function (without classes) similar to factory create object but not return object magical keywork "new" is used
function familyConstructor(name) {
  this.name = name;
}

familyConstructor.prototype.talk = () => "i change in 1step";

const bhargavFromConstructor = new familyConstructor("bhargav");
const bhargavFromConstructor2 = new familyConstructor("bhargav");

familyConstructor.prototype.talk = () => "me change kryu";

console.log(bhargavFromConstructor.talk());
console.log(bhargavFromConstructor2.talk());

//=> Factory Function vs. Constructor vs. Class

//=> Closures

const outer = (a) => {
  return (b) => a + b;
};

const sumClose = outer(10);
console.log(sumClose(10));

//=> Higher Order Functions , take a function as parameter or return a function once it done
//setTimeout()
//setInterval()
//array filter
function calculate(operation, initialValue, numbers) {
  let total = initialValue;
  for (const number of numbers) {
    total = operation(total, number);
  }
  return total;
}

function sum(n1, n2) {
  return n1 + n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

calculate(sum, 0, [1, 2, 4]); // => 7
calculate(multiply, 1, [1, 2, 4]); // => 8

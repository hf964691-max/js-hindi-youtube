// ===============================
// Primitive Data Types (Stored by Value)
// ===============================

// JavaScript has 7 Primitive Data Types:
//
// 1. String
// 2. Number
// 3. Boolean
// 4. null
// 5. undefined
// 6. Symbol
// 7. BigInt

const score = 100;          // Number (Integer)
const scoreValue = 100.3;   // Number (Decimal)

const isLoggedIn = false;   // Boolean

const outsideTemp = null;   // null (Intentional empty value)

let userEmail;              // undefined (Value not assigned yet)

// Symbol creates a unique value every time
const id = Symbol("123");
const anotherId = Symbol("123");

// Even though both have the same description,
// every Symbol is unique.
console.log(id === anotherId); // false

// BigInt is used for very large integers
const bigNumber = 3456543576654356754n;

// ===============================
// Non-Primitive (Reference) Types
// ===============================

// Arrays
const heroes = ["Shaktiman", "Naagraj", "Doga"];

// Objects (Store data as key-value pairs)
const myObj = {
  name: "Hitesh",
  age: 22,
};

// Functions
const myFunction = function () {
  console.log("Hello World");
};

myFunction(); // Hello World

// ===============================
// typeof Operator
// ===============================

// typeof tells the data type of a value

console.log(typeof score);        // number
console.log(typeof "Hello");      // string
console.log(typeof true);         // boolean
console.log(typeof undefined);    // undefined
console.log(typeof outsideTemp);  // object (This is a JavaScript bug)
console.log(typeof id);           // symbol
console.log(typeof bigNumber);    // bigint
console.log(typeof heroes);       // object
console.log(typeof myObj);        // object
console.log(typeof myFunction);   // function
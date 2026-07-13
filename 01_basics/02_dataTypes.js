"use strict"; // Treat all JS code as newer version

// alert("error"); // We are using Node.js, not the browser

console.log(3 + 3); // Keep code readable
console.log("Huzaifa");

const name = "Huzaifa";
const age = 16;
const isLoggedIn = false;

// Primitive Data Types
// Number    => 2^53 - 1 (safe integer limit)
// BigInt
// String    => ""
// Boolean   => true / false
// Null      => standalone value
// Undefined => variable declared but not assigned
// Symbol    => unique value

// Non-primitive
// Object

console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (historical JavaScript bug)
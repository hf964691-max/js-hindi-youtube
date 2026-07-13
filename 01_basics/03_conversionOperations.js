// Type conversions
const score = "33abc";
const valueInNumber = Number(score);

console.log(typeof score); // string
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // NaN
console.log(Number.isNaN(valueInNumber)); // true

// Number("33") => 33
// Number("33abc") => NaN
// Number(true) => 1; Number(false) => 0

const isLoggedIn = "";
const booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // false

// Boolean(1) => true; Boolean(0) => false
// Boolean("") => false
// Boolean("Huzaifa") => true

const someNumber = 33;
const stringNumber = String(someNumber);
console.log(stringNumber); // "33"
console.log(typeof stringNumber); // string

// Arithmetic operations
const value = 3;
const negValue = -value;
console.log(negValue); // -3

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 ** 2);
console.log(2 % 3);

const greeting = "hello ";
const name = "Huzaifa";
console.log(greeting + name);

// If either operand is a string, + performs string concatenation.
console.log("1" + 2); // "12"
console.log(1 + "2"); // "12"
console.log("1" + 2 + 2); // "122"
console.log(1 + 2 + "2"); // "32"

// Parentheses make the intended calculation clear.
console.log(((3 + 4) * 5) % 3); // 2

// Unary + converts values to numbers. Prefer Number(value) when clarity matters.
console.log(+true); // 1
console.log( +""); // 0

const gameCounter = 100;
console.log(gameCounter + 1); // 101

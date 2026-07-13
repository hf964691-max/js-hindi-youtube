// Basic Comparisons
console.log(2 > 1);   // true
console.log(2 >= 1);  // true
console.log(2 < 1);   // false
console.log(2 == 1);  // false
console.log(2 != 1);  // true

// String vs Number (JavaScript converts string to number)
console.log("2" > 1);   // true
console.log("02" > 1);  // true

// null Comparisons
console.log(null > 0);   // false
console.log(null == 0);  // false
console.log(null >= 0);  // true

// undefined Comparisons
console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false

// Strict Equality (No Type Conversion)
console.log("2" === 2); // false
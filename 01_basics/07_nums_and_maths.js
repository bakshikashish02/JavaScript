// ✅ 1. const score = 400 This is a primitive number. JavaScript automatically treats it as a regular number data type. You can perform standard arithmetic operations on it directly.
const score = 400

// ✅ 2. const balance = new Number(100) This creates a Number object, not a primitive. The new Number() constructor creates an object wrapper around the number. " It comes with extra methods and properties ", such as .toString(), .toFixed(), etc.
const balance = new Number(100)

// console.log(score);
// console.log(balance);

// console.log(balance.toString().length)
// console.log(balance.toFixed(2)); // for number of digits after the dot

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3))
// console.log(otherNumber.toPrecision(4))

//🔥 Key Difference 
// Function: Independent, called by its name.
// Method: A function that belongs to an object and is called using objectName.methodName().


const hundreds = 1000000

// console.log(hundreds.toLocaleString('en-IN')) // For putting commas in between the large numbers (Great Function)


// ********************  Maths  ************************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.floor(4.8));
// console.log(Math.ceil(4.2));
// console.log(Math.sqrt(121));
// console.log(Math.min(12,11,7,21));
// console.log(Math.max(12,11,7,21));


// console.log(Math.random()); // Values always range from 0 to 1

// Write the code to take random digit when a dice is thrown

console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
// *10 ensures that the value will not be in range from 0 to 1
// And +1 ensures that the value will not contain the 0, thus range 1 to 10

const min = 10
const max = 20

// Here, max - min defines the range where the random values gonna come
console.log(Math.floor(Math.random() * (max - min) + 1));
// Now as we have declared min value as 10 so, just add min to overall formula
console.log((Math.floor(Math.random() * (max - min) + 1)) + min);




//JavaScript arrays are resizable and can contain a mix of different data types.
// JavaScript array-copy operations create shallow copies(by reference method -> heap storage)

// Array

const myArr = [0,1,2,3,4,5]
const myHeroes = ["shaktimaan", "naagraj"]

const myArr2 = new Array(1,2,3,4) // Here, we don't give square bracket, it will add square bracket automatically.
// This creates an array using the Array constructor.

// 🚩 When to use which?
// ✅ Use the literal syntax [] for simplicity and readability.
// ⚠️ Use new Array() only when you specifically want to create an empty array of a given length.

// In JavaScript, a prototype is an object from which other objects inherit properties and methods. 

// console.log(myArr[0]);
// console.log(myArr2[0]);

// Array Methods
// myArr.push(6);
// myArr.push(7);
// myArr.pop(); // Simply removes the last element from the array

myArr.unshift(9); // Adds value in the beginning of the array
// But it is not a good practice because we are shifting each and every element from their positions. Thus, it is a time consuming task.
myArr.shift(); // Similar, to pop but it pops out the first element.

// We have some methods in array in javascript are questionaries they result in true or false.

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(7)); // Returns -1 as it is not present.

const newArr = myArr.join(); // converts the array object to string type

console.log(myArr);
console.log(typeof myArr);

console.log(newArr);
console.log(typeof newArr);

// Slice - doesn't manipulates the original 
// Splice - manipulates the original array

console.log("A ", myArr)

const myNew1 = myArr.slice(1,3)

console.log(myNew1)
console.log(myArr)

const myNew2 = myArr.splice(1,3)

console.log(myNew2);
console.log(myArr);


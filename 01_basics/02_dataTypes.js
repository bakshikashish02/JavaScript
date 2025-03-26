"use strict"; // It is used to treat all JS codes as new version of JS

// alert (3+3)
/* 
alert is a statement. It will give error because right now we are talking within the NODE, and this statement will work only when the JS is binded with the html file or while using the developer mode in the chrome 
It is working in the browser because the software to run JS was embedded with the browser while the node is a independent software.
There is a different syntax to use the alert statement in node.
*/

console.log(3
    + 3
); // Code readabilty should be high

console.log("Kashish");

// Datatypes
let name = "Kashish";
let age = 22;
let isLoggedIn = false;
let state;

// primitive datatypes
// number => 2^53 range
// bigint => for very very numbers
// string => ""
// boolean => true/false
// null => standalone value , eg = temperature of server
// undefined => value has been not assigned yet
// symbol => used mostly in react. used for finding the uniqueness in the components.

// Non - primitive datatypes
// Object => will discuss later

console.log(typeof "Kashish");
console.log(typeof age);
console.log(typeof undefined); // undefined
console.log(typeof null); // object


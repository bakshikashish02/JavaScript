// In javascript, if you master the objects and the web-browser events then you have mastered javascript.



// Primitive datatypes => Call by value
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
// null means nothing
// undefined means nothing has been assigned yet
// symbol datatype is used for uniqueness

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherid = Symbol("123")

console.table([id, anotherid]);

console.log(id === anotherid);

// const bigNumber = 35673983984734793n
// ✅ Meaning of n:
// The n at the end of the number indicates that it is a BigInt.


// Non - primitive datatypes => call by reference
// Array, Objects, Functions

const heroes = ["Shaktimaan", "Naagraj", "Karan"];

// Objects are declared within the curly brackets.
// Also, objects are stored in key value pair.

let myobj = {
    name: "hiker",
    age: "22"
}

//console.log(myobj);

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof (anotherid));

/*

JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  functional object
       Object  =>  object

*/
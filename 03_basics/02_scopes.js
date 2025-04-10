// Global scope
let a = 200
var c = 300
const b = 100

if(true){
    // Local scope
let a = 10
// console.log("INNER:", a);

const b = 20
var c = 30
}

// console.log("OUTER:", a); 
// console.log("OUTER:", b);
// console.log("OUTER:", c);


//Here, i is a local scope and it has lifetime till the last curly bracket
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// Remember, global scope in node and windows(browser) is different.


// ****************Scope Level and Mini-Hoisting************************

function one(){
    const username = "hiker"
    function two(){
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);
    two();
}

one();


// Let's see the scoping concept in the if conditional statements

if(true){
    const username = "hiker"
    if(username === "hiker"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
}
// console.log(username);


// +++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++

addOne(5);
// Function declaration method 1
function addOne (num){
    return num + 1
}

// addOne(5)


// Function declaration method 2 - variables are very powerful in javascript they can hold JSON files and even functions. When addTwo() is written before the function declaration then we get error because we have stored the function is variable. This concept is known as hoisting and we will study it in depth in future.
// addTwo();
const addTwo = function (num){
    return num + 2
}

addTwo(5);
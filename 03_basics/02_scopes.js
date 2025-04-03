// Global scope
let a = 200
var c = 300
const b = 100

if(true){
    // Local scope
let a = 10
console.log("INNER:", a);

const b = 20
var c = 30
}

console.log("OUTER:", a); 
console.log("OUTER:", b);
console.log("OUTER:", c);


//Here, i is a local scope and it has lifetime till the last curly bracket
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

// Remember, global scope in node and windows(browser) is different.
// cd .. is used to goto the parent directory of the current folder.

// Write a function to print my name

function SayMyName(){ // here, function is a keyword, SayMyName func_name
    console.log("H");
    console.log("I");
    console.log("K");
    console.log("E");
    console.log("R");
}

// SayMyName; // reference of the function. (Mtlb waha function rheta hai)

// SayMyName(); // execution

// Function to add two numbers

function addTwoNumbers (number1, number2){ // number1, number2 are parameters
    console.log(number1 + number2);
}
// addTwoNumbers(3,4); // 3,4 are arguments
// addTwoNumbers(3,"4"); // Type conversion gonna occur
// Having a check is very important in functions because we need to see whether numbers are only passed because the function is of addition of two numbers. So, we will see the conditional checks later.

// We can also store functions in variable in JS

function addTwoNumbers2(number1, number2){
    return (number1 + number2)
}

const result = addTwoNumbers2(3,4);
// console.log("Result: ", result);

function loginUserMessage(username){ // datatype definition in parameter is not required in JS
    
    if(!username){ //username === undefined
        console.log("Please enter userName");
        return;
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("Hiker"));
// console.log(loginUserMessage()); // Undefined came as output because we have not defined it yet

// Suppose you want to avoid the situation that our function doesn't runs the if(!username) wala code then we can set a default value to the function. Let's see below.

function loginUserMessage2 (username = "sam"){ // Here, sam is the default value and is used when no value is passed and if value is passed then it overwrites the default value.
    return `${username} just logged in`
}

// console.log(loginUserMessage2());
// console.log(loginUserMessage2("kashish"));

// ****************************** Project Material *********************************
// In the project which requires shopping cart, there is section of cart where the user keeps on adding the products and we really don't know the number of products he is going to add, therefore we simply need to add the costs of the product.
// Inshort, we don't know how many arguments gonna come and we need to set the parameter of the function

function calculateCartPrice (...num1){ // ... is known as rest or spread operator, but it depends on the use case what we gonna call it.
    return num1
}

// console.log(calculateCartPrice(100,200,300,400,500))

/*
function calculateCartPrice (val1, val2, ...num1)
    return num1
}
    Output => [300,400,500]
*/

const user = {
    username: "hiker",
    price: 999
}
// Now let's see how this object is passed in function
// We always need to type check whether the values we are fetching are available or not. For eg - if we are writing the username value but the place from where we are fetching it doesn't has username value instead it have uservalue name then it will result in undefined output. So, that is why typechecking is mandatory. Also, the typescript language comes with this feature inbuilt.
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `);
    
}

// handleObject(user);

// Passing of the object directly
// handleObject({
//     username: "wolf",
//     price: 199
// })

const myNewArray = [200,400,700,800]

function returnSecondValue (getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

// Passing of the array directly
console.log(returnSecondValue([200,400,700,800]));

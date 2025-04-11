const user = {
    username: "hiker",
    price: 999,

    welcomeMessage: function(){
        // This keyword is used to refer the current context (current scope mei values ki baat krta hai)
        console.log(`${this.username} welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "sam"; // We changed the value of the username
// user.welcomeMessage();

// console.log(this); // Since, we are in node environment, here "this" is refering to empty object. Kyunki abhi global ke ander koi context hi nahi hai.

// Earlier we used to run the javascript in the browser. So, during that times engine was integrated with the browser. So, if we try to run the console.log(this) in the inspect mode of the browser then we will get "window" as a result. Due to this window we are able to capture each event of the window. (Important for interview)


// function one (){
//     let username = "hiker"
//     console.log(this.username); // Can we print this because right now we are in function. [So, this is not going to print]. This means 'this' keyword can access the context (content) within the objects only.
// }
// one();


// const one = function(){
//     let username = "hiker"
//     console.log(this.username)
// }

// one(); // Isko bhi nahi pta hai ki aap kis this.username ki baat krr rhe hai.


// With the modernization of JS, can the ES6 version. Here, comes the concept of arrow function.

// const one = () => {
//     let username = "hiker"
//     console.log(this.username);
// }

// one();




// ++++++++++++++++++++++++++ Arrow function +++++++++++++++++++++++

// Basic arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4));

// Implicit return - Mene maan liya ki aapne return krwana hai, so aapko return keyword likhne ki jarurat nahi hai kyunki aapka ek line ka hi statement hai. (Just remove the parenthesis and return keyword)

// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3,4));

// Another simplistic way to remember the difference between the basic arrow function and the implicit return arrow function. [In basic arrow function we use the return keyword and the {} , and in the implicit return arror function just use the () brackets and remove the {} and return keyword]. Implicit return is used heavily in React.


// Why is the implicit return method famous?
// This is because when we want to return a object we cannot use the explicit return method i.e. {}, so, there we need to use the implicit return method i.e. (). 

const returnObject = () => ({username: "hiker"})

console.log(returnObject());

// To master Javascript just master objects and events.

// Objects can be declared in two ways - 1). as a literal and 2). as a constructor

// Singleton - when you make an object by the constructor then it is made as a single object.

// If declared by a literal then it is not singleton. It can have multiple instances.

// If declared by a constructor then it is singleton. // Object.create


// ***********************Object literals****************************

// Declaring a symbol
const mySym = Symbol("key1");

// Adding a symbol in the object as a key.

const JsUser = {
    name: "Hiker", // Key - value pair
    // By default, all these keys are stored as a string. eg - "name", "age", "location", and so on.
    "full name": "Hiker Wolf",
    // Right syntax to store symbol as a key in the object
    [mySym] : "mykey1",
    age: 22,
    location: "Kangra",
    email: "hiker@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// // console.log(JsUser[email]);
// // So, to access the email using this method, we need to pass the email within the string.
// console.log(JsUser["email"]);

// console.log(JsUser.full name); // Now the full name can't be accessed using the . operator.

// console.log(JsUser["full name"]); // Way to access

// console.log(JsUser.mySym);

// console.log(typeof mySym); // 
// console.log(typeof JsUser.mySym); // So, the mySym within the object JsUser is a string, and we want this as a symbol because in wuestion is was asked that we needed to add symbol in the object as a key.

// So, to do it use the symbol in the [] to let behave it as symbol in the object JsUser.

// Finally, printing out the symbol value and type
// Remember this -> Very Important for interviews
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

// *************************Basics****************************************

// Accessing values of the objects use -> . operator
// To change the values of the objects use -> = operator to overwrite

JsUser.email = "hiker@chatgbt.com";
// console.log(JsUser.email);

// We can freeze the whole object by using the syntax Object.freeze(Object_name)
// Object.freeze(JsUser); (Important functionality)
JsUser.email = "hiker@yahoo.com";
// console.log(JsUser);

//Functions in Javascript - Functions can be stored in the variables in JS

JsUser.greeting = function(){
    console.log("Hello JS user");
}

// console.log(JsUser.greeting); // We are getting function reference
// console.log(JsUser.greeting());

JsUser.greetingTwo = function(){ // Here, we want to refer name that is within the object
console.log(`Hello JS user, ${this.name}`);
// If we want to refer the same object, then we use 'this' keyword. and when we type 'this' then we can access the properties within the object. 'This' is used because we can have multiple objects in same file.
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





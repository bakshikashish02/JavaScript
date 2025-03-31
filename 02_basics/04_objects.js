// const tinderUser = {}; // Non - Singleton object
const tinderUser = new Object(); // Singleton object

tinderUser.id = "123abc"
tinderUser.name = "Hiker"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hiker",
            lastname: "wolf"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
// Optional chaining - If fullname doesnot exists, then we use the question mark (?) symbol. It comes in usage while doing the projects when we fetch details from the api. So, basically it is a different concept and we will study it in details later on.

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}
// const obj3 = { obj1, obj2}

// console.log(obj3); // Here, comes the same problem occured during the merging of the arrays. So, here, instead of merging the two objects we are getting the objects within the objects.

const obj4 = Object.assign({}, obj1, obj2, obj3); // {} is optional here, it guarantees that our passed objects will be stored in the object only.
// Reading style - {} is destination, obj1,obj2,obj3 are sources.

// const obj4 = Object.assign({}, obj1, obj2, obj3); // In this case, destination is obj1 and sources are obj2 and obj3.

// console.log(obj4);

// Now let's see the 90% times used syntax.
// Spread method. (Glass example)

const objFinal = {...obj1, ...obj2};
// console.log(objFinal);

// Important for projects
// Syntax used when the values comes from the database. It comes as array of objects.
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    }
]

// Accessing the objects in the array
// console.log(users[1].email);
console.log(tinderUser);

// In JavaScript, keys and values are methods of the Object class that allow you to work with the properties of an object.
// Accessing the keys of the objects
console.log(Object.keys(tinderUser)); // Return type is in form of array
// tinderUser is written because we want to access the keys of this object

console.log(Object.values(tinderUser));
// tinderUser is written because we want to access the values of this object

// Rarely used 
console.log(Object.entries(tinderUser)); // Key-value pair in array

// To check whether there is property existing of the object when we fetch data from the database - this is important because if no property is found out there it may result in system crash.
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // True
console.log(tinderUser.hasOwnProperty("isLogged")); // False

// If you still want to learn just in the console and see all the properties in the prototype section.
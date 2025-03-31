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
console.log(objFinal);

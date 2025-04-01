const course = {
    coursename: "JS in hindi", 
    price: "999",
    courseInstructor: "Hitesh Sir"
}

// Accessing the name of the courseInstructor
// Method 1
// console.log(course.courseInstructor);
// Method 2
// console.log(course["courseInstructor"]); // As we know that courseInstructor is stored as string behind in JS

// Suppose we want to access the courseInstructor name 4-5 times so, it doesn't seems as a good idea. So, to make code look clean use below method
const {courseInstructor} = course // const is the constant, {define_the_property you want to access} = name of the object.

console.log(courseInstructor);

// Suppose name courseInstructor seems quite large for you then we can also rename it - Use method given below

// DeStructuring of objects to get values within the object.
// DeStructuring of values given below
const {courseInstructor: instructor} = course

console.log(instructor);

// API - jab aapko apna kaam kisi ke sarr pe dal dena hai, then we use API Eg - login function of the gmail.

// API sends some values from the backend and how you gonna write them earlier, that values used to come in XML structure that was very complex. But these values comes in JSON structure.

// JSON structure (syntax) 
// JSON file can be of object type, or the array type [Syntax below]
/*
{
    "name": "hitesh sir",
    "coursename": "JS in hindi",
    "cost": "free"
}
*/

/*
[
    {},
    {},
    {}
]
*/


// Let's see how API is called through JSON - BookMarked components.
// So, basically we want to learn fetch method in the JavaScript. - Will see later.


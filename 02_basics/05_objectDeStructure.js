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

// DeStructuring of values given below
const {courseInstructor: instructor} = course

console.log(instructor);


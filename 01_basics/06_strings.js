// Remember, Strings is the most powerful thing in any programming language

const name = "hiker"
const repoCount = 12

// console.log(name + repoCount + "value"); // But this method is not used now in the modern days.

// `` this called as backticks. Here, comes the concept of string interpolation. Here we make placeholders and whatever variables we make we can directly inject in the placeholders.${variable_name} is used to inject the variable.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Another method of declaring the string (call by reference)
const gameName = new String('hikerwolf');
// new is a keyword that is used to use the objects of the javascript.
// This line creates a new string object using the String constructor and assigns it to the constant variable gameName.

// console.log(gameName);

// console.log(gameName[0]); // Don't get confused here by saying string is like an array , it is not , it is an object. Basically, it key-value pair ie 0:h, 1:i , 2:k , 3:e , 4: r ..... and so on.

// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));

// console.log(gameName.indexOf('k'));

const picName = String('syntax-koder')

const newString = picName.substring(0,4)
console.log(newString)

const anotherString = picName.slice(-8,7) //we can give negative values too
console.log(anotherString);

const newStringOne = "  aalsi    " // this type of problem is commonly faced when we are taking input from the user in our website and user unknowingly or knowingly adds spaces that we don't want to store in our database. So, to remove it use the trim function.

console.log(newStringOne)
console.log(newStringOne.trim())
// Always read the documentation about the trim example from mdn

const url = "https://hiker.com/hiker%77wolf"

console.log(url.replace('%77', '-'))

console.log(url.includes('hiker'))
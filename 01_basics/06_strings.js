const name = "hiker"
const repoCount = 12

// console.log(name + repoCount + "value"); // But this method is not used now in the modern days.

// `` this called as backticks. Here, comes the concept of string interpolation. Here we make placeholders and whatever variables we make we can directly inject in the placeholders.${variable_name} is used to inject the variable.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Another method of declaring the string
const gameName = new String('hikerwolf');
// new is a keyword that is used to use the objects of the javascript.

console.log(gameName);


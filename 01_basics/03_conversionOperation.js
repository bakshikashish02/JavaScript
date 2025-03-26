let score_1 = "77"
let score_2 = "77abc"
let score_3 = null
let score_4 = undefined
let score_5 = true

console.log(typeof(score_1));
console.log(typeof(score_2));
console.log(typeof(score_3));
console.log(typeof(score_4));
console.log(typeof(score_5));

//let value = number(score); //Will give error always use uppercase      
                        //of first letter dureing the datatype conversion
let value_1 = Number(score_1);
let value_2 = Number(score_2);
let value_3 = Number(score_3);
let value_4 = Number(score_4);
let value_5 = Number(score_5);


console.log(typeof (value_1));
console.log(value_1);


console.log(typeof (value_2));
console.log(value_2); // NaN means Not a Number and it is special datatype

/* Here conversion of the string into the number occured but remember when we printed it, it said that the conversion done was not a number keep this in mind. */

console.log(typeof (value_3));
console.log(value_3);

console.log(typeof (value_4));
console.log(value_4);

console.log(typeof (value_5));
console.log(value_5);

/*
Conversion from datatype to number
"77" => 77
"77abc" => NaN
true => 1, false => 0
*/

// Exercise => convert number to boolean

let isLoggedIn = "";
let value_6 = Boolean(isLoggedIn);
console.log(typeof(value_6));
console.log(value_6);

// Conversion from datatype to boolean
// 1 => true, 0 => false
// "Kashish" => true , "" => false
// " " => true.  In JavaScript, any non-empty string (even if it only contains whitespace) is considered a truthy value.


// Conversion from number to string
let someNumber = 44;
let value_7 = String(someNumber);
console.log(typeof (value_7));
console.log(value_7);
// So, here the number is converted into the string type

// Tip - Always do investigation study.



let score_1 = "77"
let score_2 = "77abc"
let score_3 = null
let score_4 = undefined
let score_5 = true

// console.log(typeof(score_1));
// console.log(typeof(score_2));
// console.log(typeof(score_3));
// console.log(typeof(score_4));
// console.log(typeof(score_5));

//let value = number(score); //Will give error always use uppercase      
                        //of first letter dureing the datatype conversion
let value_1 = Number(score_1);
let value_2 = Number(score_2);
let value_3 = Number(score_3);
let value_4 = Number(score_4);
let value_5 = Number(score_5);


// console.log(typeof (value_1));
// console.log(value_1);


// console.log(typeof (value_2));
// console.log(value_2); // NaN means Not a Number
//Even though the conversion fails and results in NaN, the type of value is still number because NaN is considered a special value of the number type in JavaScript.


/* Here conversion of the string into the number occured but remember when we printed it, it said that the conversion done was not a number keep this in mind. */

// console.log(typeof (value_3));
// Surprisingly, this outputs object.
// This is a JavaScript quirk (legacy behavior) where null is incorrectly classified as an object, even though it represents the absence of any object value. This is a known bug in JavaScript.
// console.log(value_3);
// When you convert null to a number using Number(), it becomes 0.
// This is because:
// null is treated as a falsy value.
// When converted to a number, it is coerced into 0.

// console.log(typeof (value_4));
// console.log(value_4);

// console.log(typeof (value_5));
// console.log(value_5);

/*
Conversion from datatype to number
"77" => 77
"77abc" => NaN
true => 1, false => 0
*/

// Exercise => convert number to boolean

let isLoggedIn = "";
let value_6 = Boolean(isLoggedIn);
// console.log(typeof(value_6));
// console.log(value_6);

// Conversion from datatype to boolean
// 1 => true, 0 => false
// "Kashish" => true , "" => false
// " " => true.  In JavaScript, any non-empty string (even if it only contains whitespace) is considered a truthy value.


// Conversion from number to string
let someNumber = 44;
let value_7 = String(someNumber);
// console.log(typeof (value_7));
// console.log(value_7);
// So, here the number is converted into the string type

// Tip - Always do investigation study.



// ********************** Operations ***************************

let x = 3;
let neg_X = -x;

// console.log(neg_X);
// console.log(x + neg_X)
// console.log(x - neg_X)
// console.log(x * neg_X)
// console.log(x / neg_X)
// console.log(x ** neg_X) // Power 
// console.log(x % neg_X)

let str1 = "Hello"
let str2 = " Coder"

let str3 = str1 + str2

// console.log(str3);

// console.log(1 + "2");
// console.log("1" + 2);
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")
// // console.log(1 + "2" + 2)

// ✅ Key Takeaways:
// In JavaScript, the + operator:
// number + string = string (String dominates over the number existence)
// Performs addition if both operands are numbers.
// Performs concatenation if either operand is a string.
// Order of evaluation matters:
// Left-to-right execution affects how the types are coerced.
// When you mix numbers and strings, the first occurrence of a string triggers concatenation for the following operations.

// console.log(3 + 4 * 5 % 3) 
// // Writing this complex statement is not a good practice to do in the projects. It is better that you provide parenthesis within the values so, that it is clear that what of result you want.
// console.log( ((3 + 4) * 5) % 3);

// console.log(true)
// console.log(+true) // Don't write Confusion code write simple code
// console.log(+""); // increment operator 
// These types of sstatements only creates confusion , these are good for exams purposes, but this is not good for production.

// ✅ Conclusion:
// For simple type coercion, both + and Number() behave the same.
// Unary + is faster and more concise, making it ideal for quick conversions.
// Number() is clearer and safer for explicit type casting, especially when dealing with complex data types.

let num1, num2, num3

num1 = num2 = num3 = 4 + 4 // not a good practice , code readability is important

// console.log(num1);
// console.log(num2);
// console.log(num3);

let gameCounter = 100

console.log(gameCounter++); // use and then increment 
console.log(++gameCounter); // increment and then use


// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toprimitive

// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true

// Comparison should always be done with the same datatype
// Different datatype comparisons give unpredictable results

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); 
console.log(null == 0); 
console.log(null >= 0);

/* 
🚩 Key Takeaway:
Comparison operators (>=, >, <, <=) convert null to 0.
Equality operator (==) does not convert null to 0; it only treats null as equal to undefined.
*/

/* 
The reason is that an equality check == and comparisons > < >= <= work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false.
*/

console.log(undefined > 0); 
console.log(undefined == 0); 
console.log(undefined >= 0);

/*
🚩 Key Takeaway:
Comparisons (>, <, >=, <=) with undefined always result in false because undefined is converted to NaN, and NaN is not comparable with numbers.
Equality operator (==) treats undefined as equal to null, but not equal to any number.
*/

// === means that it will check for two things - 
// 1). Checks if the value is equal or not
// 2). Checks if the datatype is same or not

console.log("2" == 2);
console.log("2" === 2); 


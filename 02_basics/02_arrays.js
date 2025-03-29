const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes) // Here, array dc_heroes was taken as input in result

// console.log(marvel_heroes[3][0]); // not a good practice

// New method - concat method
// marvel_heroes.concat(dc_heroes);
// console.log(marvel_heroes); // giving same result as push, but we want to add two arrays so, lets see how

// const all_heroes = marvel_heroes.concat(dc_heroes); // so, this is the method to merge two arrays elements.
// console.log(all_heroes); 

// Spread method - way to remember - drop a glass of water, water spreads.
const all_new_heroes = [...marvel_heroes, ...dc_heroes] // since, we added dot dot dot , now it is no longer array , now it is spreaded as elements. [Therefore, a good practice and everyone uses it.]

// console.log(all_new_heroes);

// Rare situation problem
const another_array = [1, 2, 3, [4,5,6], 7, [6,7, [4, 5]]]
const real_another_array = another_array.flat(Infinity); // Here, infinity is the depth within the array, we may have used here 2 inplace of infinity, but to simply things we directly used infinity.

console.log(real_another_array);

// Commonly experienced problem - during the process of data scrapping
// Sometimes, we select data from the webpage then it comes in different formats like nodeList, object, string but we need in the array format because we want to use loops and we can use loops on the array only. So, to make data in the array format we use "from" method. 

console.log(Array.isArray("Hiker"));
console.log(Array.from("Hiker"));

console.log(Array.from({name:"Hiker"})); // Interesting case, here it is returning empty array, So, to get the array we need to specify we want to make array of keys or values. (Will study this later.)

// Converting different variables into the array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));






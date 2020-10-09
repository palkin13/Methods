var numbers = [3, 56, 2, 48, 5];

//MAP -Create a new array by doing something with each item in an array.
// function double (x) {
// return x*2 ;
// }
// const newNumber = numbers.map(double);
// console.log(newNumber);

// const newNumber = numbers.map(function(x) {
//   return x*2;
// });
/* ////////////////////////////////////////// */

//FILTER - Create a new array by keeping the items that return true.
 
// const newNumbers = numbers.filter(function(num){
// return num>10
// });
// console.log(newNumbers);

/* ////////////////////////////////////////// */

//REDUCE - Accumulate a value by doing something to each item in an array.

// const sum = numbers.reduce(function(accumulator , currentNumber){
// console.log("accumulator = " + accumulator);
// console.log("New number = " + currentNumber);
//  return accumulator + currentNumber;
// });
// console.log(sum)

/* ////////////////////////////////////////// */

//FIND - find the first item that matches from an array.

// const item = numbers.find(function (num){
//   return num>10
// });
// console.log(item)

/* ////////////////////////////////////////// */

//FINDINDEX - find the index of the first item that matches.
// const item2 = numbers.findIndex(function (num){
//   return num>10
// });
// console.log(item2)

/* ////////////////////////////////////////// */

// SUBSTRING
import emojipedia from "./emojipedia";

const newemojiPedia = emojipedia.map(function(emojiEntry){
  return emojiEntry.meaning.substring(0,100);
});
console.log(newemojiPedia);


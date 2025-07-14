// 1. Create a function that doubles a number
// function double() {
//     return 4 * 2
// };
// console.log(double())
// 2. Create a function that takes a string and returns the number of vowels in the string
// function countVowels(str) {
//   const vowels = "aeiouAEIOU";

//   let vowelCount = 0;
  
//   for (let i = 0; i < str.length; i++) {

//     if (vowels.includes(str[i])) {
//       vowelCount++
//     }
//   }
//     return vowelCount;
// }
// console.log(countVowels("glue"))
// console.log(countVowels("template"))
// console.log(countVowels("here"))
// 3. Create a function that takes an array of numbers and returns the even numbers
// function countEvennumbers(arr) {
//   let count = 0

//   for (let i = 0; i < arr.length; i++) {

//     if(typeof arr[i] === 'number' && arr[i] % 2 === 0) {
//       count++
//     }
//   }

//   return count;
// }
// console.log(countEvennumbers([20]))
// // 4. Create a function that takes an array of numbers and returns the odd numbers
// function countOddnumbers(arr) {
//   let count = 0

//   for (let i = 0; i < arr.length; i++) {

//     if(typeof arr[i] === 'number' && arr[i] % 2 !== 0) {
//       count++
//     }
//   }

//   return count;
// }
// console.log(countOddnumbers([1,2,3,4,5,6,7,8,9,0,1,1,2,4,5,7,8,9,]))
// 5. Create a function that takes an array of numbers and returns the sum of the numbers
// function sumOfnumbers(arr) {
//   let sum = 0

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(sumOfnumbers([10,130,103,432,]))
// 6. Create a function that takes an array of numbers and returns the average of the numbers
function averageOfnumbers(arr) {
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum/arr.length;
}
console.log(averageOfnumbers([943,711,276,895,2025]))
// 7. Create a function that takes an array of numbers and returns the median of the numbers
function findmedian(arr) {
   const newArr = [...arr]; 
  newArr.sort((a, b) => a - b);

  // find middle number
const variable = arr.length/2


  // 1 or 2 middle numbers
  
  // if 1 return the number
  
  // if 2 return average
  
  return newArr;

}
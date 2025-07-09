// 1. Create a function that doubles a number
// function double() {
//     return 4 * 2
// };
// console.log(double())
// 2. Create a function that takes a string and returns the number of vowels in the string
// function Vowels(str) {
//     let count =
//         (str.match(/[aeiou]/ig)||[]).length
//     return count ;
// }

// console.log(Vowels('balloon'))
// console.log(Vowels('animal'))

// 3. Create a function that takes an array of numbers and returns the odd numbers
function getOddNumbersFromArray(numbers) {
  return numbers.filter(number => number % 2 !== 0);
}

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20];
const oddNumbers = getOddNumbersFromArray(myNumbers);
console.log(oddNumbers)
// 4. Create a function that takes an array of numbers and returns the even numbers
function getEvenNumbers(arr) {
  const evenNumbers = arr.filter(number => number % 2 === 0);
  return evenNumbers;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const result = getEvenNumbers(numbers);
console.log(result);
// 5. Create a function that takes an array of numbers and returns the sum of the numbers
const bird = [1,2,3,4,5,6,7,8,9,10];

let sumOfnumbers = bird.reduce((x,y) => x + y);

console.log(sumOfnumbers);
// 6. Create a function that takes an array of numbers and returns the average of the numbers

// 7. Create a function that takes an array of numbers and returns the median of the numbers

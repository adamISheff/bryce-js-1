// 1. Create a function that doubles a number
// function double() {
//     return 4 * 2
// };
// console.log(double())
// 2. Create a function that takes a string and returns the number of vowels in the string
function countVowels(str) {
  const vowels = "aeiouAEIOU";

  let vowelCount = 0;
  
  for (let i = 0; i < str.length; i++) {

    if (vowels.includes(str[i])) {
      vowelCount++
    }
  }
    return vowelCount;
}
console.log(countVowels("glue"))
console.log(countVowels("template"))
console.log(countVowels("here"))
// 3. Create a function that takes an array of numbers and returns the odd numbers
// 4. Create a function that takes an array of numbers and returns the even numbers
// 5. Create a function that takes an array of numbers and returns the sum of the numbers
// 6. Create a function that takes an array of numbers and returns the average of the numbers
// 7. Create a function that takes an array of numbers and returns the median of the numbers

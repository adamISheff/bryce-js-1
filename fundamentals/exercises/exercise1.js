// // 1. Create a variable called 'name' and assign it a string value
// let name = '10'
// console.log(name + ' is a type of ' + typeof name)
// // 2. Create a variable called 'age' and assign it a number value
// let age = 44;
// console.log(age + ' is a ' + typeof age);
// let myage = 12.9;
// console.log('I am ' + myage);
// // 3. Create a variable called 'isStudent' and assign it a boolean value
// let isStudent = true;
// console.log(isStudent + ' is a ' + typeof isStudent);
// let Students = false;
// console.log(Students + ' is a ' + typeof Students);
// // 4. Create a variable called 'hobbies' and assign it an array of strings
// const hobbies = ['hi',' greetings.',' bye',' see ya'];
// console.log(hobbies);
// const dreams = ['nightmare', 'normal', 'confusing'];
// console.log(dreams);
// 5. Create a variable called 'address' and assign it an object with the following properties: street, city, state
// const address = {
//     street: 'Main Street',
//     city: 'New york',
//     state: 'America',
// }
// console.log('I live in ' + address.state + ' in ' + address.city + ' on ' + address.street)
// // 6. Create a variable called 'colors' and assign it an array of strings use an Array method to console log each color
// function logSomething(thing) {
//     console.log(thing);
// }

// const doSomething = (thing) => { console.log(thing); }

// const colors = ['red','blue','orange','white'];

// colors.forEach((thing) => { console.log(thing); });

// 7. Some stuff:
// a. Declare an array numbers with at least 5 different numbers
// const array = [1,2,3,4,5,6,7,8,9,10]
const array = [11,12,13,14,15,16,17,18,19,20]
// b. define a function called double. This function has one argument and returns that argument multiplied by 2
// function double(arg) {
//     return arg * 2;
// }
function multiplied(gra) {
        return gra * 10
}

// c. Using forEach method on numbers - console log each number doubled using your double function
// array.forEach(element => {
//     console.log(double(element))
// });
array.forEach(element => {
    console.log(multiplied(element))
});

let number = 1;
let string = "hello";
let boolean = true;
let nullValue = null;
let undefinedValue = undefined;

// console.log(number + ' is a type of ' + typeof number);
// console.log(string + ' is a type of ' + typeof string);
// console.log(boolean + ' is a type of ' + typeof boolean);
// console.log(nullValue + ' is a type of ' + typeof nullValue);
// console.log(undefinedValue + ' is a type of ' + typeof undefinedValue);

const array = [1,2,3,4,5];

console.log(array + ' is a type of ' + typeof array);

console.log(array);
console.log(array[0]);

array.forEach(element => {
    console.log(element);
});


const object = {
    name: "John",
    age: 30,
    city: "New York",
    isStudent: true,
    hobbies: ["reading", "traveling", "coding"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA"
    }
};

console.log(object + ' is a type of ' + typeof object);

console.log(object.name + ' lives in ' + object.address.city + ' and is ' + object.age + ' years old');
console.log(object.city + ' is a type of ' + typeof object.city);

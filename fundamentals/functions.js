function sayHello(name) {
    console.log('Hello, ' + name + '!');
}

const sayHelloArrow = (name) => {
    console.log('Hello, ' + name + '!');
}

sayHello('John');
sayHelloArrow('John');

sayHello('Jane');
sayHelloArrow('Jane');

sayHello('Jill');
sayHelloArrow('Jill');

sayHello('Jim');
sayHelloArrow('Jim');

sayHello('Jill');
sayHelloArrow('Jill');

sayHello('Jack');
sayHelloArrow('Jack');


function add(a, b) {
    return a + b;
}

console.log(add(1, 2));

const numbers = [1, 3, 5, 7, 9];
console.log('The sum of the first two numbers is ' + add(numbers[0], numbers[1]));


function sum(numbers) {
    let sum = 0;
    numbers.forEach(number => {
        sum += number;
    });
    return sum;
}

console.log('The sum of the numbers is ' + sum(numbers));
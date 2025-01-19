// Prevent us from attempting to use variables
// that are not declared
"use strict"

//Functions that return a value and log that value to the console
//funation to return a greeting
function greet() {
    return 'Hello, World!';
}
console.log(greet()); //output: Hello, World!

//function that calculates the square of a number
function square(number) {
    return number * number;
}
console.log(square(5)); //output: 25

//Argument functions
//adding two numbers
function add(a, b) {
    return a + b;
}
console.log(add(3, 7)); //output: 10

// Function to log a message
function logMessage(message) {
    console.log(message);
}
logMessage('This is a test message!'); // Output: This is a test message!

//Arrow function that reutns a value
const subtract = (a, b) => a - b;
console.log(subtract(10, 3)); // Output: 7

//Arrow function without returning a value
const logGreeting = (name = 'Guest') => {
    console.log(`Hello, ${name}!`);
};
logGreeting();        // Output: Hello, Guest!
logGreeting('Mark');  // Output: Hello, Mark!

//All concepts combined
// Function returning a value
function calculateArea(length, width) {
    return length * width;
}
console.log(calculateArea(5, 10)); // Output: 50

// Function with arguments and a default parameter
function divide(a, b = 1) {
    return a / b;
}
console.log(divide(10));    // Output: 10 (10 / 1)
console.log(divide(10, 2)); // Output: 5

// Arrow function for finding the maximum of two numbers
const max = (a, b) => (a > b ? a : b);
console.log(max(8, 12)); // Output: 12

"use strict";
let a = 1;
function greet(firstName) {
    console.log(`Hello, ${firstName}`);
}
greet("John");
// SUM Function
// Type Inferrence
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(result);
//callback funtion -> passing a function as an argument to another function
// Thing to learn is how to give type to a function
function delay(oneSec) {
    setTimeout(oneSec, 1000);
}
function oneSec() {
    console.log("1 second has passed");
}
const func = (...m) => {
    return m;
};
func(25, 23, 34);

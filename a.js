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
class Shape {
    describe() {
        console.log(`This shape is a ${this.name} with an area of ${this.calculateArea()} units squared.`);
    }
}
//////////////////////////////////////Rectangle and Circle classes
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
        this.name = "Rectangle";
    }
    // Implement the abstract method
    calculateArea() {
        return this.width * this.height;
    }
}
// Another subclass implementing the abstract class
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
        this.name = "Circle";
    }
    // Implement the abstract method
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
const teamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
};
//  Given an array of positive integers as input, return the maximum value in the array
function maxValue(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxValue([1, 2, 3]));

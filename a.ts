let a : number = 1;

function greet (firstName: string) {
    console.log(`Hello, ${firstName}`);
}

greet("John");

// SUM Function
// Type Inferrence

function sum(a: number, b: number): number {
    return a + b;
}
const result = sum(1, 2);
console.log(result);


//callback funtion -> passing a function as an argument to another function
// Thing to learn is how to give type to a function

function delay (oneSec : () => void) {
    setTimeout(oneSec, 1000);
}

function oneSec() {
    console.log("1 second has passed");
}

// type FuncType = (n: number, m: number, l?: number) => number;

// // Optional Parameter
/*const func: FuncType = (n, m, l) => {
    if (typeof l === "undefined") return n * m;
  
    return n * m * l;
  };*/
  
  // func(25, 23);
  
  // // Default Parameter
  /*type FuncType = (n: number, m: number, l?: number) => number;
  const func: FuncType = (n, m, l = 20) => {
    return n * m * l;
  };*/
  
  // func(25, 23);
  
  // // Rest Operator
  type FuncType = (...m: number[]) => number[];
  const func: FuncType = (...m) => {
    return m;
  };
  func(25, 23, 34);
  
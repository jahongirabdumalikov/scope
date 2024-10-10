// 1

// let globalVar = "Hello, World!";
// console.log(globalVar);

// 2

// let globalVar = "Hello";
// function changeGlobal() {
//     globalVar = "Hi";
// }
// changeGlobal();
// console.log(globalVar);

// 3

// {
//     let blockVar = "I am inside a block";
//     console.log(blockVar);
// }

// 4

// {
//     const blockConst = "I am a constant";
//     console.log(blockConst);
// }
// console.log(blockConst); // xatolik

// 5

// function localScope() {
//     let localVar = "I am local";
//     console.log(localVar);
// }
// localScope();
// console.log(localVar); // xatolik

// 6

// function outerFunction() {
//     let outerVar = "I am outer";
//     function innerFunction() {
//         console.log(outerVar);
//     }
//     innerFunction();
// }
// outerFunction();

// 7

// function myFunction() {
//     var functionVar = "Function Scope";
//     console.log(functionVar);
// }
// myFunction();
// console.log(functionVar); // xatolik

// 8

// function counter() {
//     let count = 0;
//     return function() {
//         count++;
//         console.log(count);
//     };
// }
// const increment = counter();
// increment(); // 1
// increment(); // 2

// 9

// function outer() {
//     let outerVar = "Outer";
//     function inner() {
//         console.log(outerVar);
//     }
//     return inner;
// }
// const innerFunc = outer();
// innerFunc(); // "Outer"

// 10

// function outer() {
//     let a = 10;
//     return function inner() {
//         let b = 20;
//         return a + b;
//     };
// }
// const add = outer();
// console.log(add()); // 30

// 11  

// var globalVar = 5;
// function changeVar() {
//     globalVar += 10;
// }
// changeVar();
// console.log(globalVar); // 15

// 12

// var x = 10;
// function test() {
//     var x = 20;
//     console.log(x); // 20
// }
// test();
// console.log(x); // 10

// 13

// function makeCounter() {
//     let count = 0;
//     return function() {
//         count++;
//         return count;
//     };
// }
// const counter = makeCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2

// 14

// function secret() {
//     let secretVar = "This is secret";
//     return function() {
//         return secretVar;
//     };
// }
// const getSecret = secret();
// console.log(getSecret()); // "This is secret"

// 15

// let a = "Outer";
// function outer() {
//     let b = "Middle";
//     function inner() {
//         let c = "Inner";
//         console.log(a, b, c);
//     }
//     inner();
// }
// outer(); // "Outer Middle Inner"

// 16

// let globalVar = "I'm global";
// function first() {
//     let firstVar = "I'm first";
//     function second() {
//         let secondVar = "I'm second";
//         console.log(globalVar, firstVar, secondVar);
//     }
//     second();
// }
// first(); // "I'm global I'm first I'm second"

// 17

// if (true) {
//     let blockScoped = "I'm inside an if block";
//     console.log(blockScoped);
// }
// // console.log(blockScoped); // xatolik

// 18

// for (let i = 0; i < 3; i++) {
//     console.log(i); // 0, 1, 2
// }
// // console.log(i); // xatolik

// 19

// function parent() {
//     let parentVar = "I am parent";
//     function child() {
//         console.log(parentVar);
//     }
//     child();
// }
// parent(); // "I am parent"

// 20

// {
//     let blockVar = "Block Variable";
//     function insideBlock() {
//         console.log(blockVar);
//     }
//     insideBlock(); // "Block Variable"
// }
// // console.log(blockVar); // xatolik

// arrow functions
// const singHappyBirthday = function(){
//     console.log("Happy Birthday");
// }
// singHappyBirthday();

// const singHappyBirthday = () => {
//     console.log("Happy Birthday");
// }
// singHappyBirthday();

// const sumThreeNumbers = (number1, number2, number3) => {
//     return number1 + number2 + number3;
// }
// const returnedValue = sumThreeNumbers(2,3,4);
// console.log(returnedValue);

// const isEven = n => n%2 ===0

// console.log(isEven(2));

//? hoisting

// hello();

// function hello() {
//     console.log("Hello World");   
// }
// var hello = "hello world";
// console.log(hello);

//? functions inside functions
// const app = () =>{
//     const myFunc = () =>{
//         console.log("Hello from myFunc");
        
//     }

//     const addTwo = (num1, num2) =>{
//         return num1, num2;
//     }
//     const mul = (num1, num2) => num1*num2;

//     console.log("inside app");
//     myFunc();
//     console.log(addTwo(2,3));
//     console.log(mul(2,3));
// }
// app();

//? lexical scope

const myVar = "value1";

function myApp(){
    const myVar = "value1";

    function myFunc(){
        // const myVar = "value59";
        const myFunc2 = () =>{
        console.log("inside myFunc", myVar);
    }
    myFunc2();
}
    console.log(myVar);
    myFunc();
}

myApp();
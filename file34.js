// ? block scope vs function scope 


// let and const are block scope
// var is function scope


// {
// const firstName = "Grishma";
// console.log(firstName);
// }


// function myApp(){
//     if(true){
//         var firstName = "Grishma";
//         console.log(firstName);
//     }
//     console.log(firstName);
// }

// myApp();


//? function addTwo(){
//     return a+b;
// }
// const ans = addTwo(3);
// console.log(ans);


// ? default parameters
// function addTwo(a=2 ,b=5){
//     return a+b;
// }
// const ans = addTwo(3);
// console.log(ans);

// ? rest parameters

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`, c);      
// }
// myFunc(3,4,5,6,7,8,9);

// function addAll(...numbers){
//     console.log(numbers);
//     console.log(Array.isArray(numbers));
// }
// addAll(5)

// parameter destructuring

const person = {
    firstName: "Grishma" ,
    gender: "Female" ,
}
// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }
function printDetails({firstName, gender}){
    console.log(firstName);
    console.log(gender);
}
printDetails(person);

// ? callback functions

// function myFunc(a){
//     console.log(a);
    
//     console.log("Hello World");
    
// }
// myFunc([1,2,3]);

function myFunc2(name){
    console.log("inside my func 2");
    console.log(`your name is ${name}`);
    
    
}
function myFunc(callback){
    console.log("hello there I am a func and I can..");
    callback();
}

myFunc(myFunc2);
// function returning function
// function myFunc(){
//     function hello(){
//       return "hello world"
        
//     }
//     return hello;
// }

// const ans = myFunc();
// console.log(ans);
// console.log(ans());


//? important array methods
//  forEach, map, filter, reduce


// const numbers = [4,2,5,8];

// // function myFunc(number, index){
// //     console.log(`index is ${index} number is ${number}`);
// //     }

// // numbers.forEach(myFunc);

// numbers.forEach(function(number){
//     console.log(number*2);
// })

// const users = [
//     {firstName: "Grishma", age: 19},
//     {firstName: "Mohit", age: 20},
// ]

// users.forEach(function(users){
//     console.log(users.firstName);
    
// })

// ? map method

// const numbers = [2,4,5,6,7,8];
// const square = function(number)
// {
//     return number * number;
// }
// numbers.map(square);

// const users = [
//     {firstName: "Grishma", age: 19},
//     {firstName: "Mohit", age: 20},
// ]

// const userNames = users.map((user) => {
//     return user.firstName;
// });
// console.log(userNames);

// ? filter method

// const numbers = [1,3,2,6,4,8];

// const isEven = function(number){
//     return number%2 ===0;
// }
// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);

// ? reduce method

// const numbers = [1,2,3,4,5,10];
// // aim : sum of all the numbers in array
// const sum = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// });

// console.log(sum);

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
]
const totalAmount = userCart.reduce((totalPrice,currentProduct)=> {
    return totalPrice + currentProduct.price;
},0)

console.log(totalAmount);






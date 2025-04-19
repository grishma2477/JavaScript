// let color = "red";
// ? traffic Light Systems
// if (color == "red"){
//     console.log("Stop!");
// }
// if (color == "yellow"){
//     console.log("Slow Down");
// }
// if (color == "green"){
//     console.log("go");
// }

//? to calculate popcorn prices based on the size customer asked for
// let size = "XL";
// if (size === "XL"){
//     console.log("Price is Rs.250");
// }
// else if (size === "L"){
//     console.log("Price is Rs.200");
// }
// else if (size === "M"){
//     console.log("Price is Rs.100");
// }
// else{
//     console.log('Price is Rs.50'); 
// }
// ? Nested if-else statements
// let marks = 45;
// if (marks >= 33){
//     console.log("Pass");
// }else{
//     console.log("Better luck next time!");
// }
// ? Logical Operators
// let marks = 75;
// if (marks>= 33 && marks>=80){
//     console.log("Pass");
//     console.log("A+");
// }

// let marks = 75;
// if (marks>= 33 || marks>=80){
//     console.log("Pass");
//     console.log("A+");
// }

// let marks = 75;
// if (!marks>= 33){
//     console.log("Pass");
//     console.log("A+");
// }


// let marks = 23;
// if (marks>= 33 && marks<= 80 || !false){
//     console.log("Pass");
//     console.log("A+");
// }

// let goodString = "apple";
// if (goodString[0] === 'a' && (goodString.length>3)){
//     console.log("String is good.");
// }else {
//     console.log("String is not good");
// }

// ? Truthy and Falsy
// if(1){
//     console.log("It has true value.");
// }else{
//     console.log("It has false value.");
// }

// ? Switch Statements
// let color = "red";

// switch (color){
//     case "red" :
//         console.log("stop");
//         break;
//         case "yellow" :
//             console.log("slow down");
//             break;
//             case "green" :
//                 console.log("GO");break
//                 break;
//                 default :
//             console.log("Broken Light");      
// }

// let day = 4;

// switch (day){
//     case 1 :
//         console.log("Sunday");
//         break;
//         case 2 :
//             console.log("Monday");
//             break;
//             case 3 :
//                 console.log("Tuesday");
//                 break;
//                 case 4 :
//                     console.log("Wednesday");
//                     break;
//                     case 5 :
//                         console.log("Thursday");
//                         break;
//                         case 6 :
//                             console.log("Friday");
//                             break;
//                             case 7 :
//                                 console.log("Saturday");
//                                 break;  
//                                 default :
//                                 console.log("Wrong Day!");                 
// }

// ? Alerts And Prompts
// console.log("This is a simple log.");
// console.error("This is an error log.");
// console.warn("This is a warning message");

// let firstName = prompt("Enter your name :");
// console.log(firstName);

// ? Practice Questions

// let num = 5;
// if (num%10==0){
//     console.log("Good");
// }else{
//     console.log("Bad");
// }

// let userName = prompt("Enter your name : ");
// let age = prompt("Enter your age : ");
// console.log(`${userName} is ${age} years old.`);

// let quarter = 4;

// switch(quarter){
//     case 1 :
//         console.log("January, February, March");
//         break;
//         case 2 :
//             console.log("April, May, June");
//             break;
//             case 3 :
//                 console.log("July, August, September");
//                 break;
//                 case 4 :
//                     console.log("October, November, December");
//                     break;
//                     default :
//                     console.log("Nothing ! ");                  
// }

// let string = "Apples";
// if (string[0]=== "A" || "a" && string.length>5){
//     console.log("Golden String");
// }else{
//     console.log("Not golden string");
// }

// let num1 = 5;
// let num2 = 10;
// let num3 = 15;
// if (num1>num2 && num1>num3){
//     console.log("Num1 is the largest.");
// }else if(num2>num1 && num2>num3){
//     console.log("Num2 is the largest.");
// }else{
//     console.log("Num3 is the largest. ");
// }

// let num1 = 32;
// let num2 = 47852;
// if (`${num1}`[-1] === `${num2}`[-1]){
//     console.log("They have the same last digit. ");
// }else{
//     console.log("They don't");
// }


// let msg = "      Hello             ";
// console.log(msg.trim());

// let str = "Random string";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let str = "ILoveCoding";
// console.log(str);
// console.log(str.indexOf("Love"));
// console.log(str.indexOf("o"));
// console.log(str.indexOf("love"));
// console.log(str.indexOf("z"));


// let msg = "           Hello          ";
// console.log(msg);
// let newMsg = msg.trim();
// console.log(newMsg);
// newMsg = newMsg.toUpperCase();
// console.log(newMsg);
// let newMsg = msg.trim().toUpperCase();
// console.log(newMsg);

// let str = "IloveCoding";
// console.log(str.slice(-4));

// let msg = "IloveCoding";
// console.log(msg);
// console.log(msg.replace("love", "do"));
// console.log(msg.replace("Cod", "eat"));

// let str = "Mango";
// console.log(str);
// console.log(str.repeat(4));

// let msg = "help!";
// console.log(msg.trim().toUpperCase());


// let name = "ApnaCollege";
// console.log(name.slice(4,9));
// console.log(name.indexOf("na"));
// console.log(name.replace("Apna", "Our"));
// console.log(name.slice(4).replace("l", "t"));
// let newStr = name.slice(4).replace("l", "t").replace("l","t");
// console.log(newStr);

// let student1 = "aman";
// let student2 = "shradha";
// let student3 = "rajat";

// let students = ["aman", "shradha", "rajat"];
// console.log(students);
// console.log(students[0]);

// let nums = [2, 4, 6, 8];
// console.log(nums);
// console.log(nums[0]);
// console.log(typeof nums);
// console.log(nums.length);

// let info = ["shradha", 23, 89.5];
// console.log(typeof info);

// let emp = [];
// console.log(emp[1]);

// let cars = ["audi", "bmw", "xuv", "maruti"]
// console.log(cars);
// console.log(cars.push("toyota"));

// let str = ["january", "july", "march", "august"];
// const sifted = str.shift() // take the janaury out and return it
// console.log(str);
// str.shift();
// console.log(str);
// str.unshift("june");
// console.log(str);
// str.unshift("july")
// console.log(str);

// console.log(str.indexOf("january"));
// console.log(str.includes("march"));

// let months = ["april", "may"];
// final= str.concat(months);
// console.log(final);
// last = str.reverse();
// console.log(last);


// console.log(last.slice(2));
// console.log(last.slice(-2));
// console.log(last.slice(5));
// console.log(last.slice(1,3));

// console.log(str);
// console.log(str.sort());

// let chars = ["b", "c", "d", "a"];
// console.log(chars.sort());

// let str = ["january", "july", "march", "august"];
// let months = str.splice(0, 2, "july", "june")
// console.log(str);

// let programming = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
// console.log(programming.reverse().indexOf("javascript"));

// let arr = ["a", "b"];
// let arrCopy = arr;
// console.log(arr === arrCopy);
// arr.push("c");
// console.log(arr);
// console.log(arrCopy);
// arrCopy.pop();
// console.log(arr);
// console.log(arrCopy);

// const arr= [1,2,3];
// console.log(arr);
// arr.push(4);
// console.log(arr);
// arr.pop();
// console.log(arr);

// let nums = [ [1,2], [3,4], [4,5]];
// console.log(nums.length);
// console.log(nums[0].length);
// console.log(nums[0][0]);
// console.log(nums);

// let game = [["X", null, "0"], [null, "X", null], ["0", null, "X"]];
// console.log(game);
// console.log(game);

// for(let i =1; i <= 10; i++){
//     console.log(i);
// }
// console.log(`--------------------`);

// for(let i = 10; i >= 1; i--){
//     console.log(i);
// }

// for (let i=1; i<=15; i = i+2){
//     console.log(i);
// }

// for (let i=15; i>=1; i = i-2){
//     console.log(i);
// }

// for (let i = 2; i<=10; i = i+2){
//     console.log(i);
// }

// for (let i =4; i<=40; i = i+4){
//     console.log(i);
// }

// let n = prompt("Enter your number");
// n = parseInt(n);
// for (let i =n; i<=n*10; i = i + n){
//     console.log(i);
// }

// for (let i = 1; i<=3; i++){
//     console.log(`outer loop ${i}`);
    
//     for (let j=1; j<=3; j++){
//         console.log(j);
//     }
// }

// let i = 1;
// while(i <=5){
//     console.log(i);
//     i++;
// }

// let i = 0;
// while(i <= 20){
//     console.log(i);
//     i++;
// }

// const favMovie = "Avatar";
// let guess = prompt("Guess the movie");
// while(guess!=favMovie && guess!="quit"){
// console.log("Wrong");
// guess = prompt("Guess Again");
// }

// if (guess == favMovie){
//     console.log("congrats!!");
// }

// let fruits = ["mango", "apple", "banana", "litchi", "orange"];
// for (let i = 0; i<fruits.length; i++){
//     console.log(i, fruits[i]);
// }

// let heroes = [["ironman","spiderman","thor"], ["superman", "wonder woman", "flash"]]
// for (let i =0; i<heroes.length; i++){
//     console.log(i, heroes[i]);
//     for(let j=0; j<heroes[i].length; j++){
//         console.log(`j = ${j}, ${heroes[i][j]}`);
        
//     }
// }

// let fruits = ["mango", "apple", "banana", "orange"]
// for (fruit of fruits){
//     console.log(fruit);
// }

// for(char of "apnacollege"){
//     console.log(char);
// }


// let heroes = [["ironman","spiderman","thor"], ["superman", "wonder woman", "flash"]]
// for (list of heroes){
//     for(hero of list){
//     console.log(hero);
//     }
// }

// let todo = [];

// let req =prompt("Please enter your requests");
// while (true){
//     if (req == "quit"){
//         console.log("quitting app");
//         break;
//     }

//     if (req == "list"){
//         console.log(".................");  
//         for (task of todo){
//             console.log(task);  
//         }
//     }
// }

// let array = [7,9,0,-2];
// let ans = array.slice(0,3);
// console.log(ans);

// let ans1 = array.slice(1,4);
// console.log(ans1);

// let string = prompt("Please enter your name");
// if (string == 0){
//     console.log("String is blank"); 
// }
// else{
//     console.log("string is not blank");
// }

// Write a JavaScript program
// to test whether the character at the given(character)
// indexislowercase.

// let student = {
//     name: "Grishma",
//     age: 19,
//     marks: 99,
//     city: "Sydney"
// };
// console.log(student);

// const post = {
//     username: "kandelgrishma2477@gmail.com",
//     content: "This is my first post.",
//     likes: 150,
//     reposts: 5
// }
// console.log(post);

// let student = {
//     name: "Grishma",
//     age: 19
// }
// console.log(student["name"]);
// console.log(student.age);


// const obj = {
//     1: "a",
//     2: "b",
//     true: "c",
//     null: "d",
//     undefined: "e"
// };

// console.log(obj);
// console.log(obj[1]);

// const student = {
//     name: "Grishma",
//     age: 19,
//     marks: 96.4,
//     city: "Sydney"
// };

// console.log(student.city);
// student.city = "Mumbai";
// console.log(student.city);
// console.log(student);
// console.log(student.gender);
// student.gender = "female";
// console.log(student.gender);
// console.log(student);
// student.marks = "A";
// console.log(student.marks);
// console.log(student);
// student.marks = [89,99];
// console.log(student.marks);
// console.log(student);
// let ans = delete student.marks;
// console.log(ans);
// console.log(student);

// const classInfo = {
//     grishma: {
//         grade: "A+",
//         marks: 98
//     },
//     sandip: {
//         grade: "A",
//         marks: 96
//     }
// };
// console.log(classInfo);
// console.log(classInfo.grishma);
// console.log(classInfo.sandip.marks);
// classInfo.grishma.marks = 100;
// console.log(classInfo.grishma.marks);
// console.log(classInfo.grishma.marks);

// const classInfo = [
//     {
//         name: "grishma",
//         age: 19,
//         marks: 98,
//         city: "Sydney"
//     },
//     {
//         name: "sandip",
//         age: 24,
//         marks: 100,
//         city: "Sydney"
//     }
// ];
// console.log(classInfo);
// console.log(classInfo[0]);
// console.log(classInfo[0].marks);
// console.log(classInfo[1]);
// console.log(classInfo[1].age);
// console.log(classInfo);

// let step1 = Math.random();
// let step2 = step1 * 10;
// let step3 = Math.floor(step2);
// console.log(step3);

// let random = Math.floor(Math.random()* 10)+1;
// console.log(random);

// let random = Math.floor(Math.random()*100) + 1;
// console.log(random);

// let random = Math.floor(Math.random()*5) + 1;
// console.log(random);

// let random = Math.floor(Math.random()*5) + 20;
// console.log(random);

// const max = prompt("Enter the maximum number");
// const random = Math.floor(Math.random()*max) + 1;
// let guess = prompt("guess the number");

// while(true){
//     if(guess=="quit"){
//         console.log("user quit");
//         break;
//     }

//     if (guess==random){
//         console.log("You are right. Congrats!");
//         break;
//     }elseif (guess<random){
//         guess = prompt("Your guess was too small. Please try again.");
//     }
//     else if (guess>random){
//         guess = prompt("Your guess was too large.");
//     }
// }

// const num = Math.random();
// let ans = num * 6
// let total = Math.floor(ans);
// let random = total + 1;
// console.log(random);

// let car = {
//     name: "BMW",
//     color: "Black",
//     number: 8888
// };
// console.log(car.name);


// let person = {
//     name: "Sandip",
//     age: 25,
//     city: "Sydney"
// };
// console.log(person.city);
//  person.city = "New York";
//  console.log(person.city);
//  person.country = "United States";
//  console.log(person);

// function hello(){
//     console.log("Hello");  
// }
// hello();
// hello();

// function printName(){
//     console.log("ApnaCollege");
//     console.log("Grishma Kandel");
// }

// printName();
// printName();

// function printPoem(){
//     console.log("Twinkle Twinkle little star");
//     console.log("how I wonder what you are");
// }
// printPoem();

// function rollDice(){
//     let random = Math.floor(Math.random()*6) + 1;
//     console.log(random);  
// }
// rollDice();
// rollDice();

// function printName(name, age){
//     console.log(`${name}'s age is ${age}.`);
// }

// printName("Grishma", 19);
// printName("Sandip");

// function sum(a,b){
//     console.log(a+b);
// }
// sum(8,6);

// function calcAvg(a,b,c){
//   let avg =(a+b+c)/3;
//   console.log(avg);
  
// }
// calcAvg(3,3,3);

// function printTable(n){
//     for (let i = n; i<=n*10; i+=n){
//         console.log(i);
        
//     }
// }
// printTable(2);

// function sum(a,b){
//     return a+b ;
// }
// let s = sum(8,6);
// console.log(s);

// function sum(a,b){
//     return(a+b);
// }
// console.log(sum(sum(1,2), 3));

// function sum(a,b){
//    console.log("hello");
//    console.log("hello1");
//    return a + b;
//    console.log("hello3");
//    console.log("hello4");
   
// }
// console.log(sum(8,6));

// function printSum(n){
//     let sum = 0;
//     for (let i=1; i<=n; i++) {
//         sum = sum + i;
//     }
//     return sum;
// }
// console.log(printSum(4));

// let greetingArray = ["Hi", "Hello", "Bye", "!"];
// function concat(arr){
// let result="";
// for(let i = 0; i<greetingArray.length; i++){
//     result += greetingArray[i];
// }
// return result;
// }

// const dekoResult = 
// console.log(concat(greetingArray))


// let sum = 54; // ?global scope
// function calSum(a,b){
//     let sum = a+b; //?function scope
//     console.log(sum);
// }
// calSum(1,2);
// console.log(sum);

// {
//     let a = 25; //? block scope. 
// }
// console.log(a);

// for(let i =1; i<=5; i++){
//     console.log(i); // ?block scope. 
// }
// console.log(i);

// function outerFunc(){
//     let x = 5;
//     let y = 6;
//     console.log("inner");
    
//     function innerFunc(){
//         console.log(x);
//     }
//     console.log("skipped")
//     innerFunc();
//     console.log("executing")
// }
// outerFunc();


// let greet = "hello"; // ? global scope
// function changeGreet(){
//     let greet = "namaste"; //? function scope
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet); //? lexical scope
//     }
//     innerGreet();
// }
// console.log(greet);
// changeGreet();

// let name = "grishma";
// let sum = function(a,b){
//     return a + b;
// }
// let hello = function(){
//     console.log("Hello");
// }
// hello = function(){
//     console.log("Namaste");
// }

// const calculator = {
//      num : 55,
//     add: function(a,b){
//         return a + b;
//     },
//     sub: function(a,b){
//         return a - b;
//     },
//     mul: function(a,b){
//         return a * b;
//     }
// }

// const student = {
//     name: "Grishma",
//     age: 19,
//     eng: 100,
//     math: 100,
//     getAvg() {
//         console.log(this);
        
//         let avg = (this.eng + this.math + this.phy)/3;
//         console.log(`${this.name} got avh marks = ${avg}`);
//     }
// }

// console.log("Hello");
// console.log("Hello");
// let a = 5;
// try {
//     console.log(a);
// } catch {
//   console.log("caught and error.... a is not defined.");
// }
// console.log("Hello2");
// console.log("Hello2");

// const sum = (a,b) => {
//     console.log(a+b);
// }

// const mul = (a,b ) => a * b;

// console.log("hi there!");

// setTimeout (() => {
//     console.log("Apna College");
// }, 4000);

// let id = setInterval (() => {
//     console.log("Apna College");
// }, 2000);

// console.log(id);

// const student = {
//     name: "Grishma",
//     marks: 100,
//     age: 19,
//     prop: this, // global scope
//     getName: function(){
//         return this.name;
//     },
//     getMarks: () => {
//         console.log(this);
//         return this.marks;
//     }
// };

// const a = 5; // global scope.

// let arr = [1,2,3,4,5];

// arr.forEach((el) => {
//     console.log(el);
    
// });

// arr.forEach(function(el){
//     console.log(el);
    
// });

// let print = function (el){
//     console.log(el);
    
// }
// arr.forEach(print);

// let arr = [{
//     name: "grishma",
//     age: 19,
// }, {
//     name: "sandip",
//     age: 25,
// }, {
//     name: "rajat",
//     age: 30,
// }];

// arr.forEach((student) => {
//     console.log(student.age)
// });

// let num = [1,2,3,4];
// let double = num.map((el)=>{
//     return el * el;
// });

// let arr = [{
//     name: "grishma",
//     age: 19,
//     marks: 100,
// }, {
//     name: "sandip",
//     age: 25,
//     marks: 98,
// }, {
//     name: "rajat",
//     age: 30,
//     marks: 96,
// }];
// let gpa = arr.map((el) => {
//     return el.marks / 10;
// });

// console.log(gpa);

// let nums = [1,2,3,4,5,6,7,8];
// let ans = nums.filter((el) =>{
//     return el % 2 == 0;
// });
// console.log(ans);

// let nums = [1,2,3,4];
// let finalVal = nums.reduce((res,el)=> (res+el));
// console.log(finalVal);

// hello();
// function hello(){
//     console.log("hello world");
// }

// function inside function
// const app = () => {
//     const myFunc = () => {
//         console.log("hello from myFunc");
//     }
//     const addTwo = (num1, num2) =>{
//         return num1 + num2;
//     }
//     const mul = (num1, num2) => num1 * num2;
//     console.log("inside app");
//     myFunc();
// }
// app();


// types of functions
// function, arrow, expression function,
// arrow --> no-named function, ananomoyus function, or lambda function

// function namePrinter(func, times) {
//     let returnedValue = func();
//     console.log(returnedValue*times);
// }

// namePrinter(()=>{
//     return 6;
// },4)


// function moduloDiv(f, dividend){
//     let returnedVal = f();
//     if (returnedVal % dividend == 0){
//         return `Divided by Dividend (${dividend})`;
//     }else{
//         return "Not Divided";
//     }
// }

// const value = prompt("Enter value")
// const divi = prompt("Enter dividend")
// const greet = ()=>{
//     return value;
// }

// let b = moduloDiv(greet,divi)

// console.log(b);


// const str = "abcdabcdefgggh";

// function extract(str) {
//     const box = []
// for (let i = 0; i<=str.length-1; i++) {
//     const char = str[i]
//     if(box.indexOf(char) === -1) {
//         box.push(char)
//     }
// }
// return box
// }

// console.log(extract(str));


// function countVowel(name) {
//     const vowelArray = ["a","e","i","o","u"]
//     let counter = 0
//     for (let i = 0; i<=name.length-1; i++) {
//         const char = name[i]
//         if(vowelArray.indexOf(char) !== -1) {
//             counter   += 1; 
//         }
        
//     }
//     return counter;
// }

// console.log(countVowel("Grishma"));

//  let nums = [10,20,30,40];
//  let ans = nums.every((el) => el%10==0);
//  console.log(ans);

 let nums = [10, 20, 30, 40, 2, 4];
 let min = nums.reduce((min,el)=>{
    if(min<el){
        return min;
    }else{
        return el;
    }
 })
 console.log(min);
 
 

















































































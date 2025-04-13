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

const favMovie = "Avatar";
let guess = prompt("Guess the movie");
while(guess!=favMovie && guess!="quit"){
console.log("Wrong");
guess = prompt("Guess Again");
}

if (guess == favMovie){
    console.log("congrats!!");
}






























































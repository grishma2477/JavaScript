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
let color = "red";

switch (color){
    case "red" :
        console.log("stop");
        break;
        case "yellow" :
            console.log("slow down");
            break;
            case "green" :
                console.log("GO");break
                break;
                default :
            console.log("Broken Light");      
}
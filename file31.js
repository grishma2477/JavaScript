//? --> Objetcs --> K:V

// why we need

const user_info = ["Grishma","kandel",22,"science","math","ganesh","banana","no"]

const userInfo2 = {
    first_name : "Grishma",
    "last_name":"Kandel",
    age: 22,
    fav_book: ["science","math"],
    father_name: "ganesh",
    fav_fruit : "Banana",
    has_helicopter: false
}
console.log(userInfo2.fav_book[1]);


// object de-structuring
const {first_name,age} = userInfo2
console.log(first_name)
// other ways without de structuring
console.log(userInfo2[`fav_book`]);
console.log(userInfo2.fav_book);
console.log(userInfo2[`has_helicopter`]);

const {fav_book, father_name} = userInfo2;
console.log(father_name);


// looping
for (let k in userInfo2) {   
    console.log(`${k}:-->:${userInfo2[k]}`);
}







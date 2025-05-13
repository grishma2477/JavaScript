const express = require("express");
const app = express();

// console.dir(app);

let port = 8080; // 3000
app.listen(port, ()=> {
    console.log(`app is listening on port ${port}.`);
    
});

// app.use((req,res)=>{
//     // console.log(req);
//     console.log("request recieved");
//     let code = "<h1>Fruits</h1> <ul><li>apple</li><Li>orange</Li></ul>"
//     // res.send({
//     //     name: "apple",
//     //     color: "red",
//     // })
//     res.send(code);
// });

app.get("/", (req,res) => {
    res.send("you contacted root path.")
});

app.get("/apple", (req,res) => {
    res.send("you contacted apple path.")
});

app.get("/orange", (req,res) => {
    res.send("you contacted orange path.")
});

// app.get("*", (req,res) =>{
//     res.send("this path doesn't exist.")
// });

app.post("/", (req,res) =>{
    res.send("you sent a post request to root.")
});
const express = require("express");
const app = express();

// console.dir(app);

let port = 3000; // 8080
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

// app.get("/orange", (req,res) => {
//     res.send("you contacted orange path.")
// });

// app.get("*", (req,res) =>{
//     res.send("this path doesn't exist.")
// });

// app.post("/", (req,res) =>{
//     res.send("you sent a post request to root.")
// });

app.get("/:username/:id", (req,res) => {
    const {username, id} = req.params;
    console.log(req.params);
    res.send("you contacted root path.")
});


app.get("/search",(req,res)=>{
   let {q} = req.query;
   if (!q){
    res.send("<h1>Nothing Searched.</h1>")
   }
    res.send(`<h1>search results for query: ${q}</h1>`)
});
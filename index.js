const express = require("express");
const app = express();

console.dir(app);

let port = 3000; // 8080
app.listen(port, ()=> {
    console.log(`app is listening on port ${port}.`);
    
});

app.use((req,res)=>{
    // console.log(req);
    console.log("request recieved");
    let code = "<h1>Fruits</h1> <ul><li>apple</li><Li>orange</Li></ul>"
    // res.send({
    //     name: "apple",
    //     color: "red",
    // })
    res.send(code);
});
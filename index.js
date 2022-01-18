const express = require("express");
const app = express();
const mongoose = require("mongoose")

mongoose.connect(
    "mongodb+srv://user:<password>@cluster0.qa1dq.mongodb.net/shop?retryWrites=true&w=majority"
    )
.then(() => console.log("DBConnection Successfull!"))
.catch((err)=>{
    console.log(err);
});

app.listen(5000, ()=>{
    console.log("Backend end server is running!");
});
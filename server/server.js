const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();

const port = process.env.port || 5000;
app.get("/",(req,res)=>{
    res.send("hello");
})
app.listen(port,() =>{
    console.log("Server is running");
})

//connect mongoDb
const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database connected")
}).catch(err =>{
    console.log(err);
})


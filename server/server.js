const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const cookieParser = require('cookie-parser')

const app = express();
app.use(express.json());
app.use(cookieParser())

const port = process.env.port || 5000;
app.get("/",(req,res)=>{
    res.send("hello");
})
app.listen(port,() =>{
    console.log("Server is running");
})
//routes
app.use('/user',require('./routes/useRoute'));

//connect mongoDb
const URL = 'mongodb+srv://harshdev2909:harsh9560@cluster0.gkf5y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(URL)
.then(()=>{
    console.log("Database connected")
    mongoose.set('useUnifiedTopology', true);
    mongoose.set('useNewUrlParser', true);
}).catch(err =>{
    console.log(err);
})

const express =require('express')
const mongoose = require('mongoose')
const students = require('./routes/Students-data')
const teachers = require('./routes/teachers-data')

const app=express()

const cors =require('cors')
app.use(cors())
mongoose.connect('mongodb://127.0.0.1:27017/College-system')

mongoose.connection.on('connected',()=>{
    console.log("Data-Base is connected")
})

app.get('/',(req,res)=>{
    res.send("Back-end")
})

app.use('/students',students)
app.use('/teacher',teachers)
app.listen(5000,()=>{
    console.log("Server is Ready");
})
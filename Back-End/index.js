const express = require('express')
const db = require('./config/DataBase')
const student= require('./routes/users')
const teacher = require('./routes/teacher')
const admin = require('./routes/admin')


const app = express() 
require('dotenv').config()
db()

app.use(express.json());
app.use('/api/user',student)
app.use('/api/teacher',teacher)
app.use('/api/admin',admin)

app.use('/',(req,res)=>{
    res.send("Hey Users")
})

app.listen(process.env.PORT, ()=>{
    console.log('Server is Running');
    
})
const mongoose = require('mongoose')

const studentSchema= new mongoose.Schema({
    rollno:String,
    name:String,
    department:String,
    year:Number
})

const Studentmodel=mongoose.model('students',studentSchema)

module.exports=Studentmodel
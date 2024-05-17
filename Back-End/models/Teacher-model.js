const mongoose = require('mongoose')

const teacherSchema= new mongoose.Schema({
     emyid:Number,
     name:String,
     subject:String,
     department:String,
})

const Teachermodel = mongoose.model('teachers',teacherSchema)

module.exports= Teachermodel
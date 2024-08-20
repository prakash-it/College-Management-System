const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
  

    username:{
        type:String,required:true
    },
    email:{
        type:String,required:true, unique:true
    },
    password:{
        type:String,required:true
    },
    role:{type: String, enum:['admin', 'user', 'teacher'], default: 'teacher'}

})

const models = mongoose.model('user',teacherSchema)

module.exports = models
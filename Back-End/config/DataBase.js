const mongoose = require('mongoose')

const database =()=>{
    mongoose.connect(`${process.env.DB}`)
    mongoose.connection.on('connected',()=>{
        console.log('Data Base is connected');
        
    })
} 

module.exports = database
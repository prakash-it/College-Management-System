const express = require('express');
const bcrypt = require('bcrypt');
const userModel = require('../models/admin');

const routes = express.Router();

routes.post('/login', async(req,res)=>{
    try{
        const {email,password} = req.body
         if(!email || !password){
            return res.status(400).json({message:'All the files'})
         }

         const user =  await userModel.findOne({email})
            if(!user){
                return res.status(400).json({message: "User Not Found pease Signup"})
            }

            const match = await bcrypt.compare(password, user.password)

            if(!match){
                return res.status(400).json({message: "Users password incorrect"})
            }

            res.status(200).json({message:'Login Is Done Correctly'})
    }
    catch(err){
        res.status(500).json({message:err})
    }
})

module.exports = routes;

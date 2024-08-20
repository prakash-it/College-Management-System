const express = require('express');
const bcrypt = require('bcrypt');
const userModel = require('../models/users');

const routes = express.Router();

routes.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({ username, email, password: hashedPassword });

    await user.save();

    res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


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

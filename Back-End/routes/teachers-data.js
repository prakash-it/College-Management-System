const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser')
const Model = require('../models/Teacher-model');

router.use(bodyparser.json())
router.get('/', (req, res) => {
    res.send("teacgers-page");
});

router.get('/get',(req,res)=>{
    Model.find({}) 
    .then(users => {res.json(users)})
    .catch(err => {
            
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    });
})

router.post('/post', (req, res) => {
    const newStudent = new Model(req.body);
    newStudent.save()
        .then(response => {
            console.log(response);
            res.send("Teacher data  post");
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});
module.exports = router;

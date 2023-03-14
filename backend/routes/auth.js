const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

//create a User using: post 'api/auth/createuser' : no Login Required 
router.post('/createuser',[
     body('name','Enter a Valid Name').isLength({min:3}),
     body('email','Enter a Valid Email').isEmail(),
     body('password','Password must be atleast 3 words').isLength({min: 5})
],async(req,res)=>{
    //If there are Error Return Bad Request and the errors

     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //Chech the weather the user with this same email exists Already 
    try{
    let user = await User.findOne({email : req.body.email});
    if(user){
      return res.status(400).json({error: "Sorry a user with this email already exists"})
    }
     user = await User.create({
     name: req.body.name,
     email: req.body.email,
     password: req.body.password,

   })
res.json(user);
  }catch (error){
    console.error(error.message);
    res.json(500).send("Some Error Occured");
  }
})
module.exports = router
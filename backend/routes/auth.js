const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET = 'HineshIsAGoodBoy';

//create a User using: post 'api/auth/createuser' : no Login Required 
router.post('/createuser',[
  //Valitidion for Fields through Express Validtion
     body('name','Enter a Valid Name').isLength({min:3}),
     body('email','Enter a Valid Email').isEmail(),
     body('password','Password must be atleast 3 words').isLength({min: 5})
],async(req,res)=>{
    //If there are Error Return Bad Request and the errors
     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{
      //Chech the weather the user with this same email exists Already 
    let user = await User.findOne({email : req.body.email});
    if(user){
      return res.status(400).json({error: "Sorry a user with this email already exists"})
    }
    //Create Password hash to Secure Password
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password,salt) ;
    //Create a New User
     user = await User.create({
     name: req.body.name,
     email: req.body.email,
     password: secPass,

   });
   const data = {
    user:{
      id : user.id,
    }
   }
   const authToken =  jwt.sign(data,JWT_SECRET);
  //  res.json(User);
   res.json(authToken)

  }catch (error){
    console.error(error.message);
    res.status(500).send("Some Error Occured");
  }
})
module.exports = router
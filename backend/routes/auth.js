const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'HineshIsAGoodBoy';

//Route 1 :create a User using: post 'api/auth/createuser' : no Login Required 
router.post('/createuser', [
  //Valitidion for Fields through Express Validtion
  body('name', 'Enter a Valid Name').isLength({ min: 3 }),
  body('email', 'Enter a Valid Email').isEmail(),
  body('password', 'Password must be atleast 3 words').isLength({ min: 5 })
], async (req, res) => {
  let success = true
  //If there are Error Return Bad Request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    //Chech the weather the user with this same email exists Already 
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      success = false
      return res.status(400).json({ success,error: "Sorry a user with this email already exists" })
    }
    //Create Password hash to Secure Password
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    //Create a New User
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,

    });
    const data = {
      user: {
        id: user.id,
      }
    }
    const authToken = jwt.sign(data, JWT_SECRET);
    success = true
    //  res.json(User);
    res.json({success,"Auth Token " : authToken})

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Error Occured");
  }
})

//Route 2: Authenticate a User using: POST 'api/auth/login' : no Login Required 
router.post('/login', [
  //Valitidion for Fields through Express Validtion
  body('email', 'Enter a Valid Email').isEmail(),
  body('password', 'Password cannot be Blank').exists()
], async (req, res) => {
  let success = true;
  
  //If there are Error Return Bad Request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      success = false
      res.status(400).json({ success, error: "Please try to Login with correct Credentials" })
    }

    //Comapre my User Password with Database password
    let CompareUserPassword = await bcrypt.compare(password, user.password);
    if (!CompareUserPassword) {
      success = false;
      res.status(400).json({ success, error: "Please try to Login with correct Credentials" })
    }
    const data = {
      user: {
        id: user.id,
      }
    }
    const authToken = jwt.sign(data, JWT_SECRET);
    
    res.json({ success,"authToken": authToken })
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Some Error");
  }
})

//Route 3: Get loggedIn User Details using: POST 'api/auth/getUser' : Login Required 
router.post('/getUser', fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Some Error");
  }
});
module.exports = router
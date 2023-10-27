const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/',async (req,res,next)=>{
  try {
    
  } catch (error) {
    console.error(error);
    next(error);
  }
})
.post('/',async (req,res,next)=>{
  try {
    console.log(req.body);
    const user = await User.create({
      id : req.body.id,
      pwd : req.body.pwd,
      name : req.body.name,
      email : req.body.email,
      phone : req.body.phone,
    })
    console.log(user);
    res.status(201).end();
  } catch (error) {
    console.error(error);
    next(error);
  }
})

module.exports = router;
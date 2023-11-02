const express = require('express');
const Ticket = require('../models/ticket');
const router = express.Router();

router
.get('/',async (req,res,next)=>{
  try {
    
  } catch (error) {
    console.error(error);
    next(error);
  }
})
.post('/',async (req,res,next)=>{
  try {
    console.log(typeof(req.body.kind));
    
    const newTicket = Ticket.create({
      name: req.body.title,
      kind: req.body.kind,
      price: req.body.price,
      imageURL: req.body.imageURL,
      address: req.body.address,
      regdate: req.body.date,
      maxPeople: req.body.people,
    })
    console.log(newTicket);
    res.status(201).end();
  } catch (error) {
    console.error(error);
    res.status
  }
})

module.exports = router;
const express = require('express');
const User = require('../models/user');
const router = express.Router();


router.get('/',async (req,res,next)=>{
  try {
    // console.log('test',req.body.id);
    const id = req.body.id;
    const pwd = req.body.pwd;
    const Ck_pwd = await User.findOne({
      where:{id: id}
    })
    // console.log('test',Ck_pwd.pwd); //db에서 로그인한 id랑 같은 데이터중 비밀번호 가져오기 => asd7584
    if (pwd == Ck_pwd.pwd) {
      console.log(Ck_pwd);
      res.status(201).json(Ck_pwd);
    }
  } catch (error) {
    
  }
})
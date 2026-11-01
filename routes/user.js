const express=require("express");
const router=express.Router();
const User=require("../models/user");
const passport = require("passport");



router.post("/signup",async(req,res)=>{
  try{
     let{username,email,password}=req.body;

    const newuser=new User({email,username});

    let user=await User.register(newuser,password);
    res.send(user);
  }catch(err){
    res.status(500).send(err.message);
  }
   
})

router.post("/login",passport.authenticate("local"),async(req,res)=>{
  res.send("logged in success");
})

router.get("/logout",(req,res,next)=>{
  req.logOut((err)=>{
    if(err){
     return next(err);
    }
  })
  res.send("logged out");
})

module.exports=router;

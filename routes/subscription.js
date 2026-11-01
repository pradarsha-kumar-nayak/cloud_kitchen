const express=require("express");
const router=express.Router();
const normalmenu=require("../models/normal-menu");
const specialmenu=require("../models/special-menu");
const subaddress = require("../models/sub-address");
const User=require("../models/user");
const {isLoggedIn}=require("../middleware");

router.get("/normal",async(req,res)=>{
  const data=await normalmenu.find();
  res.send({data:data});
})

router.get("/special",async(req,res)=>{
  const data=await specialmenu.find();
  res.send({data:data});
})
router.post("/address",isLoggedIn,async(req,res)=>{
  const newAddress=new subaddress(req.body);
  await newAddress.save();
  await User.findByIdAndUpdate(req.user._id,{subaddress:newAddress._id});
  res.json({message:"Address saved",data:newAddress});

})
router.get("/seesub",async(req,res)=>{
  const data=await subaddress.find();
  res.send({data:data});
})

module.exports=router;
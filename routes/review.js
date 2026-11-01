const express=require("express");
const router=express.Router();
const Review=require('../models/review.js');
const Item =require("../models/items.js");
const wrapasync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const {itemSchema,reviewSchema}=require("../schema.js");
const {isLoggedIn,isReviewAuthor}=require("../middleware.js");

const validatereview=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body);
    if(error){
        throw new ExpressError(400,error);
       }else{
        console.log("success")
        next();
       }
}

router.post("/addreview/:id",isLoggedIn,validatereview,wrapasync(async(req,res)=>{
    const {id}=req.params;
    let itm=await Item.findById(id);
    let newReview=new Review(req.body);
    newReview.author=req.user._id;

    itm.reviews.push(newReview);
    await newReview.save();
    await itm.save();
    res.send("success");
}))

router.delete("/deletereview/:reviewid/:itmid",isLoggedIn,isReviewAuthor,wrapasync(async(req,res)=>{
    const {reviewid,itmid}=req.params;
    await Item.findByIdAndUpdate(itmid,{$pull:{reviews:reviewid}})
    await Review.findByIdAndDelete(reviewid);
    res.send("success");
}))

module.exports=router;
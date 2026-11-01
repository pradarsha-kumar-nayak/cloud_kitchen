const express=require("express");
const router=express.Router();
const Item =require("../models/items.js");
const wrapasync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const {itemSchema,reviewSchema}=require("../schema.js");


const validateitems=(req,res,next)=>{
    let {error}=itemSchema.validate(req.body);
    if(error){
        throw new ExpressError(400,error);
       }else{
        console.log("success")
        next();
       }
}

router.get("/items",wrapasync(async (req,res)=>{
    const items=await Item.find({});
    res.send(items);
}))

router.get("/viewdetails/:id",wrapasync(async(req,res)=>{
    const id= req.params.id;
    const itm=await Item.findById(id).populate({path:"reviews",populate:{path:"author"}});
    // console.log(itm);
    res.send(itm);
}))

router.post("/new-item",validateitems,wrapasync(async(req,res)=>{
       const item =new Item(req.body);
       await item.save();
       res.send("item added successfully");
   
}));

router.put("/updateitem/:id",validateitems,wrapasync(async(req,res)=>{
    const {id}=req.params;
       const item=await Item.findByIdAndUpdate(id,req.body);
       res.send("item updated"); 
}))

router.delete("/deleteItm/:id",wrapasync(async(req,res)=>{
    const {id}=req.params;
    await Item.findByIdAndDelete(id);
    res.send("item deleted successfully")
}))

//search

router.get("/search",async(req,res)=>{

    let {item}=req.query;

    let data=await Item.find({name:{$regex:item,$options:"i"}});
    res.send(data);
})

module.exports=router;
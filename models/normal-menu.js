const { required } = require("joi");
const mongoose=require("mongoose");
const schema=mongoose.Schema;

const normenu=new schema({
    day:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
   dishname: {
      type:String,
      required:true
    }
})

const normalmenu=mongoose.model("normal",normenu);
module.exports=normalmenu;
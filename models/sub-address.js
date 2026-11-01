
const { required } = require("joi");
const mongoose=require("mongoose");
const schema=mongoose.Schema;

const sub_address=new schema({
    username:{
        type:String,
        required:true
    },
    contactno:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }
})

const subaddress=mongoose.model("subaddress",sub_address);
module.exports=subaddress;
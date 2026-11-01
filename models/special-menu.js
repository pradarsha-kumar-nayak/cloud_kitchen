
const mongoose=require("mongoose");
const schema=mongoose.Schema;

const spcmenu=new schema({
    day:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    dishname:{
        type:String,
        require:true
    }
})

const specialmenu=mongoose.model("special",spcmenu);
module.exports=specialmenu;
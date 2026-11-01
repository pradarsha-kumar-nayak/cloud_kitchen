
const mongoose =require("mongoose");
const Schema =mongoose.Schema;
const review=require("./review.js");
const itemSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:"https://images.unsplash.com/photo-1642972420043-4736c570a716?q=80&w=1032&auto=format&fit=crop",
        set:(v) => v ===""?"https://images.unsplash.com/photo-1642972420043-4736c570a716?q=80&w=1032&auto=format&fit=crop":v
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    reviews:[{
        type:Schema.Types.ObjectId,
        ref:"review"
    }]
})

itemSchema.post("findOneAndDelete",async(itm)=>{
  if(itm){
    await review.deleteMany({_id:{$in:itm.reviews}});
  }
})

const Item=mongoose.model("Item",itemSchema);
module.exports =Item;
const passportLocalMongoose=require("passport-local-mongoose").default;
const mongoose=require("mongoose");
const schema=mongoose.Schema;

const userSchema=new schema({
    email:{
        type:String,
        required:true
    },
    subaddress:{
        type:schema.Types.ObjectId,
        ref:"subaddress"
    }

})

userSchema.plugin(passportLocalMongoose);
const user=mongoose.model("user",userSchema);

module.exports=user;

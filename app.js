const express=require("express");
const cors=require("cors")
const app=express();
const mongoose = require("mongoose");
const itmrouter=require("./routes/items.js");
const reviewrouter=require("./routes/review.js");
const userrouter=require("./routes/user.js");
const subrouter=require("./routes/subscription.js");
const session=require("express-session");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");
 
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}));
app.use(express.json());

const MONGO_URL="mongodb://127.0.0.1:27017/canteen";

main().then(()=>{
    console.log("connected db");
})

async function main(){
    await mongoose.connect(MONGO_URL);
}

const sessionoption={
    secret:"mysuperscret",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now() + 7 *24*60*60*1000,
        maxAge:7 *24*60*60*1000,
        httpOnly:true,
    }
}

app.use(session(sessionoption));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//authentication route

app.get("/check-auth",(req,res)=>{

    if(req.isAuthenticated()){
        //  console.log(req.user);
        res.json({loggedIn:true,user:req.user});
       
    }else{
        res.json({loggedIn:false});
    }
})

//router
app.use("/itm",itmrouter);
app.use("/review",reviewrouter);
app.use("/sub",subrouter);
app.use("/",userrouter);


app.use((err,req,res,next)=>{
   let {statusCode=500,message}=err;
   res.status(statusCode).send(message);
})

app.listen(8000,()=>{
    console.log("server started");
})
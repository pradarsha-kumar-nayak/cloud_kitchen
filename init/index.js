const mongoose=require("mongoose");
const Item=require("../models/items.js");
const nordatamod=require("../models/normal-menu.js");
const spcdatamod=require("../models/special-menu.js");
const spcdata=require("./specialdata.js");
const nordata=require("./normaldata.js");
const init=require("./data.js");

const MONGO_URL="mongodb://127.0.0.1:27017/canteen";

main().then(()=>{
    console.log("connected");
})

async function main(){
  await mongoose.connect(MONGO_URL);
}

const initDB = async()=>{
   await Item.deleteMany({});
   await Item.insertMany(init.data);
   console.log("data was initilized");
}

// initDB();

const initnordata=async()=>{
  await nordatamod.deleteMany({});
  await nordatamod.insertMany(nordata.normaldata);
  console.log("data was initilized");
}

// initnordata();

const initspcdata =async()=>{
  await spcdatamod.deleteMany({});
  await spcdatamod.insertMany(spcdata.specialdata);
}

initspcdata();

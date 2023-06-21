const {MongoClient}=require("mongodb");
require('dotenv').config();
// const url="mongodb://127.0.0.1:27017"
console.log(process.env.MONGODB_CONNECTION_URL)
module.exports.connectToDb=async()=>{
    try{
     const client=new MongoClient(process.env.MONGODB_CONNECTION_URL);
     
     
      await client.connect();
      console.log("connection successfull");
      const db=client.db("bankDetails")
      return db;

    }catch(error){
        console.log("cannot connect error:", error)
    }
}
const {MongoClient}=require("mongodb");
const url="mongodb://127.0.0.1:27017"
module.exports.connectToDb=async()=>{
    try{
     const client=new MongoClient(url);
      await client.connect();
      console.log("connection successfull");
      const db=client.db("bankDetails")
      return db;

    }catch(error){
        console.log("cannot connect error:", error)
    }
}
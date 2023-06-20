const {connectToDb}=require("./connection")
const express=require("express")
const body=require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

app=express();
app.set("view engine",'ejs')
app.use(body.urlencoded({extended:true}))
app.use(express.static("public"));
process.env.NODE_ENV = 'development';
require('events').EventEmitter.defaultMaxListeners = 15;
app.set("view engine","ejs");

app.get("/",(async(req,res)=>{
  
   const db=await connectToDb();
   let datas= await db.collection("branchdetails").find({}).toArray()
   
   res.render("home");

}))
app.get("/result",(async(req,res)=>{
    res.render("body")
}))
app.post("/result",(async(req,res)=>{
    console.log(req.body)
    const bankName= _.upperCase(req.body.bankName)  ;
    console.log(bankName,"bank")
    const db=await connectToDb();
    let searchBankdatas= await db.collection("branchdetails").find({bank_name:bankName}).toArray()
    console.log(searchBankdatas)
    res.render("body",{searchBankdatas})
    
}))


app.listen("3000",(()=>{
    console.log("server is running")
}))





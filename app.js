const { connectToDb } = require("./connection");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const {collection}=require("./collection")
require('dotenv').config();


const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
process.env.NODE_ENV = "development";
require('events').EventEmitter.defaultMaxListeners = 15;

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    try {
      res.render("home");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  app.get("/result", async (req, res) => {
    try {
      res.render("body");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  app.post("/bankDetails", async (req, res) => {
    try {
      const db = await connectToDb();
      let branchDetails = [];

      if (req.body.data) {
        branchDetails = await db.collection(collection.collectionName).find({
          $or: [
            { bank_name: new RegExp('^' + _.upperCase(req.body.data)) },
            { bank_id: _.parseInt(req.body.data) }
          ]
        }).toArray();
      }
      
      let branchNos = branchDetails.length;
      
      res.render("body", { branchDetails, branchNos });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  

app.get("/ifsc", async (req, res) => {
    try {
      res.render("IFSC");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  

app.post("/ifsc", async (req, res) => {
    try {
      const ifsc=req.body.data;
      console.log(ifsc)
      const db = await connectToDb();
      const BankData = await db.collection(collection.collectionName).find({
        ifsc: new RegExp('^' + ifsc + '$')
      }).toArray()
      console.log( (BankData))
      res.render("ifscBody",{BankData})
    } catch (error) {
      
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
 
app.listen( process.env.PORT||"3000",(()=>{
    console.log("server is running")
}))





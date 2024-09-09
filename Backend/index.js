const express=require("express");
const path=require("path")   
const fs=require("fs");
const cors=require("cors")
const app=express();
const parse=require("json-parse")

app.use(cors());

app.get("/:files",function (req,res){
    fs.readdir(path.join("C:/Users/hp/Desktop",req.params.files),(err,files)=>{
       
       if(err){
          res.status(500).send(path.join("C:/Users/hp/Desktop/"));
       }else{
           res.json(files);
       }
       
   })
})
app.get("/file/:filename",function(req,res){
       const name=req.params.filename;
       fs.readFile(name,"utf-8",function(err,data){
           if(err){
               res.status(404).send("file not found");
           }
           res.json({
               data
           })
       })
   
})
app.listen(3000);
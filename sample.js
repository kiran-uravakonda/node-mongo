var express=require('express')
var app=express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("chandu");
    var coll=dbo.collection("kullayappa")
    var myobj = { name: "Company Inc", age:20,address: "Highway 37" };
//   dbo.collection("kullayappa").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
   
//   });

coll.updateOne( myobj,{$set:{name:"wipro"}},(err,res)=>{
    if(err) throw err
    console.log("success and update done")
    // console.log(res)
})
  });
app.listen(3000,()=>{
    console.log("server running on 3000 port")
})




// https://www.youtube.com/watch?v=V8dYGNfHjfk
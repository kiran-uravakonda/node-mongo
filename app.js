var mongodb=require('mongodb');
var express=require('express')
var app=express();
var url="mongodb://localhost:27017/"
mongodb.connect(url,(err,res)=>{
    if(err) throw err;
    console.log("connection success");
    var db=res.db("nodejs")
    var a=db.collection("server");
        var data=({id:"2",serverName:"mongoose",value:"nothing"})   

    //    a.insert(data).then((result)=>{
    //     console.log("success")
    //     console.log(result)
    //    }).catch((err)=>{
    //     console.log(err)
    //    })
        //  console.log(typeof a)
        // a.find({}).toArray((err, result) =>{
        //     if(err) throw err
        //     console.log("find successfully")
        //     console.log(result)
        // })

        // a.find({},{projection:{name:'bangalore'}}).toArray((err, result) =>{
        //     if(err) throw err
        //     console.log("find successfully")
        //     console.log(result)
        // })

    //    db.dropCollection('employees',(err,res)=>{
    //     if(err) throw err;
    //     console.log("collection deleted")
    //    })
    
    var newvalues = { $set: {value: "Canyon 123" } };
    a.updateOne(data, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
     console.log(res)
    });
  });

       
    
app.listen(3000,()=>{
    console.log("server running on 3000 port")
})
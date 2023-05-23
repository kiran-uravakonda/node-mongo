var mongodb=require('mongodb');
var response=require('./operation.js')
var url="mongodb://localhost:27017/";
mongodb.connect(url,(err,res)=>{
    if(err) throw err;
    console.log("connection success")
    var db=res.db("new")
    response.insertDocument(db,{name:"surendra",age:26,address:"pulivendula"},"details",result=>{
        console.log("Insert Document:\n", result);
    })

})
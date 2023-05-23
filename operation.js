exports.insertDocument=(db,document,collection,callback)=>{

    var value=db.collection(collection)
    value.insert(document,(err,result)=>{
        if(err) throw err;
        console.log("inserted"+result.result.n+"documents in the collection"+collection)
        callback(result)
    })
}
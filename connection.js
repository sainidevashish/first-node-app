const mongose=require('mongoose');
mongose.connect('mongodb://127.0.0.1:27017/crud').then(res=>{
    console.log('monngo db connected');
}).catch(err=>{
    console.log("something went wrong",err);
})

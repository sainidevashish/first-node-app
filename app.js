const express=require('express');
const User = require('./model/user');
const app=express();
const PORT=8000;
require('./connection')
app.use(express.json());
app.get('/api/user',(req,res)=>{
    res.status(200).json({user:{name:"deva"}})
})
app.post('/',async(req,res)=>{
    const result=await User.create(req.body);
    res.status(201).json({msg:"user saved",result})
})
app.get('/',async(req,res)=>{
    const result=await User.find({});``
    res.status(200).json({msg:"user saved",result})
})
app.put('/:id',async(req,res)=>{
    const id = req.params.id;
    const result=await User.findOneAndUpdate({"_id":id}, req.body);
    res.status(200).json({msg:"user update",result})
})

app.delete('/:id',async(req,res)=>{
    const id=req.params.id;
    const result=await User.deleteOne({"_id": id});
    res.status(200).json({msg:"user delete",result})
})

app.listen(8000,()=>{
    console.log(`server running on port ${PORT}`);
})
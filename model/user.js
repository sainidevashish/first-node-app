const mongoose=require('mongoose');
const useSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
})

const User=new mongoose.model('user',useSchema)
module.exports=User
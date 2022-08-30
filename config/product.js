const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/product',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("connection to daatbase is successfully");
    }
})
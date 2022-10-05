const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const kullaniciSema=new Sema({
    email:{
        type:string,
        required:true,
        unique:true
    },
    parola:{
        type:string,
        required:true
    }
})

module.exports=mongoose.model('Kullanıcı',kullaniciSema)
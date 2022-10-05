const mongoose=require("mongoose");
const Sema =mongoose.Schema
const bcrypt=require("bcrypt")

const kullaniciSema=new Sema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    parola:{
        type:String,
        required:true
    }
})

kullaniciSema.statics.signup=async function(email,parola){
    const kontrolKullanici=await this.findOne({email})
    if(kontrolKullanici){
        throw Error('Bu email ile kayıtlı kullanıcı var')
    }
    const salt=await bcrypt.genSalt(10)

    const sifrelenmisParola=await bcrypt.hash(parola,salt)

    const kullanici=await this.create({
        email,
        parola:sifrelenmisParola
    })
    return kullanici
}

module.exports=mongoose.model('Kullanıcı',kullaniciSema)
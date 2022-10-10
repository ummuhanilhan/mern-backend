const mongoose=require("mongoose");
const bcrypt=require("bcrypt")
const validator=require("validator")
const Sema =mongoose.Schema


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

    if(!email || !parola){
        throw new Error('Lütfen email ve parola giriniz')
    }
    if(!validator.isEmail(email)){
        throw new Error('Lütfen geçerli bir email giriniz')
    }
    if(!validator.isStrongPassword(parola)){
        throw new Error('Lütfen geçerli bir parola giriniz')
    }



    const kontrolKullanici=await this.findOne({email})
    if(kontrolKullanici){
        throw  Error('Bu email ile kayıtlı kullanıcı var')
    }
    const salt=await bcrypt.genSalt(10)

    const sifrelenmisParola=await bcrypt.hash(parola,salt)

    const kullanici=await this.create({
        email,
        parola:sifrelenmisParola
    })
    return kullanici
}

kullaniciSema.statics.login=async function(email,parola){
    if(!email || !parola){
        throw Error('Lütfen email ve parola giriniz')
    }
    const kullanici=await this.findOne({email})
    if(!kullanici){
        throw Error('Bu email ile kayıtlı kullanıcı yok')
    }
   const kontrol=await bcrypt.compare(parola,kullanici.parola)
    if(!kontrol){
        throw Error('Parola yanlış')
    }
    return kullanici
}


module.exports=mongoose.model('Kullanici',kullaniciSema)
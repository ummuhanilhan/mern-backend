const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const bcrypt=require('bcrypt')

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

kullaniciSema.statics.signup=async function(email,parola){
    const kontrolKullanici=await this.findOne({email}) // kullanıcının var olup olmadığını kontrol ediyoruz
    if(kontrolKullanici){
        throw new Error('Bu email ile kayıtlı kullanıcı var')
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
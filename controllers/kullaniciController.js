const Kullanici=require('../models/kullaniciModel')


const loginKullanici= async (req,res)=>{
    res.json({mesaj: 'login işlemi gerçekleşti'})

}

const signupKullanici = async (req,res)=>{
   // res.json({mesaj: 'signUp işlemi gerçekleşti'})
   const {email,parola}=req.body;
    try {
        const kullanici=await kullanici.signup(email,parola)
        res.status(200).json({kullanici})
    } catch (error) {
        res.status(400).json({hata:error.message})
    }

}


module.exports={
    loginKullanici,
    signupKullanici
}
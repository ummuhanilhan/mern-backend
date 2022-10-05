const loginKullanici= async (req,res)=>{
    res.json({mesaj: 'login işlemi gerçekleşti'})

}

const signupKullanici = async (req,res)=>{
    res.json({mesaj: 'signUp işlemi gerçekleşti'})

}


module.exports={
    loginKullanici,
    signupKullanici
}
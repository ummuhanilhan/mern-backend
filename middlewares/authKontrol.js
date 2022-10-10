

const jwt = require('jsonwebtoken');
const Kullanici=require('../models/kullanici');


const authKontrol = async (req, res, next) => {
    const {authorization}=req.headers;
    if(!authorization){
        return res.status(401).json({hata:'Giriş yapmalısınız'})
    } 
    const token=authorization.split('')[1];
    try {
        const {_id}=jwt.verify(token,process.env.JWT_SECRET)
        
        req.kullanici=await Kullanici.findOne({_id}).select('_id')
        next()
    } catch (error) {
        console.log(error);
        res.status(401).send({ error: 'Giriş yapmalısınız' });
    }
}

module.exports = authKontrol;
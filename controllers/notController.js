const NotModel = require("../models/notModel");
const mongoose=require('mongoose')
const notOlustur= async (req,res)=>{

    const {baslik,aciklama}=req.body;

    try {
        const not=await NotModel.create({baslik,aciklama});
        res.status(200).json({not})
    } catch (error) {
        res.status(400).json({hata:error.message})
    }
}

const notlarGetir=async (req,res)=>{
    const notlar= await NotModel.find().sort({createdAt:-1});
        res.status(200).json(notlar)
}

const notGetir=async (req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({hata:"Geçersiz id"})
    }
    const not= await NotModel.findById(id);
    if(!not){
        return res.status(404).json({hata: 'not bulunamadı'})

    }
    res.status(200).json(not)
}

module.exports={
    notOlustur,notlarGetir,notGetir
}
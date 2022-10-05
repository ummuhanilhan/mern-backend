const NotModel = require("../models/notModel");
const mongoose=require('mongoose')
const { findOneAndUpdate } = require( "../models/notModel" )
const notOlustur= async (req,res)=>{

    const {baslik,aciklama}=req.body;

    let bosAlanlar=[]
        if(!baslik){
            bosAlanlar.push("baslik")
        }
        if(!aciklama){
            bosAlanlar.push("aciklama")
        }
        if(bosAlanlar.length>0){
            return res.status(400).json({
                hata:`Alanlar boş geçilemez`,bosAlanlar
            })
        }

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

const notSil=async (req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({hata:"Geçersiz id"})
    }
    const not= await NotModel.findOneAndDelete({_id:id});
    if(!not){
        return res.status(404).json({hata: 'not bulunamadı'})

    }
    res.status(200).json(not)
}
 const notGuncelle=async (req,res)=>{
    const {id}=req.params;
if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({hata:"Geçersiz id"})
}
const not=await NotModel.findOneAndUpdate({_id:id},{
    ...req.body
}, {new:true})
 }
module.exports={
    notOlustur,notlarGetir,notGetir, notSil, notGuncelle}
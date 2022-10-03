
const mongoose=require("mongoose");

const Sema=mongoose.Schema


const notSema=Sema({
    baslık: {
        type: String,
        required: true
    },

    aciklama:{
        type: String,
    }
}, {
    timestamps:true
})
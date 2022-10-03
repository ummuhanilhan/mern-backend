const express = require("express");

const router = express.Router();

const NotModel = require("../models/notModel");

router.get("/", (req, res) => {
  res.json({ msg: "Notlar sayfası" });
});
//Listeleme
router.get("/:id", (req, res) => {
  res.json({ msg: "${req.params.id}´ id li not" });
});
//Ekle
router.post('/', async (req, res) => {
  const {baslik,aciklama} = req.body;
  try {
    const not=await NotModel.create({baslik,aciklama});
    res.status(200).json({not});
  } catch (error) {
    res.status(400).json({hata:error.message});
  }
})
//Sil
router.delete("/:id", (req, res) => {
  res.json({ msg: `${req.params.id} id li not silindi` });
});
//Güncelle
router.put("/:id", (req, res) => {
  res.json({ msg: `${req.params.id} id li not güncellendi` });
});

module.exports = router;

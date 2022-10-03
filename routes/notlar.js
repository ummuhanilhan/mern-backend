const express = require("express");

const router = express.Router();

const NotModel = require("../models/notModel");
const { notOlustur } = require("../controllers/notController");

router.get("/", (req, res) => {
  res.json({ msg: "Notlar sayfası" });
});
//Listeleme
router.get("/:id", (req, res) => {
  res.json({ msg: "${req.params.id}´ id li not" });
});
//Ekle
router.post('/', notOlustur)

//Sil
router.delete("/:id", (req, res) => {
  res.json({ msg: `${req.params.id} id li not silindi` });
});
//Güncelle
router.put("/:id", (req, res) => {
  res.json({ msg: `${req.params.id} id li not güncellendi` });
});

module.exports = router;

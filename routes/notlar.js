const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "Notlar sayfası" });
});
//Listeleme
router.get("/:id", (req, res) => {
  res.json({ msg: "${req.params.id}´ id li not" });
});
//Ekle
router.post("/", (req, res) => {
  res.json({ msg: "yeni not ekleme" });
});
//Sil
router.delete("/:id", (req, res) => {
  res.json({ msg: `${req.params.id} id li not silindi` });
});
//Güncelle
router.put("/:id", (req, res) => {
  res.json({ msg: `${req.params.id} id li not güncellendi` });
});

module.exports = router;

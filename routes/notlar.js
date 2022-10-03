const express = require("express");

const router = express.Router();

const { notOlustur, notlarGetir, notGetir} = require("../controllers/notController");

router.get("/", notlarGetir)
//Listeleme
router.get('/:id', notGetir)
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

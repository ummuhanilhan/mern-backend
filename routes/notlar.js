const express = require("express");

const router = express.Router();

const { notOlustur, notlarGetir, notGetir, notSil, notGuncelle} = require("../controllers/notController");
const authKontrol = require("../middlewares/authKontrol");

// middleware'ı kullanabiilirim
router.use(authKontrol);""

router.get("/", notlarGetir)
//Listeleme
router.get('/:id', notGetir)
//Ekle
router.post('/', notOlustur)

//Sil
router.delete("/:id", notSil)
router.put("/:id",notGuncelle)

module.exports = router;

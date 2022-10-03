const express = require("express");

const router = express.Router();

const { notOlustur, notlarGetir, notGetir, notSil, notGuncelle} = require("../controllers/notController");

router.get("/", notlarGetir)
//Listeleme
router.get('/:id', notGetir)
//Ekle
router.post('/', notOlustur)

//Sil
router.delete("/:id", notSil)
router.put("/:id",notGuncelle)

module.exports = router;

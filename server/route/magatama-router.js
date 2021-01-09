const express = require('express')

const MagatamaCtrl = require('../controllers/magatama-ctrl')

const router = express.Router()

//these may be useful later
router.post('/Magatamas', MagatamaCtrl.createMagatama)
router.post('/Magatamas/:id', MagatamaCtrl.updateMagatama)
router.post('/Magatamas/:id', MagatamaCtrl.deleteMagatama)
router.post('/Magatamas/:id', MagatamaCtrl.getMagatamaById)

//use the getMagatamas function from Magatama.ctrl with the get request at /Magatamas
router.get('/', MagatamaCtrl.getMagatamas)

module.exports = router
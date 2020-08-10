const express = require('express')

const MagatamaCtrl = require('../controllers/magatama-ctrl')

const router = express.Router()

router.post('/magatama', MagatamaCtrl.createMagatama)
router.post('/magatama/:id', MagatamaCtrl.updateMagatama)
router.post('/magatama/:id', MagatamaCtrl.deleteMagatama)
router.post('/magatama/:id', MagatamaCtrl.getMagatamaById)
router.post('/magatama', MagatamaCtrl.getMagatamas)

module.exports = router
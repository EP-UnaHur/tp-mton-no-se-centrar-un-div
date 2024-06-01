const express = require('express')
const carreraController = require('../controllers/carrerasController')
const router = express.Router()

router.get('/', carreraController.getAllCarreras)
router.get('/:id', carreraController.getCarreraById)

module.exports = router
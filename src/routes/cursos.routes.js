const express = require('express')
const {Curso} = require('../db/models')
const middleware = require('../middlewares/middleware')
// const cursoSchema = require('../schemas/cursos.schemas')
const cursoController = require('../controllers/cursos.controllers')
const router = express.Router()



module.exports = router
const express = require('express')
const {Carrera} = require('../db/models') 
const middleware = require('../middlewares/middleware')
const carreraSchema = require('../schemas/carreras.schemas')
const materiaSchema = require('../schemas/materias.schemas')
const carreraController = require('../controllers/carreras.controllers')
const router = express.Router()

router.get('/', carreraController.getAllCarreras) //Obtener TODAS las carreras (200)
router.get('/:id', middleware.existsById(Carrera) ,carreraController.getCarreraById) //Obtener una carrera en particular por ID (200,404)
router.post('/', middleware.validaSchema(carreraSchema) ,carreraController.createCarrera) //Crear una Carrera (201,400)
router.post('/:id/materia', middleware.existsById(Carrera), middleware.validaSchema(materiaSchema), carreraController.createMateriaEnCarrerraById) //Crea un materia dentro de una carrera (201,404,400)
router.get('/:id/materias', middleware.existsById(Carrera), carreraController.getMateriasDeLaCarreraById) //Obtener todas la materias de una Carrera (200,404)

module.exports = router
const express = require('express')
const {Materia} = require('../db/models')
const middleware = require('../middlewares/middleware')
const cursoSchema = require('../schemas/cursos.schemas')
const materiaController = require('../controllers/materias.controllers')
const router = express.Router()

router.get('/', materiaController.getAllMaterias) //Obtener TODAS las materias (200)
router.get('/:id', middleware.existsById(Materia), materiaController.getMateriaById) //Obtener una materia en particular (200,404)
router.delete('/:id', middleware.existsById(Materia), materiaController.deleteMateriaById) //Borra una materia en particular (200,404,500)
router.post('/:id/curso', middleware.existsById(Materia), middleware.validaSchema(cursoSchema), materiaController.createCursoEnMateriaById) //Crea un Curso para la la Materia (201,404,400)
router.get('/:id/cursos', middleware.existsById(Materia),  materiaController.getCursosDeLaMateriaById) //Obtener los Curso de la Materia (200,404)

module.exports = router
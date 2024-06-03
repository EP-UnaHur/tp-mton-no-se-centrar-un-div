const express = require('express')
const {Curso} = require('../db/models')
const middleware = require('../middlewares/middleware')
const cursoSchema = require('../schemas/cursos.schemas')
const cursoController = require('../controllers/cursos.controllers')
const router = express.Router()

router.get('/', cursoController.getCursos) //Obtener todos los cursos (200)
router.get('/:id', middleware.existsById(Curso), cursoController.getCursoById) //Obtener un curso en particular (200,404)
router.delete('/:id', middleware.existsById(Curso), cursoController.deleteCursoById) //Borra un curso en particular (200,404,500)
router.put('/:id', middleware.existsById(Curso), middleware.validaSchema(cursoSchema), cursoController.editCursoById) //Modificar los datos de un curso particular (200,404)

module.exports = router
const express = require('express')
const {Curso} = require('../db/models')
const middleware = require('../middlewares/middleware')
const cursoSchema = require('../schemas/cursos.schemas')
// const profesorSchema = require('../schemas/profesores.schemas')
const listaProfesoresSchema = require('../schemas/listaProfesores.schemas')
const cursoController = require('../controllers/cursos.controllers')
const router = express.Router()

router.get('/', cursoController.getCursos) //Obtener todos los cursos (200)
router.get('/:id', middleware.existsById(Curso), cursoController.getCursoById) //Obtener un curso en particular (200,404)
router.delete('/:id', middleware.existsById(Curso), cursoController.deleteCursoById) //Borra un curso en particular (200,404,500)
router.put('/:id', middleware.existsById(Curso), middleware.validaSchema(cursoSchema), cursoController.editCursoById) //Modificar los datos de un curso particular (200,404)

//Terminar
router.post('/:id/profesores', middleware.existsById(Curso),middleware.validaSchema(listaProfesoresSchema), cursoController.associateProfesorACursoById) //Verificar el schema y ver si crear modelo
router.get('/:id/profesores', middleware.existsById(Curso), cursoController.getAllProfesoresDelCursoById)

module.exports = router
const express = require('express')
const {Profesor} = require('../db/models')
const middleware = require('../middlewares/middleware')
const profesorSchema = require('../schemas/profesores.schemas')
const profesorController = require('../controllers/profesores.controllers')
const router = express.Router()

router.get('/', profesorController.getAllProfesores) //Obtener todos los profesores (200)
router.get('/:id', middleware.existsById(Profesor), profesorController.getProfesorById) //Obtener un profesor en particular (200,404)
router.post('/', middleware.validaSchema(profesorSchema), profesorController.createProfesor) //Crear un profesor (201,400)
router.put('/:id', middleware.existsById(Profesor), middleware.validaSchema(profesorSchema), profesorController.editProfesorById) //Modificar lo datos de un profesor (200,404)
router.delete('/:id', middleware.existsById(Profesor), profesorController.deleteProfesorById) //Borrar un profesor (200,404,500)

//Terminar
router.get('/:id/cursos', middleware.existsById(Profesor), profesorController.getCursosDeProfesorById)

module.exports = router
//No se si es lo ideal, pero hice un Schema para verificar la lista con los IDs
//de los profesores que se usa en el endpoint Get => /profesores/:id/cursos
//Ya que me ahorraba más codigo y tiempo hacerlo de esta forma y no tener que programar la logica de cero.

const Joi = require('joi')

const listaProfesores = Joi.array().items(Joi.object().keys({
    id: Joi.number().integer().required().messages({
        "any.required": "El campo id es obligatorio"
    })
})) 



module.exports = listaProfesores
const Joi = require('joi')
const validateDate = require('../ultis/date.validator')

const profesorSchema = Joi.object().keys({
    nombre: Joi.string().required().messages({
        "string.empty": "nombre no puede ser vacio",
        "any.required": "El campo nombre es obligatorio"
    }),
    fechaNacimiento: Joi.string().custom(validateDate).required().messages({
        "any.custom": "El formato de la fecha debe ser YYYY-MM-DD.",
        "string.empty": "fechaNacimiento no puede ser vacio",
        "any.required": "fechaNacimiento es requerido"      
    }),
    legajo: Joi.number().integer().messages({
        "string.empty": "legajo no puede ser vacio" 
    }),
    activo: Joi.boolean().required().messages({
        "any.required": "El campo cuatrimestal es obligatorio"
    })
})

module.exports = profesorSchema
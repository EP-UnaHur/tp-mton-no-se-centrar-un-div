const Joi = require('joi')
const validateDate = require('../ultis/date.validator')

const cursoSchema = Joi.object().keys({
    comision: Joi.string().messages({}),
    turno: Joi.string().required().messages({
        "string.empty": "turno no puede ser vacio",
        "any.required": "El campo turno es obligatorio"
    }),
    fechaInicio: Joi.string().custom(validateDate).required().messages({
        "any.custom": "El formato de la fecha debe ser YYYY-MM-DD.",
        "string.empty": "fechaInicio no puede ser vacio",
        "any.required": "fechaInicio es requerido"      
    }),
    fechaFin: Joi.string().custom(validateDate).required().messages({
        "any.custom": "El formato de la fecha debe ser YYYY-MM-DD.",
        "string.empty": "fechaFin no puede ser vacio",
        "any.required": "fechaFin es requerido"      
    })
})

module.exports = cursoSchema
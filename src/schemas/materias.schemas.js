const Joi = require('joi')
// const validateDate = require('../ultis/date.validator')

const materiaSchema = Joi.object().keys({
    nombre: Joi.string().required().min(8).max(25).messages({
        "string.min": `nombre debe tener al menos {#limit} carácteres.`,
        "string.max": `nombre debe tener como máximo {#limit} carácteres.`,
        "string.empty": "nombre no puede ser vacio",
        "any.required": "nombre es requerido"      
    }),
    cuatrimestral: Joi.boolean().required().messages({
        "any.required": "El campo cuatrimestal es obligatorio"
    }),
    anio: Joi.number().integer().required().min(4).messages({ //ver de permitir solo 4 caracteres
        "string.min": `anio debe tener al menos {#limit} carácteres.`,
        // "string.max": `anio debe tener como máximo {#limit} carácteres.`,
        "string.empty": "anio no puede ser vacio",
        "any.required": "anio es requerido"      
    })
})

module.exports = materiaSchema
const Joi = require('joi')

const materiaSchema = Joi.object().keys({
    nombre: Joi.string().required().min(8).max(25).messages({
        "string.min": `nombre debe tener al menos {#limit} carácteres.`,
        "string.max": `nombre debe tener como máximo {#limit} carácteres.`,
        "string.empty": "nombre no puede ser vacio",
        "any.required": "nombre es requerido"      
    }),
    cuatrimestral: Joi.boolean().required().messages({
        "any.required": "El campo cuatrimestal es obligatorio",
    }),
    anio: Joi.number().integer().required().min(2000).max(2077).messages({
        "number.min": `anio debe ser al menos mayor al año {#limit}.`,
        "number.max": `anio debe ser al menos menor al año {#limit}.`,
        "any.required": "anio es requerido"      
    })
})

module.exports = materiaSchema
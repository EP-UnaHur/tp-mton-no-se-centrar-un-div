const Joi = require('joi')

const carreraSchema = Joi.object().keys({
    nombre: Joi.string().required().min(8).max(25).messages({
        "string.min": `nombre debe tener al menos {#limit} carácteres.`,
        "string.max": `nombre debe tener como máximo {#limit} carácteres.`,
        "string.empty": "nombre no puede ser vacio",
        "any.required": "nombre es requerido"      
    }),
    grado: Joi.string().required().min(1).max(15).messages({
        "string.min": `grado debe tener al menos {#limit} carácteres.`,
        "string.max": `grado debe tener como máximo {#limit} carácteres.`,
        "string.empty": "grado no puede ser vacio",
        "any.required": "El campo grado es obligatorio"
    }),
    universidad: Joi.string().required().min(2).max(25).messages({
        "string.min": `universidad debe tener al menos {#limit} carácteres.`,
        "string.max": `universidad debe tener como máximo {#limit} carácteres.`,
        "string.empty": "universidad no puede ser vacio",
        "any.required": "universidad es requerido"      
    })
})

module.exports = carreraSchema
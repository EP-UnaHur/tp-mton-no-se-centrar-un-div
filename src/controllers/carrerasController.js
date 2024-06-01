const db = require('../db/models')
const carrera = db.Carrera
const sequelize = db.sequelize

const carreraController = {}

const getAllCarreras = async (req, res)=>{
    res.status(200).json(await carrera.findAll({}))
}
carreraController.getAllCarreras = getAllCarreras

const getCarreraById = async (req, res)=>{
    const id = req.params.id
    try {
        res.status(200).json(await carrera.findByPk(id))
    }catch (e){
        res.status(404).json(`No fue encontrada la carrera con id: ${id}. `,e)
    }
}

module.exports = carreraController
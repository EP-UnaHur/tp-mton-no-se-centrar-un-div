const db = require('../db/models')
const { get } = require('../routes')
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
        const carreraABuscar = await carrera.findByPk(id)
        if(carreraABuscar){
            res.status(200).json(carreraABuscar)
        }
        else{
            res.status(404).json(`No fue encontrada la carrera con id: ${id}.`)
        }
    }catch (e){
        console.error(e)
    }
}
carreraController.getCarreraById = getCarreraById

module.exports = carreraController
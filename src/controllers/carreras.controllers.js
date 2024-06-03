const db = require('../db/models')
const { get } = require('../routes')
const CARRERA = db.Carrera
const MATERIA = db.Materia
// const sequelize = db.sequelize

const carreraController = {}

const getAllCarreras = async (req, res)=>{
    res.status(200).json(await CARRERA.findAll({}))
}
carreraController.getAllCarreras = getAllCarreras

const getCarreraById = async (req, res)=>{
    const id = req.params.id
    const carreraABuscar = await CARRERA.findByPk(id)
    res.status(200).json(carreraABuscar)
}
carreraController.getCarreraById = getCarreraById

const createCarrera = async (req, res)=>{
    const carreraACrear = await CARRERA.create(req.body)
    res.status(201).json(carreraACrear)
}
carreraController.createCarrera = createCarrera

const createMateriaEnCarrerraById = async (req, res)=>{
    const id = req.params.id 
    const materiaACrear = await MATERIA.create({...req.body, carreraId: id})
    res.status(201).json(materiaACrear)
}
carreraController.createMateriaEnCarrerraById = createMateriaEnCarrerraById

const getMateriasDeLaCarreraById = async (req, res)=>{
    const id = req.params.id
    const carreras  = await CARRERA.findByPk(id, {
        include: {model: MATERIA, as: 'materia'}
    })
    res.status(200).json(carreras.materia) 
}
carreraController.getMateriasDeLaCarreraById = getMateriasDeLaCarreraById

module.exports = carreraController
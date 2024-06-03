const {Profesor} = require('../db/models')
const {Curso_Profesor} = require('../db/models')
const { get } = require('../routes')
const db = require('../db/models')
const sequelize = db.sequelize

const profesorController = {}

const getAllProfesores = async (req, res)=>{
    const profesores = await Profesor.findAll({})
    res.status(200).json(profesores)
}
profesorController.getAllProfesores = getAllProfesores

const getProfesorById = async (req, res)=>{
    const id = req.params.id
    const profesorABuscar = await Profesor.findByPk(id)
    res.status(200).json(profesorABuscar) 
}
profesorController.getProfesorById = getProfesorById

const createProfesor = async (req, res)=>{
    const profesorACrear = await Profesor.create(req.body)
    res.status(201).json(profesorACrear)
}
profesorController.createProfesor = createProfesor

const editProfesorById = async (req, res)=>{
    const id = req.params.id
    const profesorAEditar = await Profesor.findByPk(id)
    await profesorAEditar.update(req.body)
    res.status(201).json(profesorAEditar)
}
profesorController.editProfesorById = editProfesorById

const deleteProfesorById = async (req, res)=>{
    const id = req.params.id
    try{
        await Profesor.destroy({where: {id}})
        res.status(200).json(`Se ha eliminado correctamente el profesor con el id: ${id}`)
    }catch(e){
        res.status(500).json(console.error(e))
    }
}
profesorController.deleteProfesorById = deleteProfesorById

                        
const getCursosDeProfesorById = async (req, res)=>{
    const id = req.params.id
    const data = await Profesor.findByPk(id, {include: {all:true}})
    res.status(201).json(data)
}
profesorController.getCursosDeProfesorById = getCursosDeProfesorById

module.exports = profesorController
// const db = require('../db/models')
const { get } = require('../routes')
// const MATERIA = db.Materia
// const CARRERA = db.Carrera
// const sequelize = db.sequelize
const {Materia} = require('../db/models')
const {Curso} = require('../db/models')

const materiaController = {}

const getAllMaterias = async (req, res)=>{
    res.status(200).json(await Materia.findAll({}))
}
materiaController.getAllMaterias = getAllMaterias

const getMateriaById = async (req, res)=>{
    const id = req.params.id
    const materiaABuscar = await Materia.findByPk(id)
    res.status(200).json(materiaABuscar)
}
materiaController.getMateriaById = getMateriaById

const deleteMateriaById = async (req, res)=>{ //no se si esta bn como hice el error 500
    const id = req.params.id
    try{
        const materiaABorrar = await Materia.destroy({where: {id}})
        res.status(200).json(`Se ha eliminado correctamente la materia con el id: ${id}`)
    }catch(e){
        res.status(500).json(console.error(e))
    }
}
materiaController.deleteMateriaById  = deleteMateriaById

const createCursoEnMateriaById = async (req, res)=>{
    const materiaId = req.params.id
    const cursoACrear = await Curso.create({materiaId,...req.body})
    res.status(201).json(cursoACrear)
}
materiaController.createCursoEnMateriaById = createCursoEnMateriaById

const getCursosDeLaMateriaById = async (req, res)=>{
    const id = req.params.id
    const materias  = await Materia.findByPk(id, {
        include: {model: Curso, as: 'curso'}
    })
    res.status(200).json(materias.curso)
}
materiaController.getCursosDeLaMateriaById = getCursosDeLaMateriaById

module.exports = materiaController
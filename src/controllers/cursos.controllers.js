const {Curso} = require('../db/models')
const { get } = require('../routes')
const { message } = require('../schemas/carreras.schemas')
// const sequelize = db.sequelize

const cursoController = {}

const getCursos = async (req, res)=>{
    const cursos = await Curso.findAll({})
    res.status(200).json(cursos)
}
cursoController.getCursos = getCursos

const getCursoById = async (req, res)=>{
    const id = req.params.id
    const cursoABuscar = await Curso.findByPk(id)
    res.status(200).json(cursoABuscar)
}
cursoController.getCursoById = getCursoById

const deleteCursoById = async (req, res)=>{
    const id = req.params.id
    try{
        const cursoABorrar = await Curso.destroy({where: {id}})
        res.status(200).json(`Se ha eliminado correctamente el curso con el id: ${id}`)
    }catch(e){
        res.status(500).json(console.error(e))
    }
}
cursoController.deleteCursoById = deleteCursoById

const editCursoById = async (req, res)=>{
    const id = req.params.id
    const cursoAEditar = await Curso.findByPk(id)
    await cursoAEditar.update(req.body)
    res.status(200).json(cursoAEditar)
}
cursoController.editCursoById = editCursoById

module.exports = cursoController
const {Curso} = require('../db/models')
const {Curso_Profesor} = require('../db/models')
const { get } = require('../routes')
const db = require('../db/models')
const sequelize = db.sequelize

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



                    //TERMINAR
const associateProfesorACursoById = async (req, res)=>{ //Ver que onda
    const cursoId = req.params.id
    const idsProfesores = req.body
    idsProfesores.forEach(p => {
        p.profesorId = p.id
        p.cursoId = cursoId
        delete p.id
    })
    await sequelize.query('PRAGMA foreign_keys = false;');
    await Curso_Profesor.bulkCreate(idsProfesores)
    await sequelize.query('PRAGMA foreign_keys = true;');

    const response = await Curso.findByPk(cursoId, {include: {all:true}})
    res.status(201).json(response)
}
cursoController.associateProfesorACursoById = associateProfesorACursoById

const getAllProfesoresDelCursoById = async (req, res)=>{ //Idem
    const cursoId = req.params.id
    const data = await Curso.findByPk(cursoId, {include: {all:true}})
    res.status(201).json(data)
}
cursoController.getAllProfesoresDelCursoById = getAllProfesoresDelCursoById
    
module.exports = cursoController

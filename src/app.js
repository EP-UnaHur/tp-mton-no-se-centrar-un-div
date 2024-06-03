const express = require('express')
const carreraData = require('../data/carreraData.json')
const profesorData = require('../data/profesorData.json')
const cursoData = require('../data/cursoData.json')
const materiaData = require('../data/materiaData.json')
const cursosProfesoresData = require('../data/cursosProfesoresData.json')

const db = require('./db/models')
const indexRouter = require('./routes/index')
const carreraRouter = require('./routes/carreras.routes')
const materiaRouter = require('./routes/materias.routes')
const cursoRouter = require('./routes/cursos.routes')
const profesorRouter = require('./routes/profesores.routes')

const app = express()
app.use(express.json())
app.use('/', indexRouter)
app.use('/carreras', carreraRouter)
app.use('/materias', materiaRouter)
app.use('/cursos', cursoRouter)
app.use('/profesores', profesorRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, async ()=> {
    console.log(`La aplicación inició correctamente en el puerto ${PORT}: http://localhost:${PORT}`)
    try{
        await db.sequelize.authenticate()
        
                //SOLO PARA DESARROLLO!!. Elimina todas las tablas junto a sus datos
        await db.sequelize.sync({force:true})
                
                //Crea datos iniciales de carreras y profesores en la BD al iniciar la API
        const carreras = await db.Carrera.bulkCreate(carreraData)
        const profesores = await db.Profesor.bulkCreate(profesorData)
        const materia = await db.Materia.bulkCreate(materiaData)
        const cursos = await db.Curso.bulkCreate(cursoData)
        const cursosProfesor = await db.Curso_Profesor.bulkCreate(cursosProfesoresData)

    } catch (e){ 
        console.error(e)
    }
})
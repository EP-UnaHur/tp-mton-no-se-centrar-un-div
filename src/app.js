const express = require('express')
const carreraData = require('../data/carreraData.json')

const db = require('./db/models')
const indexRouter = require('./routes/index')
const carreraRouter = require('./routes/carreras.routes')
const materiaRouter = require('./routes/materias.routes')

const app = express()
app.use(express.json())
app.use('/', indexRouter)
app.use('/carreras', carreraRouter)
app.use('/materias', materiaRouter)

app.listen(3000, async ()=> {
    console.log('la aplicación inició correctamente en el puerto 3000: http://localhost:3000')
    try{
        await db.sequelize.authenticate()
        await db.sequelize.sync({force:true}) //SOLO PARA DESARROLLO
        const carreras = await db.Carrera.bulkCreate(carreraData) //Crea datos de carreras al iniciar
        // const materias = await db.Materia.bulkCreate(materiaData)
        // const cursos = await db.Materia.bulkCreate(cursoData)
        // const profesores = await db.Materia.bulkCreate(profesorData)
    } catch (e){
        console.error(e)
    }
})
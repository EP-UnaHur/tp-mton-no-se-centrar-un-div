const express = require('express')
const carreraData = require('../data/carreraData.json')
const profesorData = require('../data/profesorData.json')

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

app.listen(3000, async ()=> {
    console.log('la aplicación inició correctamente en el puerto 3000: http://localhost:3000')
    try{
        await db.sequelize.authenticate()
        
                //SOLO PARA DESARROLLO!!. Elimina todas las tablas junto a sus datos
        await db.sequelize.sync({force:true})
                
                //Crea datos iniciales de carreras y profesores al iniciar la API
        const carreras = await db.Carrera.bulkCreate(carreraData)
        const profesores = await db.Profesor.bulkCreate(profesorData)

    } catch (e){
        console.error(e)
    }
})
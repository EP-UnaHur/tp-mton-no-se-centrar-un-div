const express = require('express')
const db = require('./db/models')
const indexRouter = require('./routes/index')
const carreraRouter = require('./routes/carrerasRoutes')

const app = express()
app.use(express.json())
app.use('/', indexRouter)
app.use('/carreras', carreraRouter)

app.listen(3000, async ()=> {
    console.log('la aplicación inició correctamente en el puerto 3000: http://localhost:3000')
    try{
        await db.sequelize.authenticate()
    } catch (e){
        console.error(e)
    }
})
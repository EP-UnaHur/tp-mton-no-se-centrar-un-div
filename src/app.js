const express = require('express')
const db = require('../')

const app = express()
app.use(express.json())

app.listen(3000, async => {
    console.log('la aplicación inició correctamente en el puert0 3000')
    try{
        await.db.authenticate()
    } catch (e){

    }
})
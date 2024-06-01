const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send('bueno si')
})

module.exports = router
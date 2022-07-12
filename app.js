const express = require('express')

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

const carroRota = require('./rotas/carros_rota.js');
app.use('/api/carros', carroRota);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
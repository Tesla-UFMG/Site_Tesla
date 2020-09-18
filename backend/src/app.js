const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const router = express.Router()

//Conecta com Db Mongo
mongoose.connect('mongodb+srv://bruno:T3sla.lindos@site.j6bsq.gcp.mongodb.net/test')

//Carrega models
const Usuario = require('./models/usuario')
const Patrocinadores = require('./models/patrocinadores')

//Carrega as rotas
const indexRoute = require('./routes/index-route')
const usuarioRoute = require('./routes/usuario-route')
const patrocinadoresRoute = require('./routes/patrocinadores-route')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', indexRoute)
app.use('/patrocinadores', patrocinadoresRoute)
app.use('/usuario', usuarioRoute)


module.exports = app
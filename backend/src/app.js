const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const router = express.Router()

//Conecta com Db Mongo
mongoose.connect('mongodb+srv://bruno:T3sla.lindos@site.j6bsq.gcp.mongodb.net/test')

//Carrega models
const Patrocinadores = require('./models/patrocinadores')
const Membro = require('./models/membro')
//Carrega as rotas
const indexRoute = require('./routes/index-route')
const patrocinadoresRoute = require('./routes/patrocinadores-route')



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))



app.use('/', indexRoute)
app.use('/patrocinadores', patrocinadoresRoute)


module.exports = app
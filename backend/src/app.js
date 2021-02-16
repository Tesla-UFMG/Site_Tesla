const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const router = express.Router()

//Conecta com Db Mongo
mongoose.connect('mongodb+srv://bruno:T3sla.lindos@site.j6bsq.gcp.mongodb.net/test')

//Carrega models
const User = require('./models/user')
const Sponsors = require('./models/sponsors')
const Membro = require('./models/membro')
const Product = require('./models/product')
const Order = require('./models/order')

//Carrega as rotas
const indexRoute = require('./routes/index-route')
const userRoute = require('./routes/user-route')
const sponsorsRoute = require('./routes/sponsors-route')
const membroRoute = require('./routes/membro-route')
const productRoute = require('./routes/product-route')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', indexRoute)
app.use('/patrocinadores', sponsorsRoute)
app.use('/usuario', userRoute)
app.use('/membros',membroRoute)
app.use('/produtos',productRoute)


module.exports = app
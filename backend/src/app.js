const dotenv = require('dotenv')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config')


const app = express()
const router = express.Router()

dotenv.config()

//Conecta com Db Mongo
mongoose.connect(config.connectionString)

//Carrega models
const User = require('./models/user')
const Sponsors = require('./models/sponsors')
const Membro = require('./models/membro')
const Product = require('./models/product')
const Order = require('./models/order')
const Upload = require('./models/upload')

//Carrega as rotas
const indexRoute = require('./routes/index-route')
const userRoute = require('./routes/user-route')
const sponsorsRoute = require('./routes/sponsors-route')
const membroRoute = require('./routes/membro-route')
const productRoute = require('./routes/product-route')
const orderRoute = require('./routes/order-route')
//const uploadRoute = require('./routes/upload-route')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(morgan("dev"))


app.use('/', indexRoute)
app.use('/patrocinadores', sponsorsRoute)
app.use('/usuarios', userRoute)
app.use('/membros',membroRoute)
app.use('/produtos',productRoute)
app.use('/pedidos',orderRoute)
app.use(require("./routes/upload-route"))


module.exports = app
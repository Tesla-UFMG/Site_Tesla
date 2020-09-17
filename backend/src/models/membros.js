const mongoose = require('mongoose')
const Schema = mongoose.Schema

const membrosSchema = new Schema({
    nome: {
        type: String,
        require: true,
        trim: true              
    },
    ano: {
        type: Number,
        riquire: true,
    },
    subsistema: {
        type: String,
        riquire: true,
        trim: true,
    },
    linkedin: {
        type: String,
        trim: true
    },
    img: {
        type: String,
        trim: true
    },
    


})

/*
    "nome" : "nome",
    "ano" : "2020",
    "subsistema: "xxxxxxxx",
    "Linkedin" : "http://xxxx..xxx.x",
    "img" : "rota"
*/

const Membros = mongoose.model('Membros',membrosSchema)
module.exports = Membros
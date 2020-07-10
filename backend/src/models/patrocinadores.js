const mongoose = require('mongoose')
const Schema = mongoose.Schema

const patrocinadoresSchema = new Schema({
    nome: {
        type: String,
        require: true,
        trim: true              
    },
    descricao: {
        type: String,
        required: true,
        trim: true
    },
    logo: {
        type: String,
        required: true,
        trim: true
    },
    link: {
        type: String,
        trim: true
    },
    facebook: {
        type: String,
        trim: true
    },
    instagram: {
        type: String,
        trim: true
    }



})

/*
    "nome" : "nome",
    "descricao" : "xpto",
    "logo: "caminho",
    "link" : "http://google.com.br",
    "facebook" : "facebook.com/bnmachado"
    "instagram" : "https://instagram.com.br/bnmachado"
        "
*/

const Patrocinadores = mongoose.model('Patrocinadores',patrocinadoresSchema)
module.exports = Patrocinadores
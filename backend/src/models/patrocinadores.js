const mongoose = require('mongoose')
const Schema = mongoose.Schema

const patrocinadoresSchema = new Schema({
    nome: {
        type: String,
        trim: true              
    },
    descricao: {
        type: String,
        trim: true
    },
    logo: {
        type: String,
        required: [true, "O Patrocinador precisa de uma logo para servir de link!"],
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
    },
    ativo: {
        type: Boolean,
        default: false,
    }



})

/*
    {
    "nome" : "nome",
    "descricao" : "xpto",
    "logo": "caminho",
    "link" : "http://google.com.br",
    "facebook" : "facebook.com/bnmachado",
    "instagram" : "https://instagram.com.br/bnmachado"
}
*/


module.exports = mongoose.model('Patrocinadores',patrocinadoresSchema)
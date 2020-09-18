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
    },
    logo: {
        type: String,
        required: [true, "O Patrocinador precisa de uma logo para servir de link!"],
        trim: true
    }



})

/*
    {
    "nome" : "nome",
    "descricao" : "xpto",
    "link" : "http://google.com.br",
    "facebook" : "facebook.com/bnmachado",
    "instagram" : "https://instagram.com.br/bnmachado",
    "logo": "caminho"
}
*/


module.exports = mongoose.model('Patrocinadores',patrocinadoresSchema)
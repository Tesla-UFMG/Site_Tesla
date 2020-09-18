const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuarioSchema = new Schema({
    nome: {
        type: String,
        trim: true              
    },
    email: {
        type: String,
    },
    senha: {
        type: String,
        trim: true
    },
})

/*
    "nome" : "nome",
    "email" : "bnmachado10@gmail.com",
    "senha: "778452"
*/

const Usuario = mongoose.model('Usuario',usuarioSchema)
module.exports = Usuario
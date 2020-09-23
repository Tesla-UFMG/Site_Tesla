const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuarioSchema = new Schema({
    nome: {
        type: String,
        trim: true              
    },
    sobrenome: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        unique: [true, "O email já está sendo usado"]

    },
    senha: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    }

})

/*
    "nome" : "nome",
    "email" : "bnmachado10@gmail.com",
    "senha: "778452"
*/

const Usuario = mongoose.model('Usuario',usuarioSchema)
module.exports = Usuario
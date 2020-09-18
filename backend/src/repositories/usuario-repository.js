const mongoose = require('mongoose')
const Usuario = mongoose.model('Usuario')

exports.get = async() => {
    const res = await Usuario.find({})
    return res
}

exports.create = async(data) => {
    let usuario = new Usuario(data);
    await usuario.save()
}

exports.update = async(id , data) => {
    await Usuario
        .findByIdAndUpdate(id, {
            $set: {
                nome: data.nome,
                email: data.email,
                senha: data.senha,
            }
        })
}

exports.delete = async(id) => {
    await Usuario
    .findByIdAndRemove(id)
}
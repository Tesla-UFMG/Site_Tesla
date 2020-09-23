const mongoose = require('mongoose')
const Membros = mongoose.model('Membro')


exports.get = async() => {
    const res = await Membros.find({})
    return res
}

exports.create = async(data) => {
    let membro = new Membros(data);
    await membro.save()
}

exports.update = async(id , data) => {
    await Membros
        .findByIdAndUpdate(id, {
            $set: {
                nome: data.nome,
                email: data.email,
                senha: data.senha,
            }
        })
}

exports.delete = async(id) => {
    await Membros
    .findByIdAndRemove(id)
}
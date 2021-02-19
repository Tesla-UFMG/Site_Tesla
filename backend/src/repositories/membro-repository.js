const mongoose = require('mongoose')
const Membros = mongoose.model('Membro')


exports.get = async() => {
    const res = await Membros.find({})
    return res
}

exports.getById = async(id) => {
    const res = await Membros.findById(id)
    return res
}
 exports.getByYear = async(y) => {
     const res = await Membros.find({year : y })
     return res
 }

exports.getByUserId = async(id) => {
    const res = await Membros.find({user: id})
    return res
}

exports.getBySub = async(sub) => {
    const res = await Membros.find({subsistema : sub})
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
                subsistema: data.subsistema,
                linkedin: data.linkedin,
                img: data.img
            }
        })
}

exports.delete = async(id) => {
    await Membros
    .findByIdAndRemove(id)
}
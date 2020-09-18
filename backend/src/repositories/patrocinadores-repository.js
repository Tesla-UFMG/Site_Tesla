const mongoose = require('mongoose');
const Patrocinadores = mongoose.model("Patrocinadores")

exports.get = async() => {
    const res = await Patrocinadores.find({})
    return res
}

exports.getById = async(id) => {
    const res = await Patrocinadores.findById(id)
    return res
}

exports.create = async(data) => {
    let patrocinador = new Patrocinadores(data);
    await patrocinador.save()
}

exports.update = async(id , data) => {
    await Patrocinadores
        .findByIdAndUpdate(id, {
            $set: {
                nome: data.nome,
                descricao: data.descricao,
                logo: data.logo,
                link: data.link,
                facebook: data.facebook,
                instagram: data.instagram,
                ativo: data.ativo
            }
        })
}

exports.delete = async(id) => {
    await Patrocinadores
    .findByIdAndRemove(id)
}
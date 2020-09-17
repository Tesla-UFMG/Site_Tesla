const mongoose = require('mongoose');
const Patrocinadores = mongoose.model("Patrocinadores")

exports.get = () => {
    return Patrocinadores
        .find({})
}

exports.getById = (id) => {
    return Patrocinadores
        .findById(id)
}

exports.create = (data) => {
    let patrocinador = new Patrocinadores(data);
    return patrocinador.save()
}

exports.update = (id , data) => {
    return Patrocinadores
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

exports.delete = (id) => {
    return Patrocinadores
    .findByIdAndRemove(id)
}
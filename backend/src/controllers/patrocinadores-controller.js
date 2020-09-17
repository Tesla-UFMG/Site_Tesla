const mongoose = require('mongoose')
const Patrocinadores = mongoose.model("Patrocinadores")

exports.post = (req,res,next) => {
    var patrocinador = new Patrocinadores(req.body);
    patrocinador
        .save()
        .then(x => {
            res.status(201).send({
                message: 'Produto cadastrado com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao cadastrar o produto', data: e
            })
        })
    res.status(201).send(req.body)
}

exports.put = (req,res,next) => {
    const id = req.params.id
    res.status(201).send({
        id: id,
        item: req.body
    })
}

exports.delete = (req,res,next) => {
    res.status(200).send(req.body)
}
const mongoose = require('mongoose');
const ValidationContract = require('../validators/validation-contract');
const Patrocinadores = mongoose.model("Patrocinadores")

exports.get = (req,res,next) =>{
    Patrocinadores
        .find({})
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e)
    })
}

exports.getById = (req,res,next) =>{
    Patrocinadores
        .findById(req.params.id)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e)
    })
}
/*
exports.getForAdmin = (req,res,next) => {
    Patrocinadores
        .find({} , 'nome ativo')
}*/

exports.post = (req,res,next) => {

    let contract = new ValidationContract();
    contract.hasMinLen(req.body.nome,3, 'O nome deve ter pelo menos 3 caracteres')
    contract.hasMinLen(req.body.descricao,20, 'A descrição não pode ter menos de 20 caracteres')
    contract.isRequired(req.body.logo, 'O patrocinador precisa ter uma logo cadastrada!')

    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end()
        return
    }
    var patrocinador = new Patrocinadores(req.body);
    patrocinador
        .save()
        .then(x => {
            res.status(201).send({
                message: 'Patrocinador cadastrado com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao cadastrar o patrocinador', data: e
            })
        })
}

exports.put = (req,res,next) => {
    
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.nome,3, 'O nome deve ter pelo menos 3 caracteres')
    contract.hasMinLen(req.body.descricao,20, 'A descrição não pode ter menos de 20 caracteres')
    contract.isRequired(req.body.logo, 'O patrocinador precisa ter uma logo cadastrada!')

    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end()
        return
    }

    Patrocinadores
        .findByIdAndUpdate(req.params.id, {
            $set: {
                nome: req.body.nome,
                descricao: req.body.descricao,
                logo: req.body.logo,
                link: req.body.link,
                facebook: req.body.facebook,
                instagram: req.body.instagram,
                ativo: req.body.ativo
            }
        }).then(x => {
            res.status(200).send({
                message: 'Patrocinador atualizado com sucesso!'
            })
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao atualizar o patrocinador!',
                data: e
            })
    })
}

exports.delete = (req,res,next) => {
    Patrocinadores
        .findByIdAndRemove(req.body.id,).then(x => {
            res.status(200).send({
                message: 'Patrocinador removido com sucesso!'
            })
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao remover o Patrocinador!',
                data: e
            })
    })
}
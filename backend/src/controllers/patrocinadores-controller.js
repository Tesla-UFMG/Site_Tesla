const mongoose = require('mongoose');
const Patrocinadores = mongoose.model("Patrocinadores")

const ValidationContract = require('../validators/validation-contract');
const repPatrocinador = require('../repositories/patrocinadores-repository')

exports.get = (req,res,next) =>{
    repPatrocinador
        .get()
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e)
    })
}

exports.getById = (req,res,next) =>{
        repPatrocinador
        .getById(req.params.id)
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
    repPatrocinador
        .create(req.body)
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

        repPatrocinador
        .update(req.params.id,req.body)
        .then(x => {
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
   
        repPatrocinador
        .delete(req.params.id)
        .then(x => {
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
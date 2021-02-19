//const ValidationContract = require('../validators/validation-contract');
const repository = require('../repositories/user-repository')
const contract = require('../validators/validation-crud')
const mongoose = require('mongoose')
const User = mongoose.model('User')

exports.get = async(req,res,next) => {
    try{
        let data = await repository.get()
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar requisição'
        })
    }
}

exports.post = async(req,res,next) => {   
    const user = {...req.body}
    try{
    
        contract.existsOrError(user.name, 'Nome nao informado!')
        contract.existsOrError(user.lastName, 'Sobrenome não informado!')
        contract.existsOrError(user.email, 'Email nao informado!')
        contract.existsOrError(user.password, 'Senha não informada!')
        contract.hasMinLen(user.password,8, 'Senhas precisam ter no mínimo 8 caracteres!')
        contract.equalsOrError(user.password, user.confirmationPassword, 'Senhas nao conferem')
        contract.equalsOrError(user.email,user.confirmationEmail,'Email nao informado')
        /*if(await User.findOne({ email })){
            return res.status(401).send({ error: 'o email informado já existe'})
        }*/
        await repository.create(req.body)
        //emailService.send(req.body.email, 'Bem Vindo Ao Tesla' , global.EMAIL_TMPL.replace('{0}', req.body.name))
        res.status(201).send({
            message: 'Usuario cadastrado com sucesso!'
        })
    } catch(e) {
        res.status(500).send(e)
    }
}

//para atualizar a senha o campo chengePassword deve ser passado
exports.put = async(req,res,next) => {
    const user = {...req.body}
    try{
        contract.existsOrError(user.name, 'Nome nao informado!')
        contract.existsOrError(user.lastName, 'Sobrenome não informado!')
        contract.existsOrError(user.email, 'Email nao informado!')
        contract.existsOrError(user.password, 'Senha não informada!')
        contract.hasMinLen(user.password,8, 'Senhas precisam ter no mínimo 8 caracteres!')
        contract.equalsOrError(user.password, user.confirmationPassword, 'Senhas nao conferem')
        contract.equalsOrError(user.email,user.confirmationEmail,'Email nao informado')
        await repository.update(req.params.id,req.body)
        res.status(200).send({
                message: 'Usuario atualizado com sucesso!'
            })
        
    } catch(e){
        res.status(500).send(e)
    }
}   

exports.delete = async(req,res,next) => {
    try{
        await repository.delete(req.params.id)
        res.status(200).send({
            message: 'Usuario removido com sucesso!'
        })
    } catch(e) {
        res.status(500).send({
            message: 'Falha ao excluir usuario'
        })
    }
}
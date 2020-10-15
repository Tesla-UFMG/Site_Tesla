//const ValidationContract = require('../validators/validation-contract');
const repository = require('../repositories/usuario-repository')
const contract = require('../validators/validation-crud')
//const md5 = require('md5') // lembrar de criptografar depois

//const emailService = require('../services/email-service')

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
        contract.existsOrError(user.nome, 'Nome nao informado!')
        contract.existsOrError(user.sobrenome, 'Sobrenome não informado!')
        contract.existsOrError(user.email, 'Email nao informado!')
        contract.existsOrError(user.senha, 'Senha não informada!')
        contract.hasMinLen(user.senha,8, 'Senhas precisam ter no mínimo 8 caracteres!')
        contract.equalsOrError(user.senha, user.confirmacaoSenha, 'Senhas nao conferem')
        contract.equalsOrError(user.email,user.confirmacaoEmail,'Email nao informado')

        
        await repository.create(req.body)
        //emailService.send(req.body.email, 'Bem Vindo Ao Tesla' , global.EMAIL_TMPL.replace('{0}', req.body.name))
        res.status(201).send({
            message: 'Usuario cadastrado com sucesso!'
        })
    } catch(e) {
        res.status(500).send({
            message: 'Falha ao cadastrar usuario'
        })
    }
}

exports.put = async(req,res,next) => {

    let contract = new ValidationContract();
    contract.hasMinLen(req.body.nome, 3 , "O nome deve ter pelo menos 3 caracteres")
    contract.hasMinLen(req.body.senha, 'A senha deve ter pelo menos 6 caracteres!')

    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end()
        return
    }
    try{
        await repository.update(req.params.id,req.body)
            res.status(200).send({
                message: 'Usuario atualizado com sucesso!'
            })
    } catch(e){
        res.status(500).send({
            message: 'Falha ao atualizar usuario'
        })
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
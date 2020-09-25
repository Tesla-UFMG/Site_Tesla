const mongoose = require('mongoose');
const Membro = mongoose.model("Membro")
const repository = require('../repositories/membro-repository')
const contract = require('../validators/validation-crud')

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

exports.getBySubOrId = async(req,res,next) => {
    try{
        console.log('getbysuborid')
        let data
        if(contract.isNumber(req.params.param[0])){
            console.log('isnumber')
            data = await repository.getById(req.params.param)
            contract.existsOrError(data,'Registro nao encontrado!')
            res.status(200).send(data)
        }else{
            console.log('nao e number')
            data = await repository.getBySub(req.params.param)
            contract.existsOrError(data,'Registro nao encontrado!')
            res.status(200).send(data)
        }
        
    }catch (e){
        res.status(500).send({
            message: e
        })
    }
}

exports.getById = async(req,res,next) =>{
    try{
        let data = await repository.getById(req.params.id)
        res.status(200).send(data)
    }catch (e){
        console.log(e)
        console.log('getByid chamado')
        res.status(500).send({
            message: 'Falha ao processar requisição'
        })
    }
}


exports.post = async(req,res,next) => {   
    const membro = {...req.body}
    try{
        contract.existsOrError(membro.nome, 'Nome nao informado!')
        contract.hasMinLen(membro.nome, 'Nome precisa ter ao menos 3 caracteres')
        contract.existsOrError(membro.subsistema, 'subsistema não informado!')
        contract.existsOrError(membro.img, 'Imagem não carregada!')
        
        await repository.create(req.body)
        //emailService.send(req.body.email, 'Bem Vindo Ao Tesla' , global.EMAIL_TMPL.replace('{0}', req.body.name))
        res.status(201).send({
            message: 'Membro cadastrado com sucesso!'
        })
    } catch(e) {
        console.log(e)
        res.status(500).send({
            message: 'Falha ao cadastrar membro'
        })
    }
}

exports.put = async(req,res,next) => {

    let contract = new ValidationContract();
    contract.hasMinLen(req.body.nome, 3 , "O nome deve ter pelo menos 3 caracteres")

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
        
    } catch(e) {

    }
}
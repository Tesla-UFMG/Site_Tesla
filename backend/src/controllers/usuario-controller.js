const ValidationContract = require('../validators/validation-contract');
const repository = require('../repositories/usuario-repository')

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

    let contract = new ValidationContract();
    contract.hasMinLen(req.body.nome, 3 , "O nome deve ter pelo menos 3 caracteres")
    contract.hasMinLen(req.body.senha,6, 'A senha deve ter pelo menos 6 caracteres')

   if(!contract.isValid()){
        res.status(400).send(contract.errors()).end()
        return
    }
    
    try{
        await repository.create(req.body)
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
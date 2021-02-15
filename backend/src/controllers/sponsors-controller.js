const ValidationContract = require('../validators/validation-contract')
const repository = require('../repositories/sponsors-repository')



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

exports.getById = async(req,res,next) =>{
    try{
        let data = await repository.getById(req.params.id)
        res.status(200).send(data)
    }catch (e){
        res.status(500).send({
            message: 'Falha ao processar requisição'
        })
    }
}

exports.post = async(req,res,next) => {

    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name,3, 'O nome deve ter pelo menos 3 caracteres')
    contract.hasMinLen(req.body.description,20, 'A descrição não pode ter menos de 20 caracteres')
    contract.isRequired(req.body.logo, 'O patrocinador precisa ter uma logo cadastrada!')

    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end()
        return
    }
    
    try{

        await repository.create(req.body)
        res.status(201).send({
            message: 'Patrocinador cadastrado com sucesso!'
        })
    } catch(e) {
        console.log(e)
        res.status(500).send({
            message: 'Falha ao cadastrar patrocinador'
        })
    }
}

exports.put = async(req,res,next) => {
    console.log(req.body)
    let contract = new ValidationContract();
    
    contract.hasMinLen(req.body.name,3, 'O nome deve ter pelo menos 3 caracteres')
    contract.hasMinLen(req.body.description,20, 'A descrição não pode ter menos de 20 caracteres')
    contract.isRequired(req.body.logo, 'O patrocinador precisa ter uma logo cadastrada!')

    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end()
        return
    }
    try{
        await repository.update(req.params.id,req.body)
            res.status(200).send({
                message: 'Patrocinador atualizado com sucesso!'
            })
    } catch(e){
        res.status(500).send({
            message: 'Falha ao atualizar patrocinador'
        })
    }
}   

exports.delete = async(req,res,next) => {
    try{
        await repository.delete(req.params.id)
        res.status(200).send({
            message: 'Patrocinador removido com sucesso!'
        })
    } catch(e) {
        res.status(500).send({
            message: 'Falha ao excluir patrocinador'
        })
    }
}

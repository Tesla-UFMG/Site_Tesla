const ValidationContract = require('../validators/validation-contract')
const repository = require('../repositories/patrocinadores-repository')
const azure = require('azure-storage')


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
    contract.hasMinLen(req.body.nome,3, 'O nome deve ter pelo menos 3 caracteres')
    contract.hasMinLen(req.body.descricao,20, 'A descrição não pode ter menos de 20 caracteres')
    contract.isRequired(req.body.logo, 'O patrocinador precisa ter uma logo cadastrada!')

    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end()
        return
    }
    try{
        const blobSvc = azure.createBlobService(config.userImagesBlobConnectionString)
        let fileName = req.body.nome + '.jpg'
        let rawdata = req.body.img
        let matches = rawdata.match(/^data:[A-Za-z-+\/]+);base64,(.+)$/)
        let type = matches[1]
        let buffer = new Buffer(matches[2], 'base64')

        //Salva a imagem
        await blobSvc.createBlockBlobFromText('patrocinadores-img',fileName,buffer, {
            contentType: type
        }, function (error, result, response) {
            if(erro){
                filename = 'default-patrocinador.png'
            }
        })
        await repository.create({
            nome: req.body.nome,
            descricao: req.body.descricao,
            link: req.body.link,
            facebook: req.body.facebook,
            instagram: req.body.instagram,
            ativo: req.body.ativo,
            logo: 'https://teslateste.blob.core.windows.net/patrocinadores-img/' + fileName
        })
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

    let contract = new ValidationContract();
    contract.hasMinLen(req.body.nome,3, 'O nome deve ter pelo menos 3 caracteres')
    contract.hasMinLen(req.body.descricao,20, 'A descrição não pode ter menos de 20 caracteres')
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

/*
exports.getForAdmin = (req,res,next) => {
    Patrocinadores
        .find({} , 'nome ativo')
}*/
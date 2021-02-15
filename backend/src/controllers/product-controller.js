const mongoose = require('mongoose')
const Product = mongoose.model('Product')
const ValidationContract = require('../validators/validation-contract')
const repository = require('../repositories/product-repository')

exports.get = async(req,res,next) => {
  try{
    let data = await repository.get()
    res.status(200).send(data)
  }catch (e){
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    })
  }
}

exports.getBySlug = (req,res,next) => {
  try{
    let data = repository.getBySlug(req.params.slug)
    res.status(200).send(data)
  }catch(e => {
      res.status(500).send({
        message: "Falha ao buscar produtos"
      })
    })
}

exports.getByTag = (req,res,next) => {
  repository.getByTag(req.params.tag)
    .then(data =>{
      res.status(200).send(data)
    }).catch(e => {
      res.status(400).send({
        message: "Falha ao buscar produtos",
        data: e
      })
    })
}


exports.post = (req,res,next) => {

  let contract = new ValidationContract()
  contract.hasMinLen(req.body.name,3,'O Nome deve ter pelo menos 3 caracteres')

  if(!contract.isValid()){
    res.status(400).send(contract.errors()).end()
    return
  }
  repository.create(req.body)
  .then(x => {
    res.status(201).send({
      message: 'Produto cadastrado com sucesso!'
    })
  }).catch(e => {
    res.status(400).send({
      message: 'Falha ao cadastrar o produto',
      data: e
    })
  })
}

//mudar depois
exports.put = (req,res,next) => {
  repository.update(req.params.id,req.body)
    .then(x => {
      res.status(200).send({
        message: 'Produto atualizado com sucesso!'
      })
    }).catch(e => {
      res.status(400).send({
        message: 'Falha ao cadastrar produto',
        data: e
      })   
    })
}

exports.delete = (req,res,next) => {
  repository.delete(req.params.id,req.body)
    .then(x => {
    res.status(200).send({
      message: 'Produto removido com sucesso!'
    })
  }).catch(e => {
    res.status(400).send({
      message: 'Falha ao remover produto',
      data: e
    })   
  })
}
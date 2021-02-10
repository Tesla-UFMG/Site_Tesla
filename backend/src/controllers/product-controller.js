const mongoose = require('mongoose')
const Product = mongoose.model('Product')

exports.get = (req,res,next) => {
  Product.find({}, 'name slug sellPrice ').then(data =>{
    res.status(200).send(data)
  }).catch(e => {
    res.status(400).send({
      message: "Falha ao buscar produtos",
      data: e
    })
  })
}

exports.getBySlug = (req,res,next) => {
  Product.findOne({
    slug: req.params.slug,
    
  }, 'name description slug sellPrice tags ')
    .then(data =>{
      res.status(200).send(data)
    }).catch(e => {
      res.status(400).send({
        message: "Falha ao buscar produtos",
        data: e
      })
    })
}

exports.getByTag = (req,res,next) => {
  Product.find({
    tags: req.params.tag
  })
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
  let product = new Product(req.body)
  product.save().then(x => {
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
  Product
    .findByIdAndUpdate(req.params.id,{
      $set: {
        name: req.body.name,
        description: req.body.description,
        slug: req.body.slug,
        sellPrice: req.body.sellPrice
      }
  }).then(x => {
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
  Product
    .findOneAndRemove(req.body.id).then(x => {
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
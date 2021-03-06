const repository = require('../repositories/order-repository')
const guid = require('guid')


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

//guid aleatorio
exports.post = async(req,res,next) => {
  
  try{
    await repository.create({
      user: req.body.user,
      number: guid.raw().substring(0,6),
      items: req.body.items
    })
    res.status(201).send({
      message: 'Pedido cadastrado com sucesso'
    })
  } catch(e) {
    res.status(500).send({
      message: 'Falha ao cadastrar pedido',
      data: e
    })
  }
  
  


}
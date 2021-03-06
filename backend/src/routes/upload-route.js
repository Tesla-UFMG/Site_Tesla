const router = require('express').Router()
const multer = require('multer')
const multerConfig = require('../config/multer')

const Upload = require('../models/upload')

router.get('/uploads', async(req,res) => {
  try{
    let data = await Upload.find({})
    res.status(200).send(data)
  } catch (e) {
    res.status(500).send({
        message: 'Falha ao processar requisição'
    })
  }
 })

router.post("/uploads/:paste", multer(multerConfig).single("file"), async (req, res) => {
  try{
    const { originalname: name, size, key, paste, location: url = '' } = req.file
    const post = await Upload.create({
      name,
      paste,
      size,
      key,
      url
    })
    res.status(201).send({
    message: 'Upload efetuado com sucesso!'
    })
  } catch(e) {
    res.status(500).send({
      message: 'Falha ao efetuar upload!'
    })
  }  
})

router.delete('/uploads/:id' , async(req,res) => {
  try{
    const post = await Upload.findById(req.params.id)
    await post.remove()
    return res.status(200).send({
      message: 'Upload deletado com sucesso'
    })
  }catch(e) {
    res.status(500).send({
      message: 'Falha ao deletar upload'
    })
  }
  
})

module.exports = router
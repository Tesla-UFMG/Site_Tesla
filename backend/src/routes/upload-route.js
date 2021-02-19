const router = require('express').Router()
const multer = require('multer')
const multerConfig = require('../config/multer')

const Upload = require('../models/upload')

router.get('/uploads', async(req,res) => {
  const uploads =await Upload.find({})

  return res.json(uploads)
})

router.post("/uploads", multer(multerConfig).single("file"), async (req,res) => {
  const { originalname: name, size, key, location: url = '' } = req.file

  const post = await Upload.create({
    name,
    size,
    key,
    url
  })
  return res.json(post)
})

router.delete('/uploads/:id' , async(req,res) => {
  const post = await Upload.findById(req.params.id)
  await post.remove()
  return res.send()
})

module.exports = router
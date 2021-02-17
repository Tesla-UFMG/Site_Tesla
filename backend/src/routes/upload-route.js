const router = require('express').Router()
const multer = require('multer')
const multerConfig = require('../config/multer')

const Upload = require('../models/upload')

router.post("/uploads", multer(multerConfig).single("file"), async (req,res) => {
  const { originalname: name, size, key, url = '' } = req.file

  const post = await Upload.create({
    name,
    size,
    key,
    url
  })
  return res.json(post)
})


module.exports = router
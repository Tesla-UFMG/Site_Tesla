const express = require('express')
const router = express.Router()

//Carrega controller
const controller = require('../controllers/patrocinadores-controller')

router.post('/', controller.post)
router.put('/:id', controller.put)
router.delete('/', controller.delete)

module.exports = router
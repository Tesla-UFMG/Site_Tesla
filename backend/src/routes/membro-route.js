const express = require('express')
const router = express.Router()

//Carrega controller
const controller = require('../controllers/membros-controller')

router.get('/', controller.get)
router.post('/',controller.post)
router.put('/:id',controller.put)
router.delete('/:id',controller.delete)

module.exports = router
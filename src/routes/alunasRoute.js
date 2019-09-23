var express = require('express')
var router = express.Router()
var controller = require('../controllers/alunasController')

router.get('/', controller.get)
router.get('/:id', controller.getById)
router.post('/:id/:hobbie', controller.post)

module.exports = router

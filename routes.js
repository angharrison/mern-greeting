const express = require('express')
const router = express.Router()
const controller = require('./controller.js')


router.post('/create', controller.create)

//read
router.get('/', controller.index)

//render form to create a new 
router.get('/new', controller.new)

//update
router.put('/:id', controller.update)

module.exports = router

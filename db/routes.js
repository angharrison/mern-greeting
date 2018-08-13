const express = require('express')
const router = express.Router()
const controller = require('./controller.js')

//Create a new letter
router.get('/new', controller.create)

//read
router.get('/', controller.index)

//render form to create a new card, gives us a form
router.get('/new', controller.new)

//update
router.put('/:id', controller.update)

module.exports = router

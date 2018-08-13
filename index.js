const express = require('express')
const parser = require('body-parser')
const mongoose = require('./db/seeds.js')
const cors = require('cors')

const app = express()

app.use(express.static('client/build'))

app.set('port', process.env.PORT || 3003)
app.use(parser.json())
app.use(cors())

app.get('/api/translations', (req, res) => {
  Translation.find()
    .then((translations) => {
      res.json(translations)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.post('/api/translations', (req, res) => {
  Translation.create(req.body)
    .then((translation) => {
      res.json(translation)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.get('/api/translations/:id', (req, res) => {
  Translation.findById(req.params.id)
    .then((translation) => {
      res.json(translation)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})

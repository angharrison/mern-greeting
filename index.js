const express = require('express')
const parser = require('body-parser')
const mongoose = require('./db/seeds.js')
const cors = require('cors')
// const GreetingCard = mongoose.model('GreetingCard')

const app = express()

app.use(express.static('client/build'))

app.set('port', process.env.PORT || 3003)
app.use(parser.json())
app.use(cors())

app.use(require('./routes.js'))

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})

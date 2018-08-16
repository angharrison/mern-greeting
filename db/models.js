const mongoose = require('./connection.js')
const Schema = mongoose.Schema

const InspirationQuote = new mongoose.Schema({
  author: String,
  quote: String
})


module.exports = mongoose.model("InspirationQuote", InspirationQuote)

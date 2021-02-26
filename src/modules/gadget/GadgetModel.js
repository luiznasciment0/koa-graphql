const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GadgetSchema = new Schema({
  name: String,
  releaseDate: Date,
  byCompany: String,
  price: Number,
})

module.exports = mongoose.model('Gadget', GadgetSchema)

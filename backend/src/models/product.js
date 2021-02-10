const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  name:{
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  slug: { //Camisa Longa = camisa-longa
    type: String,
    required: true,
    trim: true,
    index: true,
    unique: true

  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  sellPrice: {
    type: Number,
    required:true
  },
  purchasePrice: {
    type:Number
  },
  active: {
    type: Boolean,
    required: true,
    default: false
  },
  margin: {
    type: Number,
  },
  sales: {
    type: Number,
    default: 0
  },

  tags: [{
    type: String,
    required: true
  }]
})

const Product = mongoose.model('Product',productSchema)
module.exports = Product
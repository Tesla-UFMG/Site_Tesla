const mongoose = require('mongoose')
const Schema = mongoose.Schema


const uploadSchema = new Schema({
  name:{
    type: String
  },
  local: {
    type: String
  },
  size: {
    type: Number,
    required: true
  },
  key: {
    type: String
  },
  url: { 
    type: String,
  },
  createdAt: {
    type: Date,
    default:Date.now
  }
})


const Upload = mongoose.model('Upload',uploadSchema)
module.exports = Upload
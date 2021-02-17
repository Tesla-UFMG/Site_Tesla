const mongoose = require('mongoose')
const Schema = mongoose.Schema
const aws = require("aws-sdk");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const s3 = new aws.S3()



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

uploadSchema.pre('save',function() {
  if(!this.url){
    this.url = `${process.env.APP_URL}/files/${this.key}`
  }
})

uploadSchema.pre('remove', function() {
  if(process.env.STORAGE_TYPE === 's3'){
    return s3.deleteObject({
      Bucket: 'tesla-img',
      key: this.key,
    }).promise()
  } else {
    return promisify(fs.unlink)(
      path.resolve(__dirname, "..", "..", "tmp", "uploads", this.key)
    )
  }
})
const Upload = mongoose.model('Upload',uploadSchema)
module.exports = Upload
//module for operations in db

const mongoose = require('mongoose')
const schema = require()

exports.equalsOrError = (value, data, filter, msg) => {
  if(filter){
    value.find({filter: filter})
    if( value != data) throw msg
    
  }
}

exports.compare = (value,data) => {
  if(value.iaNaN()){
    return value === data
  }
}
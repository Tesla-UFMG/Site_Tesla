const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    number: {
        type: String,
        require: true             
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    createDate: {
      type:Date,
      required:true,
      default: Date.now
    },
    status: {
      type: String,
      required: true,
      enum: ['created','done','complete'],
      default: 'created'
    },
    items: [{
      quantity: {
        type: Number,
        required:true,
        default: 1
      },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      }
    }]
    
    
})

const Order = mongoose.model('Order',orderSchema)
module.exports = Order
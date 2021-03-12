const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gallerySchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true              
    },
    year: {
        type: Number,
        riquire: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.Now()
    },
    photos : [
      {
        img: {
          type: String,
          trim: true
        }
        
      }]
})

/*
    {
    "name" : "nome",
    "year" : "2020",
    "Linkedin" : "http://xxxx..xxx.x",
    "img" : "rota"
    }
    
*/

const Gallery = mongoose.model('Gallery',gallerySchema)
module.exports = Gallery
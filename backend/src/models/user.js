const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        trim: true              
    },
    lastName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        unique: [true, "O email já está sendo usado"]

    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    autor: {
        type: Boolean,
        defaut: false
    }
    

})

/*{
    "name" : "name",
    "email" : "bnmachado10@gmail.com",
    "password: "778452"
  }
    
*/

const User = mongoose.model('User',userSchema)
module.exports = User
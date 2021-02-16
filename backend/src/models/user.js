const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required:true,
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
    "lastName" : "machado",
    "email" : "bnmachado10@gmail.com",
    "confirmEmail": "bnmachado10@gmail.com"
    "password: "778452",
    "confirmPassword": "778452",


  }
    
*/

const User = mongoose.model('User',userSchema)
module.exports = User
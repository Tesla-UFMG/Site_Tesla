const mongoose = require('mongoose')
const User = mongoose.model('User')
const bcrypt = require('bcrypt-nodejs')

encryptPassword = password => {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password,salt)
}

exports.get = async() => {
    const res = await User.find({})
    return res
}

exports.create = async(data) => {
    
    data.password = encryptPassword(data.password)
    console.log(data)
    delete data.confirmPassword
    delete data.confirmEmail
    
    let user = new User(data);
    await user.save()
}

exports.update = async(id , data) => {
    await User
        .findByIdAndUpdate(id, {
            $set: {
                name: data.name,
                email: data.email,
                password: data.password,
            }
        })
}

exports.delete = async(id) => {
    await User
    .findByIdAndRemove(id)
}
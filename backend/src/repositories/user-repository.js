const mongoose = require('mongoose')
const User = mongoose.model('User')


exports.get = async() => {
    const res = await User.find({})
    return res
}

exports.create = async(data) => {
    let user = new User(data);
    await user.save()
}

exports.update = async(id , data) => {
    await User
        .findByIdAndUpdate(id, {
            $set: {
                nome: data.nome,
                email: data.email,
                senha: data.senha,
            }
        })
}

exports.delete = async(id) => {
    await User
    .findByIdAndRemove(id)
}
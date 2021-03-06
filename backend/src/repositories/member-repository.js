const mongoose = require('mongoose')
const Member = mongoose.model('Member')


exports.get = async() => {
    const res = await Member.find({})
    return res
}

exports.getById = async(id) => {
    const res = await Member.findById(id)
    return res
}
 exports.getByYear = async(y) => {
     year = parseInt(y)
    const res = await Member.aggregate([
        {$match: {"data.year":year}}
    ])
    console.log(res)
    return res
 } 

exports.getByUserId = async(id) => {
    const res = await Member.find({user: id})
    return res
}

exports.getBySub = async(sub) => {
    const res = await Member.aggregate([
        {$match: {"data.subsystem":sub}}
    ])
    return res
}

exports.create = async(data) => {
    check =  await Member.findOne({ name: data.name })
    if(check){
        throw("O membro ja esta cadastrado na base de dados")
    }else{
        let member = new Member(data);
        await member.save()
    }
    
}

exports.update = async(id , data) => {
    await Member
        .findByIdAndUpdate(id, {
            $set: {
                name: data.name,
                linkedin: data.linkedin,
                img: data.img
            }
        })
}

exports.delete = async(id) => {
    await Member
    .findByIdAndRemove(id)
}
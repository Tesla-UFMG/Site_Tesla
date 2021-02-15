const mongoose = require('mongoose');
const Sponsors = mongoose.model("Sponsors")

exports.get = async() => {
    const res = await Sponsors.find({})
    return res
}

exports.getById = async(id) => {
    const res = await Sponsors.findById(id)
    return res
}


exports.create = async(data) => {
    let sponsors = new Sponsors(data);
    await sponsors.save()
}

exports.update = async(id , data) => {
    await Sponsors
        .findByIdAndUpdate(id, {
            $set: {
                name: data.name,
                description: data.description,
                logo: data.logo,
                link: data.link,
                facebook: data.facebook,
                instagram: data.instagram,
                active: data.active
            }
        })
}

exports.delete = async(id) => {
    await Sponsors
    .findByIdAndRemove(id)
}
const mongoose = require('mongoose');
const Membro = mongoose.model("Membro")

exports.get = async(req,res,next) => {
    try{
        let data = await repository.get()
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar requisição'
        })
    }
}

exports.getById = async(req,res,next) => {
    try{

    } catch(e) {

    }
}

exports.getForAdmin = async(req,res,next) => {
    try{

    } catch(e) {

    }
}

exports.getBySub = async(req,res,next) => {
    try{

    } catch(e) {

    }
}

exports.getByYear = async(req,res,next) => {
    try{

    } catch(e) {

    }
}

exports.post = async(req,res,next) => {
    try{

    } catch(e) {

    }
}

exports.put = async(req,res,next) => {
    try{

    } catch(e) {

    }
}

exports.delete = async(req,res,next) => {
    try{

    } catch(e) {

    }
}
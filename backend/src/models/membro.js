const mongoose = require('mongoose')
const Schema = mongoose.Schema

const membroSchema = new Schema({
    nome: {
        type: String,
        require: true,
        trim: true              
    },
    // subsistema: {
    //     type: String,
    //     riquire: true,
    //     trim: true,
    // },
    // cargo: {
    //     type: String,
    //     trim: true
    // },
    linkedin: {
        type: String,
        trim: true
    },
    img: {
        type: String,
        trim: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
    },
    data: 
        [
            {
                subsistema: {
                    type: String,
                    enum: ['Baterias' , 'Aquisição', 'Site', 'Sem Classificação'],
                    default: 'Sem Classificação',
                    require: true
                },
                cargo: {
                    type: String,
                    trim: true
                },
                year: {
                    type: Number,
                    default: 2020
                }  
            }
            
        ]
    
})

/*
    {
    "nome" : "nome",
    "ano" : "2020",
    "subsistema": "xxxxxxxx",
    "Linkedin" : "http://xxxx..xxx.x",
    "img" : "rota"
    }
    
*/

const Membro = mongoose.model('Membro',membroSchema)
module.exports = Membro
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const membroSchema = new Schema({
    nome: {
        type: String,
        require: true,
        trim: true              
    },
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
            cargo: {
                type:String,
                trim: true
            },
            subsistema: {
                type: String,
                enum: ['Baterias' , 'Aquisição', 'Site', 'Sem Classificação'],
                default: 'Sem Classificação',
                require: true
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
    "linkedin" : "ulr",
    "img": "diretorio",
    "data": [
        "cargo": "cargo",
        "subsistema": "subsistema",
        "year": "2020"
        ]
    }
    
*/

const Membro = mongoose.model('Membro',membroSchema)
module.exports = Membro
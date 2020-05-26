const mongoose = require('mongoose');
const uniquevalidator = require('mongoose-unique-validator');


let Schema = mongoose.Schema;

let negocioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Favor de ingresar el nombre de la tienda']

    },
    direccion: {
        type: String,
        required: [true, 'Favor de ingresar la direccion de la tienda']
    },
    categorias: {
        type: Array,
        required: [true, 'Favor de ingresar la(s) categoria(s) de la tienda']
    },
    calificacion: {
        type: Number,
        default: 0
    },
    comentarios:{
        type: String
    },
    imagenes:{
        type:String
    },
    estado: {
        type: String,
        default: 'DISPONIBLE'
    },
    productos:{
        type: String
    }

});



negocioSchema.plugin(uniquevalidator, {
    message: '{PATH} Debe ser unico y diferente'
});

module.exports = mongoose.model('Negocio', negocioSchema);
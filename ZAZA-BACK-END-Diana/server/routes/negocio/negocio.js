const express = require('express');
const _ = require('underscore');
const Negocio = require('../../models/negocio');
const app = express();


//RUTA PARA OBTENER LOS DATOS DE LOS NEGOCIOS QUE SE VAN A MOSTRAR EN PANTALLA
app.route('/obtenerNegocios').get(function (req, res) {
    Negocio.find(function (err, negocio){
    if(err){
      console.log(err);
    }
    else {
      res.json(negocio);
    }
  });
});



//RUTA PARA REGISTRAR UNA NUEVA TIENDA O NEGOCIO
app.post('/registrarNegocio',(req,res) =>{

    let body = req.body;

    let negocio = new Negocio({
        nombre: body.nombre,
        direccion: body.direccion,
        categorias: body.categorias,
        imagenes: body.imagenes,
        estado: body.estado,
        productos: body.productos
    });  
    negocio.save((err, negocioDB) =>{
        if (err) {
           return res.status(400).json({
                ok:false,
                err
            });
            
        }
        return res.status(200).json({
            ok: true,
            negocioDB
        });
    });

});


//RUTA PARA ACTUALIZAR LOS DATOS DE UNA TIENDA
app.put('/actualizarTienda/:id',(req, res)=>{
    let id = req.params.id;
    let body = _.pick(req.body, ['nombre','direccion','categorias','estado']);

    Negocio.findByIdAndUpdate(id, body,{new:true, runValidators: true, context: 'query'},(err, negocioDB)=>{
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            negocioDB
        });
    });
});

module.exports = app;
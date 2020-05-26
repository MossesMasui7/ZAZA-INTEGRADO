const express = require("express");
const _ = require("underscore");
const Usuario = require("../../models/usuario");
const app = express();

app.put("/actualizar/:id", (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ["nombre", "apellidos", "contraseña", "telefono", "img"]);
  
    Usuario.findByIdAndUpdate(
      id,
      body,
      { new: true, runValidators: true, context: "query" },
      (err, usrDB) => {
        if (err) {
          return res.status(400).json({
            ok: false,
            err
          });
        }
        return res.status(200).json({
          ok: true,
          msg: `Usuario actualizado correctamente`,
          cont: usrDB
        });
      }
    );
  });
  module.exports = app;
const express = require('express');

const router = express.Router();

//Metodo get para listar a todos los usuarios existentes
router.get('/', async (req, res, next) => {
  //Resopuesta a la peticion
  res.status(200).json({
    gawr: 'Hola Usuario'
  })
})

module.exports = router;
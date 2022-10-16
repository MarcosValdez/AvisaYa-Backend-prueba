const express = require('express')
const cors = require('cors')
const routerApi = require('./routes');

//Importamos el dotenv para las variables de entorno
require('dotenv').config()

//Para poder usar el framework de express
//Se crean las opciones de cors
let corsOptions = {
  //Se declara el origin 
  origin: '*' // Compliant
};

//Para detectar por donde se usa la api
//Se importa el helmet
const helmet = require("helmet");

//Para usar app de express
const app = express(); 
//Se declara el puerto
const PORT = process.env.PORT || 3000

//Importamos la ruta not found
const notFound = require('./middleware/notFound.middlewares')
//Importamos el control de errores
const errors = require('./middleware/errors.middlewares')


//Se crea una instancia de express
//Se usa el helmet
app.use(helmet.hidePoweredBy());

//Para manejar el uso de la api
//Se usa el cors
app.use(cors(corsOptions))
//Para manejar las opciones
//Se usan las urlencoded
app.use(express.urlencoded({extended: true, limit: "8mb"}));
//Se usa el json
app.use(express.json())

routerApi(app);

app.get('/', (req, res) => {
  //Respuesta a la peticion
  res.status(200).json({
    gawr: 'Hola mi HOME'
  })
})

/// Archivos middlewares
app.use(notFound)
app.use(errors)

app.listen(PORT, () => {
  console.log(`La api esta en http://localhost:${PORT}`);
})

//En este archivo estan las credenciales de la BD

//Importacion del modulo
module.exports = {
    //Se declara el json databse
    database: {
        //Datos del host
        host: '',
        //Datos del user
        user: '',
        //Datos de la contraseña
        password: process.env.PASSWORDSQL,
        //Database
        database: ''
    }
}
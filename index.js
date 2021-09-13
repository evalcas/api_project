const express = require('express'); //de esta forma se importa en node
require('dotenv').config();
const {dbConection} = require('./config/database');
const cors  = require('cors');

//Creando el servidor express
const app = express();

//Configuracion de CORS
app.use(cors());

//Conexion a la BD
dbConection();

//console.log(process.env);

//Rutas de la API
app.get('/',(req, res)=>{
    res.json({
        ok:true,
        msg: 'Bienvenidos a node'
    });
});


//Para levantar el servidor
app.listen(process.env.PORT, ()=>{
    console.log('Servidor corriendo en el puerto ' + process.env.PORT)
})






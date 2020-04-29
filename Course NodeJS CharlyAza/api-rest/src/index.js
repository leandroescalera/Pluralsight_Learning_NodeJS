const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;


//middlewares
app.use(morgan('dev'));
//app.use(bodyParser.json());

//||||||||||||||||||||||||||||||||||||||||||||||||||
//--------------------------------------------------
// Conexión a la negocio de Datos
//--------------------------------------------------
const db = new Sequelize('bd_facturacion', 'chelomon', '123456', {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql',
    operatorsAliases: 0,
    define: {
        timestamps: 0
    }
});
//||||||||||||||||||||||||||||||||||||||||||||||||||

//--------------------------------------------------
// DEFINICION DE MODELOS
//--------------------------------------------------
const models = {};
//negocio
models['Cliente'] = db.import('./models/negocio/cliente.js');
models['Factura'] = db.import('./models/negocio/factura.js');
models['Producto'] = db.import('./models/negocio/producto.js');
models['Detalle'] = db.import('./models/negocio/detalle.js');
//seguridad





//--------------------------------------------------
// Definición de servicios
//--------------------------------------------------
//NEGOCIO
const services = {};
services['Cliente'] = require('./services/negocio/cliente.services')(services, models, Sequelize.Op);
services['Factura'] = require('./services/negocio/factura.services')(services, models, Sequelize.Op);
services['Producto'] = require('./services/negocio/producto.services.js')(services, models, Sequelize.Op);
services['Detalle'] = require('./services/negocio/detalle.services.js')(services, models, Sequelize.Op);
//SEGURIDAD 



//--------------------------------------------------
// Definición de Controladores
//--------------------------------------------------
//NEGOCIO
require('./controllers/negocio/cliente.controllers')(router, services);
require('./controllers/negocio/factura.controllers')(router, services);
require('./controllers/negocio/producto.controllers')(router, services);
require('./controllers/negocio/detalle.controllers')(router, services);
//SEGURIDAD


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CARGADO DEL ENRUTADOR A LA APP
app.use('/api-rest/v1', router);


// MANEJO DE ERRORES
app.use((err, req, res, next) => {
    console.error(err.stack);
    return res.status(400).json({});
});

// RELACIONES
//||||||||||||||||||||||||||||||||||||||||||||||||||
//--------------------------------------------------
Object.keys(models).forEach((nombre) => {
    if (models[nombre].asociar) {
        models[nombre].asociar(models);
    }
});
//--------------------------------------------------
//||||||||||||||||||||||||||||||||||||||||||||||||||


//INICIALIZACION DE LA APLICACION
app.listen(port, () => {
    console.log(`API REST corriendo en el puerto https://localhost:${port}`);
})
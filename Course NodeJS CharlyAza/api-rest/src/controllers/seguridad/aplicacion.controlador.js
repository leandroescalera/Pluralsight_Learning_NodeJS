'use strict'
module.exports = (router, servicios) => {

    router.get('/aplicacion', (req, res, next) => {
        return servicios.Aplicacion.listar({
                activo: true
            })
            .then((aplicaciones) => {
                return res.status(200).json(aplicaciones);
            })
            .catch(next);
    });

    router.post('/aplicacion', (req, res, next) => {
        console.log('================================================================== /n')
        console.log('esta entrando por POST, aplicacion.controlador.js')
        return servicios.Aplicacion.crear(req.body)
            .then((aplicaciones) => {
                return res.status(201).json(aplicaciones);
            })
            .catch(next);
    });

    router.get('/aplicacion/:id', (req, res, next) => {
        return servicios.Aplicacion.obtener(req.params.id)
            .then((aplicaciones) => {
                return res.status(200).json(aplicaciones);
            })
            .catch(next);
    });

    router.put('/aplicacion/:id', (req, res, next) => {
        return servicios.Aplicacion.actualizar(req.params.id, req.body)
            .then((aplicaciones) => {
                return res.status(200).json(aplicaciones);
            })
            .catch(next);
    });

    router.delete('/aplicacion/:id', (req, res, next) => {
        return servicios.Aplicacion.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });



};

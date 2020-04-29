module.exports = (router, services) => {

    router.get('/detalle', (req, res, next) => {
        return services.Detalle.listar({ activo: true })
            .then((detalles) => {
                return res.status(200).json(detalles);
            })
            .catch(next);
    });

    router.post('/detalle', (req, res, next) => {
        return services.Detalle.crear(req.body)
            .then((detalles) => {
                return res.status(201).json(detalles);
            })
            .catch(next);
    });

    router.get('/detalle/:id', (req, res, next) => {
        return services.Detalle.obtener(req.params.id)
            .then((detalles) => {
                return res.status(200).json(detalles);
            })
            .catch(next);
    });

    router.put('/detalle/:id', (req, res, next) => {
        return services.Detalle.actualizar(req.params.id, req.body)
            .then((detalles) => {
                return res.status(200).json(detalles);
            })
            .catch(next);
    });

    router.delete('/detalle/:id', (req, res, next) => {
        return services.Detalle.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
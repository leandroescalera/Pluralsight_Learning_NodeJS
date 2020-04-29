module.exports = (router, services) => {

    router.get('/factura', (req, res, next) => {
        return services.Factura.listar({ activo: true })
            .then((facturas) => {
                return res.status(200).json(facturas);
            })
            .catch(next);
    });

    router.post('/factura', (req, res, next) => {
        return services.Factura.crear(req.body)
            .then((facturas) => {
                return res.status(201).json(facturas);
            })
            .catch(next);
    });

    router.get('/factura/:id', (req, res, next) => {
        return services.Factura.obtener(req.params.id)
            .then((facturas) => {
                return res.status(200).json(facturas);
            })
            .catch(next);
    });

    router.put('/factura/:id', (req, res, next) => {
        return services.Factura.actualizar(req.params.id, req.body)
            .then((facturas) => {
                return res.status(200).json(facturas);
            })
            .catch(next);
    });

    router.delete('/factura/:id', (req, res, next) => {
        return services.Factura.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
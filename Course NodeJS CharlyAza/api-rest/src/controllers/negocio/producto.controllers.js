module.exports = (router, services) => {

    router.get('/producto', (req, res, next) => {
        return services.Producto.listar({ activo: true })
            .then((productos) => {
                return res.status(200).json(productos);
            })
            .catch(next);
    });

    router.post('/producto', (req, res, next) => {
        return services.Producto.crear(req.body)
            .then((productos) => {
                return res.status(201).json(productos);
            })
            .catch(next);
    });

    router.get('/producto/:id', (req, res, next) => {
        return services.Producto.obtener(req.params.id)
            .then((productos) => {
                return res.status(200).json(productos);
            })
            .catch(next);
    });

    router.put('/producto/:id', (req, res, next) => {
        return services.Producto.actualizar(req.params.id, req.body)
            .then((productos) => {
                return res.status(200).json(productos);
            })
            .catch(next);
    });

    router.delete('/producto/:id', (req, res, next) => {
        return services.Producto.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
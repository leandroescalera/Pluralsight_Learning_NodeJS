module.exports = (router, services) => {

    router.get('/cliente', (req, res, next) => {
        return services.Cliente.listar({ activo: true })
            .then((clientes) => {
                return res.status(200).json(clientes);
            })
            .catch(next);
    });

    router.post('/cliente', (req, res, next) => {
        return services.Cliente.crear(req.body)
            .then((clientes) => {
                return res.status(201).json(clientes);
            })
            .catch(next);
    });

    router.get('/cliente/:id', (req, res, next) => {
        return services.Cliente.obtener(req.params.id)
            .then((clientes) => {
                return res.status(200).json(clientes);
            })
            .catch(next);
    });

    router.put('/cliente/:id', (req, res, next) => {
        return services.Cliente.actualizar(req.params.id, req.body)
            .then((clientes) => {
                return res.status(200).json(clientes);
            })
            .catch(next);
    });

    router.delete('/cliente/:id', (req, res, next) => {
        return services.Cliente.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
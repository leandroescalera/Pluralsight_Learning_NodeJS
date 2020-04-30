module.exports = (router, servicios) => {

    router.get('/modulo', (req, res, next) => {
        return servicios.Modulo.listar({activo: true})
            .then((modulos) => {
                return res.status(200).json(modulos);
            })
            .catch(next);
    });

    router.post('/modulo', (req, res, next) => {
        return servicios.Modulo.crear(req.body)
            .then((modulos) => {
                return res.status(201).json(modulos);
            })
            .catch(next);
    });

    router.get('/modulo/:id', (req, res, next) => {
        return servicios.Modulo.obtener(req.params.id)
            .then((modulos) => {
                return res.status(200).json(modulos);
            })
            .catch(next);
    });

    router.put('/modulo/:id', (req, res, next) => {
        return servicios.Modulo.actualizar(req.params.id, req.body)
            .then((modulos) => {
                return res.status(200).json(modulos);
            })
            .catch(next);
    });

    router.delete('/modulo/:id', (req, res, next) => {
        return servicios.Modulo.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};

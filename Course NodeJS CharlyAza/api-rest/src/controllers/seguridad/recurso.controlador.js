module.exports = (router, servicios) => {

    router.get('/recurso', (req, res, next) => {
        return servicios.Recurso.listar({
                activo: true
            })
            .then((recursos) => {
                return res.status(200).json(recursos);
            })
            .catch(next);
    });

    router.get('/recurso/modulo/:idModulo', (req, res, next) => {
        return servicios.Recurso.listar({
                idModulo: req.params.idModulo,
                activo: true
            })
            .then((recursos) => {
                return res.status(200).json(recursos);
            })
            .catch(next);
    });

    router.post('/recurso', (req, res, next) => {
        return servicios.Recurso.crear(req.body)
            .then((recursos) => {
                return res.status(201).json(recursos);
            })
            .catch(next);
    });

    router.get('/recurso/:id', (req, res, next) => {
        return servicios.Recurso.obtener(req.params.id)
            .then((recursos) => {
                return res.status(200).json(recursos);
            })
            .catch(next);
    });

    router.put('/recurso/:id', (req, res, next) => {
        return servicios.Recurso.actualizar(req.params.id, req.body)
            .then((recursos) => {
                return res.status(200).json(recursos);
            })
            .catch(next);
    });

    router.delete('/recurso/:id', (req, res, next) => {
        return servicios.Recurso.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
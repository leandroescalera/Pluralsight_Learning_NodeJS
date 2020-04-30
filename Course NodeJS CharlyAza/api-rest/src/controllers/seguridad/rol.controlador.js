module.exports = (router, servicios) => {

    router.get('/rol', (req, res, next) => {
        return servicios.Rol.listar({
                activo: true
            })
            .then((roles) => {
                return res.status(200).json(roles);
            })
            .catch(next);
    });

    router.post('/rol', (req, res, next) => {
        return servicios.Rol.crear(req.body)
            .then((roles) => {
                return res.status(201).json(roles);
            })
            .catch(next);
    });

    router.get('/rol/:id', (req, res, next) => {
        return servicios.Rol.obtener(req.params.id)
            .then((roles) => {
                return res.status(200).json(roles);
            })
            .catch(next);
    });

    router.put('/rol/:id', (req, res, next) => {
        return servicios.Rol.actualizar(req.params.id, req.body)
            .then((roles) => {
                return res.status(200).json(roles);
            })
            .catch(next);
    });

    router.delete('/rol/:id', (req, res, next) => {
        return servicios.Rol.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
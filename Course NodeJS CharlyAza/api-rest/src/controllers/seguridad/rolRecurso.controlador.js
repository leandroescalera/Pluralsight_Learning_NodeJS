module.exports = (router, servicios) => {

    router.get('/rolRecurso', (req, res, next) => {
        return servicios.RolRecurso.listar()
            .then((rolesRecursos) => {
                return res.status(200).json(rolesRecursos);
            })
            .catch(next);
    });

    router.post('/rolRecurso', (req, res, next) => {
        return servicios.RolRecurso.crear(req.body)
            .then((rolesRecursos) => {
                return res.status(201).json(rolesRecursos);
            })
            .catch(next);
    });

    router.get('/rolRecurso/:id', (req, res, next) => {
        return servicios.RolRecurso.listar({idRecurso: req.params.id})
            .then((rolesRecursos) => {
                return res.status(200).json(rolesRecursos);
            })
            .catch(next);
    });

    router.put('/rolRecurso/:id', (req, res, next) => {
        return servicios.RolRecurso.actualizar(req.params.id, req.body)
            .then((rolesRecursos) => {
                return res.status(200).json(rolesRecursos);
            })
            .catch(next);
    });

    router.delete('/rolRecurso/:id', (req, res, next) => {
        return servicios.RolRecurso.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};

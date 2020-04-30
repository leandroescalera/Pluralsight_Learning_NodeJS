module.exports = (router, servicios) => {

    router.get('/persona', (req, res, next) => {
        return servicios.Persona.listar({
            activo: true
        })
            .then((personas) => {
                return res.status(200).json(personas);
            })
            .catch(next);
    });

    router.post('/persona', (req, res, next) => {
        return servicios.Persona.crear(req.body)
            .then((personas) => {
                return res.status(201).json(personas);
            })
            .catch(next);
    });

    router.get('/persona/:id', (req, res, next) => {
        return servicios.Persona.obtener(req.params.id)
            .then((personas) => {
                return res.status(200).json(personas);
            })
            .catch(next);
    });

    router.put('/persona/:id', (req, res, next) => {
        return servicios.Persona.actualizar(req.params.id, req.body)
            .then((personas) => {
                return res.status(200).json(personas);
            })
            .catch(next);
    });

    router.delete('/persona/:id', (req, res, next) => {
        return servicios.Persona.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};

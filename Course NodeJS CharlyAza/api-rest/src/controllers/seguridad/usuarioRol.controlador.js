module.exports = (router, servicios) => {

    router.get('/usuarioRol', (req, res, next) => {
        return servicios.UsuarioRol.listar()
            .then((usuariosRoles) => {
                return res.status(200).json(usuariosRoles);
            })
            .catch(next);
    });

    router.post('/usuarioRol', (req, res, next) => {
        return servicios.UsuarioRol.crear(req.body)
            .then((usuariosRoles) => {
                return res.status(201).json(usuariosRoles);
            })
            .catch(next);
    });

    router.get('/usuarioRol/:id', (req, res, next) => {
        return servicios.UsuarioRol.listar({idUsuario: req.params.id})
            .then((usuariosRoles) => {
                return res.status(200).json(usuariosRoles);
            })
            .catch(next);
    });

    router.put('/usuarioRol/:id', (req, res, next) => {
        return servicios.UsuarioRol.actualizar(req.params.id, req.body)
            .then((usuariosRoles) => {
                return res.status(200).json(usuariosRoles);
            })
            .catch(next);
    });

    router.delete('/usuarioRol/:id', (req, res, next) => {
        return servicios.UsuarioRol.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};

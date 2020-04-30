module.exports = (servicios, modelos, Op) => {

    const usuarioRolServicio = {};

    // metodos Repository
    usuarioRolServicio.listar = (params) => {
        return modelos.UsuarioRol.findAll(usuarioRolServicio.filtro(params));
    };

    usuarioRolServicio.encontrarUno = (params) => {
        return modelos.UsuarioRol.findOne(usuarioRolServicio.filtro(params));
    };

    usuarioRolServicio.construir = (params) => {
        return modelos.UsuarioRol.build(params);
    };

    usuarioRolServicio.guardar = (UsuarioRol, params) => {
        if (params) {
            UsuarioRol.set(params);
        }
        return UsuarioRol.save();
    };

    usuarioRolServicio.destruir = (UsuarioRol) => {
        return UsuarioRol.destroy();
    };

    usuarioRolServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    usuarioRolServicio.crear = (params) => {
        params.fechaRegistro = new Date();
        params.activo = true;
        return usuarioRolServicio.guardar(usuarioRolServicio.construir(params), params);
    };

    usuarioRolServicio.actualizar = (id, params) => {
        return usuarioRolServicio.obtener(id)
            .then((UsuarioRol) => {
                params.fechaModificacion = new Date();
                return usuarioRolServicio.guardar(UsuarioRol, params);
            });
    };

    usuarioRolServicio.obtener = (id) => {
        return usuarioRolServicio.encontrarUno({ id })
            .then((UsuarioRol) => {
                if (!UsuarioRol) throw new Error('No se ha encontrado');
                return UsuarioRol;
            });
    }

    usuarioRolServicio.eliminar = (id) => {
        return usuarioRolServicio.obtener(id)
            .then(usuarioRolServicio.destruir);
    };

    return usuarioRolServicio;
};

module.exports = (servicios, modelos, Op) => {

    const UsuarioServicio = {};

    // metodos Repository
    UsuarioServicio.listar = (params) => {
        return modelos.Usuario.findAll(UsuarioServicio.filtro(params));
    };

    UsuarioServicio.encontrarUno = (params) => {
        return modelos.Usuario.findOne(UsuarioServicio.filtro(params));
    };

    UsuarioServicio.construir = (params) => {
        return modelos.Usuario.build(params);
    };

    UsuarioServicio.guardar = (Usuario, params) => {
        if (params) {
            Usuario.set(params);
        }
        return Usuario.save();
    };

    UsuarioServicio.destruir = (Usuario) => {
        return Usuario.destroy();
    };

    UsuarioServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    UsuarioServicio.crear = (params) => {
        params.estado = 'VIGENTE';
        params.fechaRegistro = new Date();
        params.activo = true;
        return UsuarioServicio.guardar(UsuarioServicio.construir(params), params);
    };

    UsuarioServicio.actualizar = (id, params) => {
        return UsuarioServicio.obtener(id).then((Usuario) => {
            if(params.password && params.password.length > 0) {
                params.password = require('crypto').createHash('sha256')
                    .update(params.password, 'utf-8').digest('hex');
            } else {
                params.password = Usuario.password;
            }
            params.fechaModificacion = new Date();
            return UsuarioServicio.guardar(Usuario, params);
        });
    };

    UsuarioServicio.obtener = (id) => {
        return UsuarioServicio.encontrarUno({ id })
        .then((Usuario) => {
            if (!Usuario) throw new Error('No se ha encontrado');
            return Usuario;
        });
    }

    UsuarioServicio.eliminar = (id) => {
        return UsuarioServicio.obtener(id)
        .then(UsuarioServicio.destruir);
    };

    return UsuarioServicio;
};

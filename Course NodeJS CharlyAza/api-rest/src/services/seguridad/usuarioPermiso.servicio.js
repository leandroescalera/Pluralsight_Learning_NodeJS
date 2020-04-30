module.exports = (servicios, modelos, Op) => {

    const UsuarioPermisoServicio = {};

    // metodos Repository
    UsuarioPermisoServicio.listar = (params) => {
        return modelos.Usuario.findAll(UsuarioPermisoServicio.filtro(params));
    };

    UsuarioPermisoServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    return UsuarioPermisoServicio;

};

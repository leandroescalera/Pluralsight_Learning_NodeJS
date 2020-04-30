module.exports = (servicios, modelos, Op) => {

    const RolServicio = {};

    // metodos Repository
    RolServicio.listar = (params) => {
        return modelos.Rol.findAll(RolServicio.filtro(params));
    };

    RolServicio.encontrarUno = (params) => {
        return modelos.Rol.findOne(RolServicio.filtro(params));
    };

    RolServicio.construir = (params) => {
        return modelos.Rol.build(params);
    };

    RolServicio.guardar = (Rol, params) => {
        if (params) {
            Rol.set(params);
        }
        return Rol.save();
    };

    RolServicio.destruir = (Rol) => {
        return Rol.destroy();
    };

    RolServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    RolServicio.crear = (params) => {
        params.fechaRegistro = new Date();
        params.activo = true;
        return RolServicio.guardar(RolServicio.construir(params), params);
    };

    RolServicio.actualizar = (id, params) => {
        return RolServicio.obtener(id)
            .then((Rol) => {
                params.fechaModificacion = new Date();
                return RolServicio.guardar(Rol, params);
            });
    };

    RolServicio.obtener = (id) => {
        return RolServicio.encontrarUno({ id })
            .then((Rol) => {
                if (!Rol) throw new Error('No se ha encontrado');
                return Rol;
            });
    }

    RolServicio.eliminar = (id) => {
        return RolServicio.obtener(id)
            .then(RolServicio.destruir);
    };

    return RolServicio;
};

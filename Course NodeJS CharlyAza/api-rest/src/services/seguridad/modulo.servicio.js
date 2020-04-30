module.exports = (servicios, modelos, Op) => {

    const ModuloServicio = {};

    // metodos Repository
    ModuloServicio.listar = (params) => {
        return modelos.Modulo.findAll(ModuloServicio.filtro(params));
    };

    ModuloServicio.encontrarUno = (params) => {
        return modelos.Modulo.findOne(ModuloServicio.filtro(params));
    };

    ModuloServicio.construir = (params) => {
        return modelos.Modulo.build(params);
    };

    ModuloServicio.guardar = (Modulo, params) => {
        if (params) {
            Modulo.set(params);
        }
        return Modulo.save();
    };

    ModuloServicio.destruir = (Modulo) => {
        return Modulo.destroy();
    };

    ModuloServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    ModuloServicio.crear = (params) => {
        params.fechaRegistro = new Date();
        params.activo = true;
        return ModuloServicio.guardar(ModuloServicio.construir(params), params);
    };

    ModuloServicio.actualizar = (id, params) => {
        return ModuloServicio.obtener(id)
            .then((Modulo) => {
                params.fechaModificacion = new Date();
                return ModuloServicio.guardar(Modulo, params);
            });
    };

    ModuloServicio.obtener = (id) => {
        return ModuloServicio.encontrarUno({ id })
            .then((Modulo) => {
                if (!Modulo) throw new Error('No se ha encontrado');
                return Modulo;
            });
    }

    ModuloServicio.eliminar = (id) => {
        return ModuloServicio.obtener(id)
            .then(ModuloServicio.destruir);
    };

    return ModuloServicio;
};

module.exports = (services, models, Op) => {

    const DetalleServicio = {};

    // metodos Repository
    DetalleServicio.listar = (params) => {
        return models.Detalle.findAll(DetalleServicio.filtro(params));
    };

    DetalleServicio.encontrarUno = (params) => {
        return models.Detalle.findOne(DetalleServicio.filtro(params));
    };

    DetalleServicio.construir = (params) => {
        return models.Detalle.build(params);
    };

    DetalleServicio.guardar = (Detalle, params) => {
        if (params) {
            Detalle.set(params);
        }
        return Detalle.save();
    };

    DetalleServicio.destruir = (Detalle) => {
        return Detalle.destroy();
    };

    DetalleServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    DetalleServicio.crear = (params) => {
        return DetalleServicio.guardar(DetalleServicio.construir(params), params);
    };

    DetalleServicio.actualizar = (num_detalle, params) => {
        return DetalleServicio.obtener(num_detalle)
            .then((Detalle) => {
                return DetalleServicio.guardar(Detalle, params);
            });
    };

    DetalleServicio.obtener = (num_detalle) => {
        return DetalleServicio.encontrarUno({ num_detalle })
            .then((Detalle) => {
                if (!Detalle) throw new Error('No se ha encontrado el Detalle...');
                return Detalle;
            });
    }

    DetalleServicio.eliminar = (num_detalle) => {
        return DetalleServicio.obtener(num_detalle)
            .then(DetalleServicio.destruir);
    };

    return DetalleServicio;
};
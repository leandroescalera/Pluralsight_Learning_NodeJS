module.exports = (services, models, Op) => {

    const FacturaServicio = {};

    // metodos Repository
    FacturaServicio.listar = (params) => {
        return models.Factura.findAll(FacturaServicio.filtro(params));
    };

    FacturaServicio.encontrarUno = (params) => {
        return models.Factura.findOne(FacturaServicio.filtro(params));
    };

    FacturaServicio.construir = (params) => {
        return models.Factura.build(params);
    };

    FacturaServicio.guardar = (Factura, params) => {
        if (params) {
            Factura.set(params);
        }
        return Factura.save();
    };

    FacturaServicio.destruir = (Factura) => {
        return Factura.destroy();
    };

    FacturaServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    FacturaServicio.crear = (params) => {
        return FacturaServicio.guardar(FacturaServicio.construir(params), params);
    };

    FacturaServicio.actualizar = (num_factura, params) => {
        return FacturaServicio.obtener(num_factura)
            .then((Factura) => {
                return FacturaServicio.guardar(Factura, params);
            });
    };

    FacturaServicio.obtener = (num_factura) => {
        return FacturaServicio.encontrarUno({ num_factura })
            .then((Factura) => {
                if (!Factura) throw new Error('No se ha encontrado la Factura...');
                return Factura;
            });
    }

    FacturaServicio.eliminar = (num_factura) => {
        return FacturaServicio.obtener(num_factura)
            .then(FacturaServicio.destruir);
    };

    return FacturaServicio;
};
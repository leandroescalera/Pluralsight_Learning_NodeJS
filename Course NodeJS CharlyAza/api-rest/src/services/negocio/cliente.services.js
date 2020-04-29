module.exports = (services, models, Op) => {

    const ClienteServicio = {};

    // metodos Repository
    ClienteServicio.listar = (params) => {
        return models.Cliente.findAll(ClienteServicio.filtro(params));
    };

    ClienteServicio.encontrarUno = (params) => {
        return models.Cliente.findOne(ClienteServicio.filtro(params));
    };

    ClienteServicio.construir = (params) => {
        return models.Cliente.build(params);
    };

    ClienteServicio.guardar = (Cliente, params) => {
        if (params) {
            Cliente.set(params);
        }
        return Cliente.save();
    };

    ClienteServicio.destruir = (Cliente) => {
        return Cliente.destroy();
    };

    ClienteServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    ClienteServicio.crear = (params) => {
        return ClienteServicio.guardar(ClienteServicio.construir(params), params);
    };

    ClienteServicio.actualizar = (id_cliente, params) => {
        return ClienteServicio.obtener(id_cliente)
            .then((Cliente) => {
                return ClienteServicio.guardar(Cliente, params);
            });
    };

    ClienteServicio.obtener = (id_cliente) => {
        return ClienteServicio.encontrarUno({ id_cliente })
            .then((Cliente) => {
                if (!Cliente) throw new Error('No se ha encontrado al CLiente...');
                return Cliente;
            });
    }

    ClienteServicio.eliminar = (id_cliente) => {
        return ClienteServicio.obtener(id_cliente)
            .then(ClienteServicio.destruir);
    };

    return ClienteServicio;
};
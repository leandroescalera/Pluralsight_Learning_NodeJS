module.exports = (services, modelos, Op) => {

    const ClienteServicio = {};

    // metodos Repository
    ClienteServicio.listar = (params) => {
        return modelos.Cliente.findAll(ClienteServicio.filtro(params));
    };

    ClienteServicio.encontrarUno = (params) => {
        return modelos.Cliente.findOne(ClienteServicio.filtro(params));
    };

    ClienteServicio.construir = (params) => {
        return modelos.Cliente.build(params);
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

    ClienteServicio.actualizar = (id, params) => {
        return ClienteServicio.obtener(id)
            .then((Cliente) => {
                return ClienteServicio.guardar(Cliente, params);
            });
    };

    ClienteServicio.obtener = (id) => {
        return ClienteServicio.encontrarUno({ id })
            .then((Cliente) => {
                if (!Cliente) throw new Error('No se ha encontrado');
                return Cliente;
            });
    }

    ClienteServicio.eliminar = (id) => {
        return ClienteServicio.obtener(id)
            .then(ClienteServicio.destruir);
    };

    return ClienteServicio;
};
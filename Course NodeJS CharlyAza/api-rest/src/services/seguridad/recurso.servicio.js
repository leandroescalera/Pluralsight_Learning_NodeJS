module.exports = (servicios, modelos, Op) => {

    const RecursoServicio = {};

    // metodos Repository
    RecursoServicio.listar = (params) => {
        return modelos.Recurso.findAll(RecursoServicio.filtro(params));
    };

    RecursoServicio.encontrarUno = (params) => {
        return modelos.Recurso.findOne(RecursoServicio.filtro(params));
    };

    RecursoServicio.construir = (params) => {
        return modelos.Recurso.build(params);
    };

    RecursoServicio.guardar = (Recurso, params) => {
        if (params) {
            Recurso.set(params);
        }
        return Recurso.save();
    };

    RecursoServicio.destruir = (Recurso) => {
        return Recurso.destroy();
    };

    RecursoServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    RecursoServicio.crear = (params) => {
        params.fechaRegistro = new Date();
        params.activo = true;
        return RecursoServicio.guardar(RecursoServicio.construir(params), params);
    };

    RecursoServicio.actualizar = (id, params) => {
        return RecursoServicio.obtener(id)
            .then((Recurso) => {
                params.fechaModificacion = new Date();
                return RecursoServicio.guardar(Recurso, params);
            });
    };

    RecursoServicio.obtener = (id) => {
        return RecursoServicio.encontrarUno({ id })
            .then((Recurso) => {
                if (!Recurso) throw new Error('No se ha encontrado');
                return Recurso;
            });
    }

    RecursoServicio.eliminar = (id) => {
        return RecursoServicio.obtener(id)
            .then(RecursoServicio.destruir);
    };

    return RecursoServicio;
};

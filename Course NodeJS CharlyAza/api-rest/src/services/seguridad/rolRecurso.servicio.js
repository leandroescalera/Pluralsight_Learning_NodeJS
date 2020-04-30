module.exports = (servicios, modelos, Op) => {

    const rolRecursoServicio = {};

    // metodos Repository
    rolRecursoServicio.listar = (params) => {
        return modelos.RolRecurso.findAll(rolRecursoServicio.filtro(params));
    };

    rolRecursoServicio.encontrarUno = (params) => {
        return modelos.RolRecurso.findOne(rolRecursoServicio.filtro(params));
    };

    rolRecursoServicio.construir = (params) => {
        return modelos.RolRecurso.build(params);
    };

    rolRecursoServicio.guardar = (RolRecurso, params) => {
        if (params) {
            RolRecurso.set(params);
        }
        return RolRecurso.save();
    };

    rolRecursoServicio.destruir = (RolRecurso) => {
        return RolRecurso.destroy();
    };

    rolRecursoServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    rolRecursoServicio.crear = (params) => {
        params.fechaRegistro = new Date();
        params.activo = true;
        return rolRecursoServicio.guardar(rolRecursoServicio.construir(params), params);
    };

    rolRecursoServicio.actualizar = (id, params) => {
        return rolRecursoServicio.obtener(id)
            .then((RolRecurso) => {
                params.fechaModificacion = new Date();
                return rolRecursoServicio.guardar(RolRecurso, params);
            });
    };

    rolRecursoServicio.obtener = (id) => {
        return rolRecursoServicio.encontrarUno({ id })
            .then((RolRecurso) => {
                if (!RolRecurso) throw new Error('No se ha encontrado');
                return RolRecurso;
            });
    }

    rolRecursoServicio.eliminar = (id) => {
        return rolRecursoServicio.obtener(id)
            .then(rolRecursoServicio.destruir);
    };

    return rolRecursoServicio;
};

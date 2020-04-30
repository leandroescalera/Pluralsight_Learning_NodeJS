module.exports = (servicios, modelos, Op) => {
  const AplicacionServicio = {};

  // metodos Repository
  AplicacionServicio.listar = (params) => {
    return modelos.Aplicacion.findAll(AplicacionServicio.filtro(params));
  };

  AplicacionServicio.encontrarUno = (params) => {
    return modelos.Aplicacion.findOne(AplicacionServicio.filtro(params));
  };

  AplicacionServicio.construir = (params) => {
    return modelos.Aplicacion.build(params);
  };

  AplicacionServicio.guardar = (Aplicacion, params) => {
    Aplicacion.set(params);
    return Aplicacion.save();
  };

  AplicacionServicio.destruir = (Aplicacion) => {
    return Aplicacion.destroy();
  };

  AplicacionServicio.filtro = (condiciones) => {
    return condiciones ? {
      where: condiciones
    } : {};
  };

  // metodos Factory
  AplicacionServicio.crear = (params) => {
    params.fechaRegistro = new Date();
    params.activo = true;
    return AplicacionServicio.guardar(AplicacionServicio.construir(params), params);
  };

  AplicacionServicio.actualizar = (id, params) => {
    console.log('================================================================== /n')
    console.log('esta entrando por ACTUALIZAR, aplicacion.servicio.js')
    return AplicacionServicio.obtener(id)
      .then((Aplicacion) => {
        params.fechaModificacion = new Date();
        return AplicacionServicio.guardar(Aplicacion, params);
      });
  };

  AplicacionServicio.obtener = (id) => {
    return AplicacionServicio.encontrarUno({
        id
      })
      .then((Aplicacion) => {
        if (!Aplicacion) throw new Error('No se ha encontrado');
        return Aplicacion;
      });
  }

  AplicacionServicio.eliminar = (id) => {
    return AplicacionServicio.obtener(id)
      .then(AplicacionServicio.destruir);
  };

  return AplicacionServicio;
};

module.exports = (services, models, Op) => {

    const ProductoServicio = {};

    // metodos Repository
    ProductoServicio.listar = (params) => {
        return models.Producto.findAll(ProductoServicio.filtro(params));
    };

    ProductoServicio.encontrarUno = (params) => {
        return models.Producto.findOne(ProductoServicio.filtro(params));
    };

    ProductoServicio.construir = (params) => {
        return models.Producto.build(params);
    };

    ProductoServicio.guardar = (Producto, params) => {
        if (params) {
            Producto.set(params);
        }
        return Producto.save();
    };

    ProductoServicio.destruir = (Producto) => {
        return Producto.destroy();
    };

    ProductoServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    ProductoServicio.crear = (params) => {
        return ProductoServicio.guardar(ProductoServicio.construir(params), params);
    };

    ProductoServicio.actualizar = (id_producto, params) => {
        return ProductoServicio.obtener(id_producto)
            .then((Producto) => {
                return ProductoServicio.guardar(Producto, params);
            });
    };

    ProductoServicio.obtener = (id_producto) => {
        return ProductoServicio.encontrarUno({ id_producto })
            .then((Producto) => {
                if (!Producto) throw new Error('No se ha encontrado la Producto...');
                return Producto;
            });
    }

    ProductoServicio.eliminar = (id_producto) => {
        return ProductoServicio.obtener(id_producto)
            .then(ProductoServicio.destruir);
    };

    return ProductoServicio;
};
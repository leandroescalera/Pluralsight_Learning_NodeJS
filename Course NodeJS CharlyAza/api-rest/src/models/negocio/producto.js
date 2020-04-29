module.exports = (sequelize, DataTypes) => {
    const Producto = sequelize.define('Producto', {

        id_producto: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true

        },
        nombre: DataTypes.STRING,
        precio: DataTypes.DOUBLE,
        stock: DataTypes.INTEGER,
        fechaRegistro: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'fecha_registro'
        },
        usuarioRegistro: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'usuario_registro'
        },
        fechaModificacion: {
            type: DataTypes.DATE,
            field: 'fecha_modificacion'
        },
        usuarioModificacion: {
            type: DataTypes.STRING,
            field: 'usuario_modificacion'
        },
        activo: DataTypes.BOOLEAN

    }, {
        //schema:'oei',
        tableName: 'producto',
        timestamp: false

    });

    Producto.asociar = (models) => {

        models.Producto.belongsToMany(models.Factura, {
            as: 'factura',
            through: models.Detalle,
            foreignKey: 'idProducto',
            otherKey: 'idFactura'
        });

    };

    return Producto;

};
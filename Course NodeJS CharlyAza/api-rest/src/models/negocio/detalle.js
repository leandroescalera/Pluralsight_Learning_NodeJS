module.exports = (sequelize, DataTypes) => {
    const Detalle = sequelize.define('Detalle', {

        num_detalle: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        idFactura: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'id_factura'

        },

        idProducto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'id_producto'
        },
        cantidad: DataTypes.INTEGER,

        precio: DataTypes.DOUBLE,

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
        tableName: 'Detalle',
        timestamp: false

    });

    return Detalle;
};